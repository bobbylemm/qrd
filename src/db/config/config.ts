import dotenv from 'dotenv';

dotenv.config();

export default {
  development: {
    url: process.env.DATABASE_URL_DEV,
    use_env_variable: "development",
    dialect: "postgres"
  },
  test: {
    url: process.env.DATABASE_URL_TEST,
    use_env_variable: "test",
    dialect: "postgres"
  },
  production: {
    url: process.env.DATABASE_URL_PROD,
    use_env_variable: "production",
    dialect: "postgres"
  }
}
