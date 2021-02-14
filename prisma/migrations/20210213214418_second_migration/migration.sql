/*
  Warnings:

  - Made the column `conversationId` on table `Message` required. The migration will fail if there are existing NULL values in that column.
  - Made the column `messageId` on table `Thought` required. The migration will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "conversationId" INTEGER NOT NULL,
    FOREIGN KEY ("conversationId") REFERENCES "Conversation" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Message" ("id", "text", "timestamp", "conversationId") SELECT "id", "text", "timestamp", "conversationId" FROM "Message";
DROP TABLE "Message";
ALTER TABLE "new_Message" RENAME TO "Message";
CREATE TABLE "new_Thought" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "messageId" INTEGER NOT NULL,
    FOREIGN KEY ("messageId") REFERENCES "Message" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Thought" ("id", "text", "timestamp", "messageId") SELECT "id", "text", "timestamp", "messageId" FROM "Thought";
DROP TABLE "Thought";
ALTER TABLE "new_Thought" RENAME TO "Thought";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
