import { Groq } from 'groq-sdk';

export default async function handler(req, res) {
  const groq = new Groq({ apiKey: process.env.YOUR_SECRET });

  try {
    const response = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: 'Hello from Vercel!' }],
    });

    res.status(200).json({ message: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
