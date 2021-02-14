const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const hotDog = await prisma.conversation.create({
    data: {
      title: `Is a hot dog a sandwich?`,
      messages: {
        create: [
          {
            text:
              "Yes. Absolutely. It has two pieces of bread surrounding an entree of sorts.",
            thoughts: {
              create: [
                {
                  text:
                    "I agree. According to Merriam-Webster, a sandwich is 'two or more slices of bread or a split roll having a filling in between.'",
                },
                {
                  text:
                    "No way. By that logic, three pieces of bread would constitute a sandwich.",
                },
              ],
            },
          },
        ],
      },
    },
  });
  console.log({ hotDog });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
