import { DrizzlePostgreSQLAdapter } from "@lucia-auth/adapter-drizzle";
import { drizzle } from "drizzle-orm/postgres-js";

import postgres from "postgres";
import { z } from "zod";
import { sessionTable, userRelations, userTable } from "./db/schemas/auth";
import { postsRelations, postsTable } from "./db/schemas/posts";
import { commentRelations, commentsTable } from "./db/schemas/comments";
import { commentUpvoteRelations, commentUpvotesTable, postUpvoteRelations, postUpvotesTable } from "./db/schemas/upvotes";

const EnvSchema = z.object({
  DATABASE_URL: z.string().url(),
});

const processEnv = EnvSchema.parse(process.env);
const queryClient = postgres(processEnv.DATABASE_URL);

export const db = drizzle(queryClient, {
    schema: {
        user: userTable,
        session: sessionTable,
        posts: postsTable,
        comments: commentsTable,
        postUpvotes: postUpvotesTable,
        commentUpvotes: commentUpvotesTable,
        postsRelations,
        commentUpvoteRelations,
        postUpvoteRelations,
        userRelations,
        commentRelations
    },
});
// const result = await db.execute("SELECT 1");

// console.log(result);

export const adapter = new DrizzlePostgreSQLAdapter(
  db,
  sessionTable,
  userTable,
);
