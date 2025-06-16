import type { NextApiRequest, NextApiResponse } from 'next';
import { query } from '@/lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Text is required' });
    try {
      await query('INSERT INTO tweets(text) VALUES($1)', [text]);
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
  } else if (req.method === 'GET') {
    try {
      const result = await query('SELECT id, text, created_at FROM tweets ORDER BY created_at DESC');
      return res.status(200).json(result.rows);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
