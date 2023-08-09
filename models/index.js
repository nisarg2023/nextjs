'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

import * as pg from 'pg';
const db = {};


let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    "postgresql://postgres:postgres@localhost:5432/demo",
    { dialectModule: pg });
}
fs
  .readdirSync("/home/nisarg-rakholiya/Desktop/next js demo/demo/models/")
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file !== "index.js" &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(`./${file}`)(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;