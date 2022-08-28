import bcrypt from "bcrypt";
import { prisma } from "../config/db.js";

const create = async (data) => {
  const user = await getByEmail(data.email);
  if (user) {
    return null;
  }
  const hashedPassword = bcrypt.hashSync(data.password, 10);
  const newUser = await prisma.account.create({
    data: { ...data, password: hashedPassword },
  });
  return newUser;
};

const getAll = async (req, res) => {
  const keyword = req.query.keyword ?? "";
  const take = Number.parseInt(req.query.take ?? "10");
  const skip = Number.parseInt(req.query.skip ?? "0");
  const users = await prisma.account.findMany({
    select: {
      id: true,
      email: true,
      createdAt: true,
      displayName: true,
      imageUrl: true,
      phone: true,
    },
    where: {
      AND: [
        { role: "USER" },
        {
          OR: [
            {
              email: {
                contains: keyword,
              },
            },
            {
              displayName: {
                contains: keyword,
              },
            },
          ],
        },
      ],
    },
    skip,
    take,
  });
  res.json({ payload: users });
};

const getById = async (id) =>
  await prisma.account.findUnique({ where: { id } });

const getByEmail = async (email) =>
  await prisma.account.findUnique({ where: { email } });

const getByEmailAndPassword = async (email, password) => {
  const user = await getByEmail(email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return null;
  }
  return user;
};

const update = async (id, data) => {
  try {
    const updateUser = await prisma.account.update({
      where: {
        id,
      },
      data,
    });
    return updateUser;
  } catch (error) {
    return null;
  }
};

export default { getAll, getByEmail, getByEmailAndPassword, create, update };
