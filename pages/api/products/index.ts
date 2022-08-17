import fs from 'fs';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const fileData: any = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  const { products } = data;

  res.status(200).json(products);
}
