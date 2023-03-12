// import { hashPassword } from "@/lib/auth";
import { db } from "@/lib/db";
import { hashPassword } from "@component/lib/auth";
import { TASK_STATUS } from "@prisma/client";

// The seed data will give some fake data to use in the db
// Basically seeding the db just mean we're going to put fake data in the database programmatically

const getRandomTaskStatus = () => {
  const statuses = [
    TASK_STATUS.COMPLETED,
    TASK_STATUS.NOT_STARTED,
    TASK_STATUS.STARTED,
  ];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

async function main() {
  const user = await db.user.upsert({
    where: { email: "user@email.com" },
    update: {},
    create: {
      email: "user@email.com",
      firstName: "User",
      lastName: "Person",
      password: await hashPassword("password"),
      projects: {
        create: new Array(5).fill(1).map((_, i) => ({
          name: `Project ${i}`,
          due: new Date(2022, 11, 25),
        })),
      },
    },
    include: {
      projects: true,
    },
  });

  const tasks = await Promise.all(
    user.projects.map((project) =>
      db.task.createMany({
        data: new Array(10).fill(1).map((_, i) => {
          return {
            name: `Task ${i}`,
            ownerId: user.id,
            projectId: project.id,
            description: `Everything that describes Task ${i}`,
            status: getRandomTaskStatus(),
          };
        }),
      })
    )
  );

  console.log({ user, tasks });
}
main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });

// Inside of tsconfig.json, we can something called paths
// And paths are bascially aliases to other paths
// Ex: "@/lib/*": ["./lib/*"],
// So having a path for every single thing that is on the root
// that's going to be imported with the exception of app because you
// aren't going to be importting anything from app

// We're going to create a file called tsconfig-seed.json
// which wiill tell prisma about the seed because it's going to do some pretty cool stuff
// for us when we do migrations

// Note the seed script is not going to run in the same
// TS environment that our project is going to run in
// Because the project has a different congiguration

// So thas why we're going to make another tsconfig file specifically for the seed script, which is exactly the same tsconfig file that we already have, with one thing changed which is the module.
// The module in this file will be changed to commonjs instead of next
// which will be the compliar

// The last thing we need do is tell prisma about this new tsconfig file
// Inside of package.json:
// {
//   "prisma": {
//     "seed": "ts-node -P tsconfig-seed.json -r tsconfig-paths/register --transpileOnly prisma/seed.ts"
//   }
// }
