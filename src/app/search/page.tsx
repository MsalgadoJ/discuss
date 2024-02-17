import { redirect } from "next/navigation";
import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from "@/db/queries/posts";
import ClientAnimation from "@/components/common/client-animation";

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }

  return (
    <div className="p-4 sm:max-w-[600px] mx-auto">
      <ClientAnimation type="fadeIn" direction="topDown">
        <h2 className="text-stone-200 mb-4 text-xl">Search results:</h2>
      </ClientAnimation>
      <ClientAnimation type="fade">
        <PostList
          placeholderNoPost="No search results available ⛔️"
          fetchData={() => fetchPostsBySearchTerm(term)}
        />
      </ClientAnimation>
    </div>
  );
}
