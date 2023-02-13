import { Connection, Request, config } from "../config";
import { queryGet } from "../database/querys";

const sqlGet = async (req, res) => { // sobra req, res
  try {
    const connection = new Connection(config);
    connection.on("connect", function (err) {
      if (err) {
        console.log("Error: ", err);
      }

      const request = new Request(queryGet, (err) => {
        if (err) {
          console.log(err);
        } else {
          connection.close();
        }
      });

      request.on("row", (obj) => {
        obj.map((row) => (
          res.json(row)
        ))
      });

      connection.execSql(request);
    });

    connection.connect();
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

module.exports = {
  sqlGet
};
