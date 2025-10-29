// server.js
import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "data/db.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// ❌ DO NOT use server.listen()
// ✅ Instead, export the server for Vercel
export default server;
