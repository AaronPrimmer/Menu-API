const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MenuItem extends Model {}

MenuItem.init(
  {
    //define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    item_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    in_stock: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    section_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "menu_item",
  },
);

module.exports = MenuItem;

//{
//     "id": 18,
//     "item_name": "Coffee",
//     "price": 2.49,
//     "in_stock": true,
//     "section_id": 4
//   },
