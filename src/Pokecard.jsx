import React, { Component } from "react";

const api =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

class Pokecard extends Component {

  render() {
    let imgSrc = `${api}${this.props.id}.png`;
    return (
      <div className="pokecard">
        <p className="pokecard-title">Pokemon</p>
        <div className="pokecard-image">
          <img src={imgSrc} alt={this.props.name}></img>
        </div>
        <div className="pokecard-data">Type: {this.props.type}</div>
        <div className="pokecard-data">Exp: {this.props.exp}</div>
      </div>
    );
  }
}
export default Pokecard;
