import Twilio from "twilio";

export async function POST(req) {
  try {
    const { cart, customerName, customerPhone } = await req.json();

    const client = Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    let messageBody = `New Order from ${customerName} (${customerPhone}):\n`;
    cart.forEach((item, idx) => {
      messageBody += `${idx + 1}. ${item.name} x ${item.quantity} = ₹${
        item.price * item.quantity
      }\n`;
    });
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    messageBody += `Total: ₹${total}`;

    // Send message to your sandbox-joined WhatsApp number
    const message = await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: `whatsapp:+91${customerPhone}`, // Sandbox requires your joined number
      body: messageBody,
    });

    return new Response(JSON.stringify({ success: true, sid: message.sid }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
    });
  }
}
