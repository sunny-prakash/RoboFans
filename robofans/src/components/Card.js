import React from "react";

const Card = (props) => {
    return (
        <div id={props.id} className=" tc bg-light-green dib br3 pa3 grow ma2 shadow-2" onClick={() => props.openPopup(props.id)}>
            <img src={`https://robohash.org/${props.id}?200x200`} alt="robotsImage" />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
};

export default Card;
