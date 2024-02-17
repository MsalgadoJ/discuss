"use client";

import { useFormState } from "react-dom";
import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import * as actions from "@/actions";
import FormButton from "@/components/common/form-button";

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [formState, action] = useFormState(
    actions.createPost.bind(null, slug),
    {
      errors: {},
    }
  );

  return (
    <Popover placement="bottom">
      <PopoverTrigger>
        <Button color="secondary" className="uppercase">
          Create a Post
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg uppercase">Create a Post</h3>

            <Input
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              classNames={{
                label: "text-lg",
                input: ["text-lg", "placeholder:text-lg "],
              }}
            />
            <Textarea
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
              classNames={{
                label: "text-lg",
                input: ["text-lg", "placeholder:text-lg "],
              }}
            />

            {formState.errors._form ? (
              <div className="rounded p-2 bg-red-200 border border-red-400">
                {formState.errors._form.join(", ")}
              </div>
            ) : null}

            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
