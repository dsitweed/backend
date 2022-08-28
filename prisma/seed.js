import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { BCRYPT_SALT } from "../src/constants/env.js";

const prisma = new PrismaClient();

async function mockAccount() {
  try {
    await prisma.account.create({
      data: {
        email: "khang.td194591@sis.hust.edu.vn",
        password: bcrypt.hashSync(`123456`, BCRYPT_SALT),
        fullName: "Trịnh Đức Khang",
        phone: "862612659",
        role: "ADMIN",
        imageUrl: "https://picsum.photos/200",
      },
    });
    for (let index = 0; index < 100; index++) {
      await prisma.account.create({
        data: {
          email: `clone${index}@gmail.com`,
          password: bcrypt.hashSync(`password${index}`, BCRYPT_SALT),
          fullName: `Clone Num${index}`,
          imageUrl: `https://picsum.photos/id/${index}/200/`,
          phone: String(987654000 + index),
        },
      });
    }
  } catch {
    console.log("skip");
  }
}

async function main() {
  await mockAccount();
}

main();
