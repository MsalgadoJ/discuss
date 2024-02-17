import { notFound } from "next/navigation";
import { db } from "@/db";
import ClientAnimation from "@/components/common/client-animation";

interface PostShowProps {
  postId: string;
}

export default async function PostShow({ postId }: PostShowProps) {
  const post = await db.post.findFirst({
    where: { id: postId },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col my-4 text-stone-200">
      <ClientAnimation type="fadeIn" direction="leftToRight">
        <h1 className="text-2xl font-bold my-2 ">{post.title}</h1>
      </ClientAnimation>
      <ClientAnimation>
        <p className="p-4 bg-stone-200 border-1 border-[#F31260] text-purple rounded">
          {post.content}
        </p>
      </ClientAnimation>
    </div>
  );
}
