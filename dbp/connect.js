import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://user:pass@postgres:5432/dbname');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default sequelize;
