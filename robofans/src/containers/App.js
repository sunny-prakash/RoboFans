import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Popup from "../components/Popup";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: "",
            popup: false,
            popupRobo: null,
        };
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value });
    };

    async componentDidMount() {
        await fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then((users) => {
                this.setState({ robots: users });
            });
    }

    openPopup = (id) => {
        const popuprobo = this.state.robots.filter((robot) => {
            return robot.id === id;
        });

        this.setState({ popup: true, popupRobo: popuprobo });
    };

    closePopup = () => {
        this.setState({ popup: false });
    };

    render() {
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return !filteredRobots.length ? (
            <h1>Loading.......</h1>
        ) : (
            <React.Fragment>
                {this.state.popup ? <Popup closePopup={this.closePopup} popupRobo={this.state.popupRobo} /> : ""}
                <div className="tc">
                    <h1>Robofans</h1>
                    {/*You need to change this message when no robots name matches! */}
                    {/* <button onClick={this.openPopup}>Open Popup</button> */}
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} openPopup={this.openPopup} />
                    </Scroll>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
