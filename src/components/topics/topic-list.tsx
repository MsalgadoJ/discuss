import Link from "next/link";
import { Chip } from "@nextui-org/react";
import { db } from "@/db";
import paths from "@/paths";

export default async function TopicList() {
  const topics = await db.topic.findMany();

  if (!topics.length) {
    return (
      <>
        <p className="text-purple mt-4">No topics yet!</p>
        <p className="text-purple">Go ahead and create one 😃</p>
      </>
    );
  }
  const renderedTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Chip
            color="danger"
            variant="shadow"
            radius="sm"
            className="transition-transform hover:-translate-y-1"
          >
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderedTopics}</div>;
}
