import { createClient } from "@base44/sdk";

// @ts-ignore
const NODE_ENV: string = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === "development";
export const base44 = createClient({ 
  appId: "69e0aefb708ee52b433de03a",
  ...(IS_DEV && { serverUrl: "http://localhost:4400" })
});
