import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./Cards.css";

export default function Cards(props) {
  if (props.type === "homeCard") {
    return (
      <div className="cardDiv">
        <Card
          className="card"
          onClick={() => {
            props.openModal(props.id);
          }}
        >
          <CardContent>{props.title}</CardContent>
        </Card>
      </div>
    );
  } else if (props.type === "deviceCard") {
    return (
      <div className="cardDiv">
        <Card className="card">
          <CardContent>{props.title}</CardContent>
        </Card>
      </div>
    );
  }
}
