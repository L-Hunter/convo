const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export default async (req, res) => {
  const {
    query: { mid },
  } = req;

  const message = await prisma.message.findUnique({
    where: {
      id: parseInt(mid),
    },
    include: {
      thoughts: true,
    },
  });
  res.json(message);
};
