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
      const messages = await prisma.message.findMany({
        include: {
          thoughts: true,
        },
      });
      res.json({
        data: messages,
      });
      break;

    case "POST":
      const message = await prisma.message.create({
        data: req.body,
      });
      res.json(message);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
