import Image from "next/image";
import CommentCreateForm from "@/components/comments/comment-create-form";
import { fetchCommentsByPostId } from "@/db/queries/comments";
import ClientAnimation from "../common/client-animation";

interface CommentShowProps {
  commentId: string;
  postId: string;
}

export default async function CommentShow({
  commentId,
  postId,
}: CommentShowProps) {
  const comments = await fetchCommentsByPostId(postId);
  const comment = comments.find((c) => c.id === commentId);

  if (!comment) {
    return null;
  }

  const children = comments.filter((c) => c.parentId === commentId);
  const renderedChildren = children.map((child) => {
    return <CommentShow key={child.id} commentId={child.id} postId={postId} />;
  });

  return (
    <>
      <div className="p-4">
        <ClientAnimation type="fade">
          <div className="flex gap-2">
            <Image
              src={comment.user.image || ""}
              alt="user image"
              width={40}
              height={40}
              className="w-10 h-10 rounded-full border-2"
            />
            <div className="flex-1 space-y-3 border-1 shadow-md border-zinc-300 mb-1 bg-stone-200 rounded p-4 transition-height">
              <p className="text-md font-medium text-purple">
                {comment.user.name}
              </p>
              <p className="text-gray-900">{comment.content}</p>

              <CommentCreateForm
                postId={comment.postId}
                parentId={comment.id}
              />
            </div>
          </div>
        </ClientAnimation>
      </div>
      <div className="pl-9">{renderedChildren}</div>
    </>
  );
}
