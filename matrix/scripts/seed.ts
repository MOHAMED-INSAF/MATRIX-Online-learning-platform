const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Java Script" },
        { name: "Python" },
        { name: "Java" },
        { name: "C" },
        { name: "Node" },
        { name: "C++" },
        { name: "PHP" },
      ]
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();