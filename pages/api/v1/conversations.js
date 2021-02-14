// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async (req, res) => {
  const conversations = await prisma.conversation.findMany({
    include: {
      messages: true,
    },
  });
  res.json({
    data: conversations,
  });
};
