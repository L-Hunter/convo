// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async (req, res) => {
  const {
    query: { cid },
  } = req;

  const conversation = await prisma.conversation.findUnique({
    where: {
      id: parseInt(cid),
    },
    include: {
      messages: true,
    },
  });
  res.json(conversation);
};
