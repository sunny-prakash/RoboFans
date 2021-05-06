import React from "react";
import "./popup.css";

const Popup = (props) => {
    return (
        <div className="popup--back">
            <div className="popup--content">
                <div className="popup--close" onClick={props.closePopup}>
                    x
                </div>
                <div className="flex flex-wrap pt3 justify-around">
                    <div>
                        <img className="popup--img" src={`https://robohash.org/${props.popupRobo[0].id}`} alt="robotsImage" />
                    </div>
                    <div className="pt4">
                        <h5>Name : {props.popupRobo[0].name}</h5>
                        <h5>Username : {props.popupRobo[0].username}&nbsp;</h5>
                        <h5>Email : {props.popupRobo[0].email}</h5>
                        <h5>
                            Address : {props.popupRobo[0].address.street}&nbsp;
                            {props.popupRobo[0].address.suite}&nbsp;
                            {props.popupRobo[0].address.city}
                            <br />
                            {props.popupRobo[0].address.zipcode}&nbsp;
                        </h5>
                        <h5>Phone : {props.popupRobo[0].phone}&nbsp;</h5>
                        <h5>Website : {props.popupRobo[0].website}&nbsp;</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup;
