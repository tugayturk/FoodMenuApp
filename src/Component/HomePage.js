import React from "react";
import Menu from "../menu.js";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function HomePage(props) {
  return (
     <>
      <div className="navbar"><img
        style={{ marginLeft: "38%" }}
        src="/images/logo.jpg"
        alt="Logo"
      ></img></div>
      <h2 style={{textAlign:"center", marginTop:".6rem"}}>Lütfen Menü Seçiniz</h2>
      {Menu.menus[0].items.map((item) => {
        return (
          <div className="App">
              <Card key={item.caption} className="card">
              <CardImg
                style={{ width: "70%", marginTop:"1rem" }}
                src={item.image}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">{item.name}</CardTitle>
                <Link to={`/menu/${item.caption}`}>
                  <Button>Menüye Git</Button>
                </Link>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </>
  );
}
