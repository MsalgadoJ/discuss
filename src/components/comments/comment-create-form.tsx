"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { Textarea, Button } from "@nextui-org/react";
import FormButton from "@/components/common/form-button";
import * as actions from "@/actions";
import { motion } from "framer-motion";
import ClientAnimation from "../common/client-animation";

interface CommentCreateFormProps {
  postId: string;
  parentId?: string;
  startOpen?: boolean;
  textColor?: string;
}

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

export default function CommentCreateForm({
  postId,
  parentId,
  startOpen,
  textColor = "text-purple",
}: CommentCreateFormProps) {
  const [open, setOpen] = useState(startOpen);
  const ref = useRef<HTMLFormElement | null>(null);
  const [formState, action] = useFormState(
    actions.createComment.bind(null, { postId, parentId }),
    { errors: {} }
  );

  useEffect(() => {
    if (formState.success) {
      ref.current?.reset();

      if (!startOpen) {
        setOpen(false);
      }
    }
  }, [formState, startOpen]);

  const form = (
    <form action={action} ref={ref}>
      <motion.div
        className="space-y-2  mb-2"
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, transition: { duration: 1 } }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible,
        }}
      >
        <Textarea
          name="content"
          label="Reply"
          labelPlacement="inside"
          placeholder="Enter your comment"
          className="mb-2"
          classNames={{
            label: "text-lg",
            input: ["text-lg", "placeholder:text-lg "],
          }}
          isInvalid={!!formState.errors.content}
          errorMessage={formState.errors.content?.join(", ")}
        />

        {formState.errors._form ? (
          <div className="p-2 bg-red-200 border rounded border-red-400">
            {formState.errors._form?.join(", ")}
          </div>
        ) : null}

        <FormButton>Create Comment</FormButton>
      </motion.div>
    </form>
  );

  return (
    <div className="flex flex-col gap-2 mb-4">
      <ClientAnimation type="fade" classProp="flex justify-end">
        <Button
          size="md"
          variant="light"
          className={`${textColor} self-end`}
          onClick={() => setOpen(!open)}
        >
          Reply
        </Button>
      </ClientAnimation>
      {open && form}
    </div>
  );
}
