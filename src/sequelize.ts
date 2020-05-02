import {Sequelize} from 'sequelize-typescript';
import { config } from './config/config';


// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  "username": config.datasource.username,
  "password": config.datasource.password,
  "database": config.datasource.database,
  "host":     config.datasource.host,

  dialect: 'postgres',
  storage: ':memory:',
});

