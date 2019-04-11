const express = require("express");
const router = express.Router();
const axios = require("axios");
const mysql = require("promise-mysql");

const dbConfig = {
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "bazazanode"
};

async function getConnection() {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    return conn;
  } catch (err) {
    console.log("konekcija nija uspostavljena!!", err);
  }
}

async function getPlaze() {
  let conn;
  try {
    conn = await mysql.createConnection(dbConfig);
    var rezultat = await conn.query(
      "select " +
        " plaza.lat, plaza.lng, plaza.ime, " +
        " plaza.PODRUCJE, plaza.KONACNA_OCJ1, " +
        " plaza.KONACNA_OCJ2, grad.NAZIV, " +
        " zup.NAZIV, kakvoca.datum,  " +
        " kakvoca.KAKVOCA, kakvoca.godina, kakvoca.CIKLUS " +
        " from " +
        " bazazanode.plaza as plaza " +
        "inner join " +
        " bazazanode.grad as grad on grad.ID_GRAD = plaza.ID_GRAD " +
        " inner join  " +
        " bazazanode.zupanija as zup on zup.ID_ZUP = plaza.ID_ZUP " +
        " inner join  " +
        " bazazanode.kakvoca as kakvoca on kakvoca.ID_PLAZA = plaza.ID_PLAZA;"
    );

    console.log("rezultat je: ", rezultat[0]);
    //var plaze = JSON.stringify(rezultat);
    //console.log("plaze", plaze[0]);
    return rezultat;
  } catch (err) {
    console.log("dogodila se greska kod dohvata plaza!!", err);
    return;
  } finally {
    if (conn && conn.end) conn.end();
  }
}

//getPlaze();

router.get("/", async (req, res, next) => {
  //res.send("posts work");
  try {
    const plaze = await getPlaze();
    res.status(200).json(plaze);
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    res.status(500).send("greska dohvata plaza");
    next(e);
  }
});

/* router.get("/user/:id", async (req, res, next) => {
  try {
    const user = await getUserFromDb({ id: req.params.id });
    res.json(user);
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e);
  }
});
 */
module.exports = router;
