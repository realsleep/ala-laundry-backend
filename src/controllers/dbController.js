import dbService from "../services/dbService.js";

export const sendQuery = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  console.log(req.query.sql)
  const rows = await dbService.sendQuery(req.query.sql);
  res.json({ data: rows[0] });
};
