import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import Greeting from "@/components/Greeting";
import GreetingsSkeleton from "@component/components/GreetingsSkelton";
import NewProject from "@/components/NewProject";
import ProjectCard from "@/components/ProjectCard";
import TaskCard from "@/components/TaskCard";
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

// This is the function that will be called on the server
// to get the data for the page.
const getData = async () => {
  await delay(2000);
  const user = await getUserFromCookie(cookies());

  const projects = await db.project.findMany({
    where: {
      ownerId: user?.id,
    },
    include: {
      tasks: true,
    },
  });

  return { projects };
};

export default async function Page() {
  const { projects } = await getData();
  return (
    <div className="h-full overflow-y-auto pr-6 w-full">
      <div className=" h-full  items-stretch justify-center min-h-[content]">
        <div className="flex-1 grow flex">
          <Suspense fallback={<GreetingsSkeleton />}>
            <Greeting />
          </Suspense>
        </div>
        <div className="flex flex-2 grow items-center flex-wrap mt-3 -m-3 ">
          {projects.map((project) => (
            <div className="w-1/3 p-3" key={project.id}>
              <Link href={`/project/${project.id}`}>
                <ProjectCard project={project} />
              </Link>
            </div>
          ))}
          <div className="w-1/3 p-3">
            <NewProject />
          </div>
        </div>
        <div className="mt-6 flex-2 grow w-full flex">
          <div className="w-full">
            <TaskCard />
          </div>
        </div>
      </div>
    </div>
  );
}






// The home and project routes share the same layout, both being part of the dashboard.
// Signin and register share the same layout with each other as well. 
// Because all 4 routes are on the same parent segment /, they would share the same layout
// if we didn't specify a layout for each route.

// We don't want this, so we'll use route grouping here. 
// This will allow us to have two root layouts without adding segments to the url

// If you have page in the app root you need to have layout in the app root as well
// If you don't have layout then page will not be rendered, it needs to be rendered into an HTML document and you didn't give it one