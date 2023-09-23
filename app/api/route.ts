import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export const GET = async (request: Request) => {
  async function main() {
    await prisma.user.create({
      data: {
        name: "Rich",
        email: "hello@prisma.com",
        posts: {
          create: {
            title: "My first post",
            body: "Lots of really interesting stuff",
            slug: "my-first-post",
          },
        },
      },
    });

    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
    console.dir(allUsers, { depth: null });
  }
  main()
    .catch(async (e) => {
      console.error(e);
      return new Response("no");
    })
    .finally(async () => {
      await prisma.$disconnect();
      return new Response("okay");
    });
};
