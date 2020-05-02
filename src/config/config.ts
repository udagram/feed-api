export const config = {
  "datasource": {
    "username": process.env.POSTGRESS_USERNAME,
    "password": process.env.POSTGRESS_PASSWORD,
    "database": process.env.POSTGRESS_DB,
    "host": process.env.POSTGRESS_HOST,
    "dialect": "postgres",
  },
  "aws": {
    "reigion": process.env.AWS_REGION,
    "profile": process.env.AWS_PROFILE,
    "media_bucket": process.env.AWS_BUCKET,
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  },
  "url": process.env.URL,
}
