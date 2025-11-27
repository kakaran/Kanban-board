import dotenv from "dotenv";
dotenv.config();


export default {
  app: {
    port: process.env.PORT,
  },
  database: {
    url: process.env.DATABASE_URL,
  },
  orgin: {
    client: process.env.ORIGIN,
  },
};