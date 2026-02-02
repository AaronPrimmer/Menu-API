const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MenuSection extends Model {}

MenuSection.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    section_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "menu_section",
  },
);
