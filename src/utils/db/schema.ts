import { relations } from 'drizzle-orm'
import { integer, pgEnum, pgTable, primaryKey, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core'

export const authorsEnum = pgEnum('authors', ['AlienAi', 'User'])

export const users = pgTable('users', {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email', { length: 256 }).notNull(),
    promptsCount: integer('prompts_count').default(0).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const usersRelations = relations(users, ({ many }) => ({
    messages: many(messages),
    chats: many(chats),
}))

export const messages = pgTable('messages', {
    id: serial('id').primaryKey().notNull(),
    userId: integer('user_id').notNull(),
    chatId: integer('chat_id').notNull(),
    author: authorsEnum('author').notNull(),
    body: text('body').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const messagesRelations = relations(messages, ({ one, many }) => ({
    user: one(users, {
        fields: [messages.userId],
        references: [users.id],
    }),
    chat: one(chats, {
        fields: [messages.chatId],
        references: [chats.id],
    }),
    documentsToMessages: many(documentsToMessages),
}))

export const documents = pgTable('documents', {
    id: serial('id').primaryKey().notNull(),
    title: varchar('title', { length: 256 }).notNull(),
    url: text('url').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow(),
})

export const documentsRelations = relations(documents, ({ many }) => ({
    documentsToMessages: many(documentsToMessages)
}))

export const chats = pgTable('chats', {
    id: serial('id').primaryKey().notNull(),
    userId: integer('user_id').notNull(),
    documentId: integer('document_id').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
})

export const chatsRelations = relations(chats, ({ one, many }) => ({
    user: one(users, {
        fields: [chats.userId],
        references: [users.id],
    }),
    messages: many(messages),
}))

export const documentsToMessages = pgTable('documets_to_messages', {
    documentId: integer('document_id').notNull().references(() => documents.id),
    messageId: integer('message__id').notNull().references(() => messages.id),
}, (table) => {
    return {
        pk: primaryKey({ columns: [table.documentId, table.messageId] }),
    }
})

export const documentsToMessagesRelations = relations(documentsToMessages, ({ one }) => ({
    document: one(documents, {
        fields: [documentsToMessages.documentId],
        references: [documents.id],
    }),
    message: one(messages, {
        fields: [documentsToMessages.messageId],
        references: [messages.id],
    }),
}))