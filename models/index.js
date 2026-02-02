const MenuSection = require("./MenuSection");
const MenuItem = require("./MenuItem");
const Tag = require("./Tag");
const MenuItemTag = require("./MenuItemTag");

MenuSection.hasMany(MenuItem, {
  foreignKey: "section_id",
  onDelete: "CASCADE",
});

MenuItem.belongsTo(MenuSection, {
  foreignKey: "section_id",
});

MenuItem.belongsToMany(Tag, {
  through: MenuItemTag,
  foreignKey: "item_id",
});

Tag.belongsToMany(MenuItem, {
  through: MenuItemTag,
  foreignKey: "tag_id",
});

module.exports = {
  MenuSection,
  MenuItem,
  Tag,
  MenuItemTag,
};
