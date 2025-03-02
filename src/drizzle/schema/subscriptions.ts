import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const subscriptions = pgTable('subscriptions',{
    id:uuid('id').primaryKey().defaultRandom(),
    name: text('name').notNull(),
    email: text('email').notNull().unique(),
    creatAT: timestamp('createdAt').notNull().defaultNow(),
})