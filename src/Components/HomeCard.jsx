import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./HomeCard.css";

function HomeCard(props) {
  return (
    <div className="cardDiv">
      <Card
        className="card"
        onClick={() => {
          props.openModal(props.device.id);
        }}
      >
        <CardContent>
          <div>{props.device.title}</div>
        </CardContent>
      </Card>
    </div>
  );
}

export default HomeCard;
