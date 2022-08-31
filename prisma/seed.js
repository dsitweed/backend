import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { BCRYPT_SALT } from "../src/constants/env.js";
import { users } from "../mock/account.js";
import { products } from "../mock/product.js";
const prisma = new PrismaClient();

async function mockAccount() {
  try {
    await prisma.account.create({
      data: {
        username: "khang.td",
        fullName: "Trịnh Đức Khang",
        phone: "862612659",
        address: "Bách khoa Hà Nội",
        dateOfBirth: new Date("11/3/2001"),
        imageUrl: "https://picsum.photos/200",
        email: "khang.td194591@sis.hust.edu.vn",
        password: bcrypt.hashSync(`123456`, BCRYPT_SALT),
        role: "ADMIN",
      },
    });
    await prisma.account.createMany({
      data: users,
    });
  } catch (error) {
    console.log(error);
    console.log("skip mock account");
  }
}

async function mockCategory() {
  try {
    const food = await prisma.category.create({
      data: {
        name: "food",
      },
    });
    await prisma.category.createMany({
      data: [
        { name: "noodles", predecessorId: food.id },
        {
          name: "bread",
          predecessorId: food.id,
        },
        {
          name: "mealBox",
          predecessorId: food.id,
        },
        {
          name: "grilledSausage",
          predecessorId: food.id,
        },
        {
          name: "steamedBun",
          predecessorId: food.id,
        },
        {
          name: "onigiri",
          predecessorId: food.id,
        },
        {
          name: "dessert",
          predecessorId: food.id,
        },
        {
          name: "bakery",
          predecessorId: food.id,
        },
      ],
    });
  } catch (error) {
    console.log(error);
    console.log("skip mock category");
  }
}

async function mockProduct() {
  try {
    await prisma.product.createMany({
      data: products,
    });
  } catch (error) {
    console.log(error);
    console.log("skip mock product");
  }
}

async function main() {
  await mockAccount();
  await mockCategory();
  await mockProduct();
}

main();
