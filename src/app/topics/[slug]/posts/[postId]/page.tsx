import Link from "next/link";
import { Suspense } from "react";
import PostShow from "@/components/posts/post-show";
import PostShowLoading from "@/components/posts/post-show-loading";
import CommentList from "@/components/comments/comment-list";
import CommentCreateForm from "@/components/comments/comment-create-form";
import paths from "@/paths";
import ClientAnimation from "@/components/common/client-animation";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <div className="flex flex-col w-[90%] mx-auto sm:max-w-[800px]">
      <ClientAnimation
        type="fadeIn"
        direction="rightToLeft"
        classProp="flex justify-end"
      >
        <Link
          className="underline decoration-solid self-end tracking-tight transition-all text-stone-200 hover:tracking-wide"
          href={paths.topicShow(slug)}
        >
          {"< "}Back to {slug}
        </Link>
      </ClientAnimation>
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm
        postId={postId}
        startOpen={false}
        textColor="text-stone-200"
      />
      <CommentList postId={postId} />
    </div>
  );
}
