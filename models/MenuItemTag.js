const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MenuItemTag extends Model {}

MenuItemTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "menu_item_tag",
  },
);

module.exports = MenuItemTag;
