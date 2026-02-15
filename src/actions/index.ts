import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { db } from "../db";
import { comments } from "../db/schema";

export const server = {
  addComment: defineAction({
    input: z.object({
      postSlug: z.string(),
      name: z.string().min(1, "Name is required."),
      email: z.string().email("Invalid email, I won't spam you."),
      message: z.string().min(1, "Message is required."),
    }),
    handler: async (input) => {
      const [comment] = await db
        .insert(comments)
        .values(input)
        .returning();
      return comment;
    },
  }),
};
