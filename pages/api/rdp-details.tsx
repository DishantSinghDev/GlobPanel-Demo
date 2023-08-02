import { NextApiRequest, NextApiResponse } from 'next';
import rdpDetails from '../../data/rdp-details.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(rdpDetails);
}