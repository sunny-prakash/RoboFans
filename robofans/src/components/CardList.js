import React from "react";
import Card from "./Card";

const CardList = (props) => {
    return (
        <div>
            {props.robots.map((robot, i) => {
                return <Card id={robot.id} name={robot.name} email={robot.email} key={i} openPopup={props.openPopup} />;
            })}
        </div>
    );
};

export default CardList;
