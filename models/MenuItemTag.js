const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MenuItemTag extends Model {}

MenuItemTag.init(
  {
    item_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {},
);
