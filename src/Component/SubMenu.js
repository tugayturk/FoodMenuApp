import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";
import Menu from "../menu";
import "./SubMenu.css";
import alertify from "alertifyjs";
export default function SubMenu(props) {
  const [order, setOrder] = useState([]);
  const selectMenu = (id) => {
    setOrder((prevState) => [...prevState, id]);
  };

  useEffect(() => {
    if (order.length > 0) {
      //alertify.success(`${order} eklendi.`);
    }
  }, [order]);

  const renderSubMenus = (subMenu) => {
    return subMenu.subMenus.map((subMenuKey) => {
      const filteredSubMenu = Menu.menus.filter(
        (subMenu) => subMenu.key === subMenuKey
      )[0];

      return (
        <div style={{ marginTop: "1rem" }}>
          <p
            style={{
              fontSize: "2rem",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            {filteredSubMenu.description}
          </p>

          <div>
            {filteredSubMenu.items.map((item) => {
              return (
                <div className="App">
                  <Card key={item.name} className="card">
                    <CardImg
                      style={{ width: "50%", margin: "auto" }}
                      src={item.image.replace(".", "")}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle tag="h5">{item.name}</CardTitle>

                      <h6>
                        {item.price ? `Ekstra Ücret : ${item.price} TL` : "-"}
                      </h6>
                      <Button
                        onClick={(e) =>
                          selectMenu(
                            e.target.parentElement.children[0].innerText
                          )
                        }
                      >
                        Seç
                      </Button>
                    </CardBody>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };
  const { masterMenuName, subMenuName } = props.match.params;
  const masterMenu = Menu.menus[0].items.filter(
    (item) => item.caption === masterMenuName
  )[0];
  const subMenu = masterMenu.items.filter(
    (item) => item.caption === subMenuName
  )[0];

  return (
    <>
      <div className="navbar">
        {" "}
        <img
          style={{ marginLeft: "38%" }}
          src="/images/logo.jpg"
          alt="Logo"
        ></img>
      </div>
      {renderSubMenus(subMenu)}
      <div className="cart">
        <h2 className="title">Seçimleriniz:</h2>
        {order.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
    </>
  );
}
