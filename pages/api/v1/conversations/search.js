const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async (req, res) => {
  const conversations = await prisma.conversation.findMany({
    where: {
      title: {
        contains: req.query.title,
      },
    },
    include: {
      messages: true,
    },
  });

  res.json({
    data: conversations,
  });
};
