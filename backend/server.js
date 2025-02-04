import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Example endpoint: get all deliveries
app.get('/api/deliveries', async (req, res) => {
  try {
    // Ensure your table name and columns match your actual schema
    const result = await pool.query('SELECT * FROM public.deliveries');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching deliveries:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Example endpoint: Get all orders for admin
app.get('/api/admin/orders', async (req, res) => {
  try {
    // Adjust the query according to your database schema
    const result = await pool.query('SELECT * FROM public.bookings');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching admin orders:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Check DB connection
app.get('/api/testdb', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ message: 'Database connection successful!' });
  } catch (error) {
    console.error('Database connection error:', error);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.get('/api/vehicles/info', async (req, res) => {
  try {
    // Query the vehicles table for existing vehicle_number & max_capacity_kg
    const result = await pool.query('SELECT vehicle_number, max_capacity_kg FROM vehicles');
    res.json(result.rows); // send data to the frontend
  } catch (error) {
    console.error('Error fetching vehicle info:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/', (req, res) => {
    res.send('Backend is running!');
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});