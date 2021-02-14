// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: true,
  },
};

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const conversations = await prisma.conversation.findMany({
        include: {
          messages: true,
        },
      });
      res.json({
        data: conversations,
      });
      break;

    case "POST":
      await prisma.conversation.create({
        data: req.body,
      });
      res.status(204).send();
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
