// pages/api/transcript.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post('https://tactiq-apps-prod.tactiq.io/transcript', req.body, {
        headers: {
          'Content-Type': 'application/json',
          'Origin': 'https://your-domain.com',
          // Add other necessary headers here
        },
      });
      
      const transcript = response.data.captions.map(caption => caption.text).join(' ');
      res.status(200).json({ transcript });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching transcript' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}