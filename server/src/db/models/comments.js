'use strict';
const { Model, DataTypes, sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    static associate(models) {
      Comments.associate = function (models) {
        Comments.belongsTo(models.User, {
          foreignKey: 'userId',
          as: 'owner',
        });
      };
    }
  }
  Comments.init(
    {
      value: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Comments',
    }
  );
  return Comments;
};
