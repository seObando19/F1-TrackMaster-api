
export const configuration = () => ({
  NODE_ENV: process.env.NODE_ENV,
  port: parseInt(process.env.PORT, 10) || 3001,
  apiVersion: process.env.API_VERSION || "v1",
  mongodb: {
    uri: process.env.MONGO_DB_URI,
    database: process.env.MONGO_DB_NAME
  }
})
