import React from "react";
import "./locationBacgrounds.css";
import "./moveLocation.css";

import PvEBoard from "../PvEContant/PvEBoard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { loginAC } from "../../../redux/actions";

class MoveLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      locationImage: 0,
      fight: false,
      locationParams: ""
    };
  }

  componentDidMount = async () => {
    const login = await fetch("/api/check-session", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    const session = await login.json();
    console.log("session", session);

    const resp = await fetch("/api/update-store", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(session)
    });

    const data = await resp.json();
    console.log(data);

    this.props.login(data);

    const params = this.props.match.params.location;
    console.log("params", params);

    const playerInitial = JSON.parse(JSON.stringify(this.props.player));

    await this.setState({
      locationParams: params,
      player: playerInitial
    });
  };

  moveNext = async () => {
    let data = this.state.locationImage;
    let number = Math.floor(Math.random() * 5);
    if (number === data) {
      number = Math.floor(Math.random() * 5);
    } else {
      await this.setState({
        locationImage: number
      });
    }
    const random = Math.floor(Math.random() * 3);
    if (random === 2) {
      await this.setState({
        fight: true
      });
    }
  };

  render() {
    if (this.state.fight) {
      return (
        <div
          className={`location-going-layaout--${this.state.locationParams}-${this.state.locationImage}`}
        >
          <div className="location-going-fight">
            <PvEBoard player={this.state.player} />
          </div>
        </div>
      );
    }

    return (
      <div
        className={`location-going-layaout--${this.state.locationParams}-${this.state.locationImage}`}
      >
        <div className="move-wrap">
          <button className="move-btn move-btn_next" onClick={this.moveNext}>
            Двигаться дальше
          </button>
          <Link className="move-btn_link" to="/homepage">
            <button className="move-btn move-btn_back" onClick={this.moveNext}>
              Вернуться в город
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    player: store.user.player
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: data => dispatch(loginAC(data))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveLocation);
