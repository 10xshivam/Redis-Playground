import { client } from "./client.js";

async function init() {
    // await client.set("user:6","This is from Nodejs")
    await client.expire("user:6", 10)
    const result = await client.get("user:6")
    console.log("Result --> ",result)
}

init()