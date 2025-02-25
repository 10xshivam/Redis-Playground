import {Redis} from "ioredis";

// By default 6379 port per hit krega,aur is client ka use krke apne redis server ke sath interact kr skte hai 
export const client = new Redis();

