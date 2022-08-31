import { prisma } from "../config/db.js";

async function getById(id) {
  return await prisma.image.findUnique({ where: { id } });
}

async function create(file, uploaderId) {
  const { buffer, mimitype: contentType } = file;
  const result = await prisma.image.create({
    data: {
      buffer,
      contentType,
      uploaderId,
    },
  });
  return result.id;
}

export default { getById, create };
