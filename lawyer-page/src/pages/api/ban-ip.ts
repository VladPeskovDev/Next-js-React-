import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const blockedIpsFilePath = path.resolve(process.cwd(), 'blockedIps.json');

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  const authHeader = req.headers['authorization'];
  const authToken = process.env.AUTH_TOKEN;

  if (authHeader !== authToken) {
    return res.status(403).json({ message: 'Недостаточно прав доступа' });
  }

  try {
    const data = JSON.parse(fs.readFileSync(blockedIpsFilePath, 'utf-8'));

    if (method === 'POST') {
      const { ip } = req.body;
      data.blockedIps.push(ip);

      fs.writeFileSync(blockedIpsFilePath, JSON.stringify(data, null, 2));
      return res.status(200).json({ message: `IP ${ip} добавлен в список заблокированных` });
      
    } else if (method === 'DELETE') {
      const { ip } = req.body;
      data.blockedIps = data.blockedIps.filter((blockedIp: string) => blockedIp !== ip);

      fs.writeFileSync(blockedIpsFilePath, JSON.stringify(data, null, 2));
      return res.status(200).json({ message: `IP ${ip} удален из списка заблокированных` });
      
    } else if (method === 'GET') {
      return res.status(200).json({ blockedIps: data.blockedIps });
      
    } else {
      res.setHeader('Allow', ['POST', 'DELETE', 'GET']);
      return res.status(405).end(`Метод ${method} не разрешен`);
    }
  } catch (error) {
    return res.status(500).json({ message: 'Ошибка при работе с файлом заблокированных IP', error });
  }
}
