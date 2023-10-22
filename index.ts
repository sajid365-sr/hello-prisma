import { PrismaClient } from "@prisma/client";

const Prisma = new PrismaClient();

async function main() {
  const createUser = await Prisma.user.create({
    data: {
      name: "Sajid Sorker",
      email: "contact@sajidsorker.com",
      phone: 1608331365,
    },
  });

  //   const getUser = await Prisma.user.findMany();
  //   const updateUer = await Prisma.user.update({
  //     where: {
  //       id: "31748427-4a50-4f21-baa8-c90f5dc1b659",
  //     },
  //     data: {
  //       name: "Srabonti Akter",
  //       email: "akter.srabonti@gmail.com",
  //     },
  //   });

  console.log(createUser);
}

main()
  .then(async () => {
    await Prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await Prisma.$disconnect();
    process.exit(1);
  });
