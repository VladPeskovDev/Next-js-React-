// pages/api/yandexVerification.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send(' ca6674660fe1aaf4'); // строгое текстовое содержимое
}
