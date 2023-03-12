import { PrismaClient } from "@prisma/client";

// Importing out our generated Prisma Client


// TS will freak out if we try to use something the in the global scope that's not there
declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

// Checking to see if we're in a production environment
// If we are, we'll create a new Prisma Client
// Else if there isn't one in cache, go ahead and get it and then export that one out
let prisma: PrismaClient;
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
