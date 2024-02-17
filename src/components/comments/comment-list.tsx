import CommentShow from "@/components/comments/comment-show";
import { fetchCommentsByPostId } from "@/db/queries/comments";
import ClientAnimation from "../common/client-animation";

interface CommentListProps {
  postId: string;
}

export default async function CommentList({ postId }: CommentListProps) {
  const comments = await fetchCommentsByPostId(postId);

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );

  const renderedComments = topLevelComments.map((comment) => {
    return (
      <CommentShow key={comment.id} commentId={comment.id} postId={postId} />
    );
  });

  return (
    <div className="space-y-3">
      <ClientAnimation type="fadeIn" direction="downUp">
        <h1 className="text-lg font-bold text-stone-200">
          {comments.length > 0
            ? `All ${comments.length} comments`
            : "Be the first one to comment something 😃"}
        </h1>
      </ClientAnimation>
      {renderedComments}
    </div>
  );
}
