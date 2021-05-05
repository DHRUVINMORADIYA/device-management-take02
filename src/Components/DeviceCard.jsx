import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./DeviceCard.css";

function DeviceCard(props) {
  console.log(props);
  return (
    <div className="cardDiv">
      <Card className="card">
        <CardContent>
          <div>{props.title}</div>
        </CardContent>
      </Card>
    </div>
  );
}

export default DeviceCard;
