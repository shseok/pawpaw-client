"use client";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";

interface Comment {
  id: number;
  content: string;
  PostId: number;
  User: {
    name: string;
  };
}

const getComments = async () => {
  const { data } = await axios.get<Comment[]>(
    "https://koreanjson.com/comments"
  );
  return data;
};

export default function useCommentsQuery() {
  return useQuery<Comment[]>(["comments"], getComments);
}
