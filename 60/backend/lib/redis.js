
import Redis from "ioredis"
import dotenv from 'dotenv'
dotenv.config()
const UPSTASH_REDIS_URL = process.env.UPSTASH_REDIS_URL

export  const redis = new Redis(UPSTASH_REDIS_URL);
// await redis.set('marian the great', 'dj guga la felipa');