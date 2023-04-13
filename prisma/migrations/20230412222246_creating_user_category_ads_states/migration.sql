-- CreateTable
CREATE TABLE "States" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "Users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "passwordHash" TEXT NOT NULL,
    "token" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "slug" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Ads" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "state" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "dateCreated" DATETIME NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "priceNegotiable" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "views" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    CONSTRAINT "Ads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
