const { DataTypes, Sequelize } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  const data = Sequelize.define(
    "data",
    {
      number: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      referer_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );

  return data;
};
