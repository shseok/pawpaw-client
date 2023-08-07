"use client";

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
  const response = await fetch("https://koreanjson.com/comments");
  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }
  const data = await response.json();
  return data as Comment[];
};

export default function useCommentsQuery() {
  return useQuery<Comment[]>(["comments"], getComments);
}
