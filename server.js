import jsonServer from "json-server";
import cors from "cors";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(cors());  // <-- enable CORS
server.use(middlewares);
server.use(router);

server.listen(process.env.PORT || 5000, () => {
  console.log("JSON Server running with CORS");
});
