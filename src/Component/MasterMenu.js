import React from "react";
import {Card,CardImg, CardBody, CardTitle, Button} from "reactstrap";
import Menu from "../menu";
import { Link } from "react-router-dom";

export default function MasterMenu(props) {
  const { masterMenuName } = props.match.params;
  const filteredMenu = Menu.menus[0].items.filter(
    (item) => item.caption === masterMenuName
  );
  console.log(filteredMenu)
  return (
    <>
     <div className="navbar"> <img
        style={{ marginLeft: "38%" }}
        src="/images/logo.jpg"
        alt="Logo"
      ></img></div>

      {filteredMenu[0].items.map((item) => {
        return (
          <div className="App">
            <Card key={item.caption} className="card">
              <CardImg
                style={{ width: "70%", marginTop:"1rem" }}
                src={item.image.replace(".", "")}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle tag="h5">{item.name}</CardTitle>
               <h6>{item.price ? (`Fiyat : ${item.price} TL `) : "-"}</h6>
               {item.subMenus ? <Link to={`/submenu/${masterMenuName}/${item.caption}`}>
                  <Button>Menüye Git</Button>
                </Link> : <Button>Seç</Button> }
                
              </CardBody>
            </Card>
          </div>
        );
      })}
    </>
  );
}
