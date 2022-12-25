// api/trending
import type { NextApiRequest, NextApiResponse } from "next";
import data from "../data";
type Data = {
  Trending: {
    id: number;
    title: string;
    subtitle: string;
    category: string;
    img: string;
    description: string;
    published: string;
    author: {
      name: string;
      img: string;
      designation: string;
    };
  }[];
  Posts: {
    id: number;
    title: string;
    subtitle: string;
    category: string;
    img: string;
    description: string;
    published: string;
    author: {
      name: string;
      img: string;
      designation: string;
    };
  }[];
  Popular: {
    id: number;
    title: string;
    subtitle: string;
    category: string;
    img: string;
    description: string;
    published: string;
    author: {
      name: string;
      img: string;
      designation: string;
    };
  }[];
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { Posts } = data;
  if (Posts) return res.status(200).json(Posts);
  return res.status(404).json({
    error: "Data Not Found",
    Trending: [],
    Posts: [],
    Popular: [],
  });
}
