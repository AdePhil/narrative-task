module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT,

  pool: {
    max: 5,
    min: 1,
    acquire: process.env.DB_POOL_ACQUIRE,
    idle: process.env.DB_POLL_IDLE,
  },
};
