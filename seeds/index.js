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

    await sequelize.query(
      "SELECT setval(pg_get_serial_sequence('menu_section', 'id'), coalesce(MAX(id), 0) + 1, false) FROM menu_section;",
    );
    await sequelize.query(
      "SELECT setval(pg_get_serial_sequence('menu_item', 'id'), coalesce(MAX(id), 0) + 1, false) FROM menu_item;",
    );
    await sequelize.query(
      "SELECT setval(pg_get_serial_sequence('tag', 'id'), coalesce(MAX(id), 0) + 1, false) FROM tag;",
    );

    console.log("🌱 Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
};

seedDatabase();
