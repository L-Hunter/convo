// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async (req, res) => {
  const messages = await prisma.message.findMany({
    include: {
      thoughts: true,
    },
  });
  res.json({
    data: messages,
  });
};
