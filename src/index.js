import app from "./app";
import  router from "./routes/apiV1Routes";
import "./config";

// 
app.use(router);

app.listen(app.get("port"));
console.log("server on port " + app.get("port"));
