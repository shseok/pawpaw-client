"use client";

import { useIntersectionObserver } from "@/hooks/common/useIntersectionObserver";
import useCommentsQuery from "@/hooks/queries/PostCommentsQuery";
import usePostsQuery from "@/hooks/queries/PostQuery";
import Image from "next/image";
import { Fragment } from "react";
import FlexBox from "../FlexBox";
import PostHeader from "./PostHeader";
import PostComment from "./PostComment";
import PostContent from "./PostContent";

Image;

export default function PostsList() {
  const { data: posts, fetchNextPage, hasNextPage, status } = usePostsQuery();
  const { data: comments } = useCommentsQuery();

  const { setTarget } = useIntersectionObserver({
    hasNextPage,
    fetchNextPage,
  });

  if (status === "loading") return <div>loading...</div>;

  return (
    <>
      <FlexBox direction="column" className="gap-[40px]">
        {posts?.pages?.map((pages, i) => (
          <Fragment key={i}>
            {pages.map((post) => {
              const filteredComments = comments?.filter(
                (comment) => comment.PostId === post.id
              );
              const filteredCommentsCount = filteredComments
                ? filteredComments.length
                : 0;

              return (
                <FlexBox
                  direction="column"
                  justify="between"
                  className="w-full p-[36px] rounded-[10px] border-[1px] border-[#E9EBED] gap-[16px]"
                >
                  <PostHeader userId={post.userId} />
                  <PostContent content={post.title}>
                    <PostComment commentsNum={filteredCommentsCount}>
                      <FlexBox direction="column">
                        {filteredComments?.map((comment) => (
                          <div key={comment.id}>
                            <span className="font-bold">
                              {comment.User.name}
                            </span>
                            {"  "}
                            {comment.content}
                          </div>
                        ))}
                      </FlexBox>
                    </PostComment>
                  </PostContent>
                </FlexBox>
              );
            })}
          </Fragment>
        ))}
      </FlexBox>
      <div ref={setTarget} />
    </>
  );
}
