export async function sendSMS(phoneNumber, message) {
  const apiKey = '546fecea-f20b-11ef-8b17-0200cd936042';
  const url = `https://2factor.in/API/V1/${apiKey}/ADDON_SERVICES/SEND/TSMS`;

  const data = {
    From: 'TXTLCL', // Replace with your sender ID
    To: phoneNumber,
    Msg: message,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();

    if (responseData.Status === 'Success') {
      console.log('SMS sent successfully:', responseData);
    } else {
      console.error('Failed to send SMS:', responseData);
    }
  } catch (error) {
    console.error('Error sending SMS:', error);
  }
}

export function formatDeliveryMessage(orderId, status) {
  return `Your order ${orderId} has been ${status}.`;
}

export function formatOrderConfirmationMessage(orderId) {
  return `Your order ${orderId} has been placed successfully!`;
}