"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";
import * as actions from "@/actions";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("term") || "");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    actions.search(new FormData(form));
    setSearchTerm("");
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <Input
        size={"sm"}
        name="term"
        placeholder="Search topics"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </form>
  );
}
