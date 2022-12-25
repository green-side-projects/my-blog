// api/trending
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { Posts } = data;
  if (Posts) return res.status(200).json(Posts);
  return res.status(404).json({ error: "Data Not Found" });
}
