import { log } from "console";
import { PrismaClient } from "../src/generated/prisma/client";
import bcrypt from "bcrypt";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.upsert({
    where: {
      email: "admin@tumbas.com",
    },
    update: {
      role: "ADMIN",
    },
    create: {
      name: "ADMIN TUMBAS",
      email: "admin@tumbas.com",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("Admin Created", admin.email);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
