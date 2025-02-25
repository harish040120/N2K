import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db.js';
import axios from 'axios';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Example endpoint: get all deliveries
app.get('/api/vehicles', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM vehicles');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Example endpoint: Get all orders for admin
app.get('/api/admins', async (req, res) => {
  try {
    const result = await pool.query('SELECT admin_id, username FROM admin');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching admins:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Check DB connection
app.get('/api/testdb', async (req, res) => {
  try {
    const result = await pool.query('SELECT 1');
    res.json({ message: 'Database connection successful!' });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

// Endpoint to get vehicle info
app.get('/api/routes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM routes');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching routes:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


// Get all orders
app.get('/api/orders', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM orders');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


app.get('/api/deliveries', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM deliveries');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching deliveries:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint to send OTP
app.post('/api/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;
  const apiKey = process.env.TWO_FACTOR_API_KEY;
  const url = `https://2factor.in/API/V1/${apiKey}/SMS/${phoneNumber}/AUTOGEN`;

  try {
    const response = await axios.get(url);
    if (response.data.Status === 'Success') {
      res.status(200).json({ success: true, details: response.data.Details });
    } else {
      res.status(500).json({ success: false, message: response.data.Details });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint to verify OTP
app.post('/api/verify-otp', async (req, res) => {
  const { sessionId, otpInput } = req.body;
  const apiKey = process.env.TWO_FACTOR_API_KEY;
  const url = `https://2factor.in/API/V1/${apiKey}/SMS/VERIFY/${sessionId}/${otpInput}`;

  try {
    const response = await axios.get(url);
    if (response.data.Status === 'Success') {
      res.status(200).json({ success: true, message: 'OTP verified successfully' });
    } else {
      res.status(400).json({ success: false, message: 'Invalid OTP' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/', (req, res) => {
  res.status(200).send('Backend is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});