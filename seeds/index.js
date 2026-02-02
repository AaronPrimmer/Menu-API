const sequelize = require("../config/connection");
const { MenuSection, MenuItem, Tag, MenuItemTag } = require("../models");

const sectionData = require("./data/menuSections.json");
const itemData = require("./data/menuItems.json");
const tagData = require("./data/tags.json");
const itemTagData = require("./data/menuItemTags.json");

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });

    console.log("🫧 Dropped and recreated tables");

    await MenuSection.bulkCreate(sectionData);
    await Tag.bulkCreate(tagData);
    await MenuItem.bulkCreate(itemData);
    await MenuItemTag.bulkCreate(itemTagData);

    console.log("🌱 Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedDatabase();
