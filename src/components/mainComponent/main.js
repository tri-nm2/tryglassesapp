import clsx from "clsx";
import React, { Component } from "react";
import GlassesList from "./glassesListComponent/glassesList";
import Style from "./main.module.css";
import Model from "./modelComponent/model";
import Data from "../../asset/data/dataGlasses.json";

export default class Main extends Component {
  state = { imgSrc: "", selectedGlass: {}, display: false };

  changeGlass = (glassId) => {
    const src = process.env.PUBLIC_URL + `/asset/glassesImage/v${glassId}.png`;
    const glass = Data.find((item) => item.id === glassId);
    this.setState({
      imgSrc: src,
      selectedGlass: glass,
      display: true,
    });
    console.log(src);
  };

  render() {
    return (
      <div className={clsx(Style.main)}>
        <Model
          imgSrc={this.state.imgSrc}
          selectedGlass={this.state.selectedGlass}
          display={this.state.display}
        />
        <GlassesList changeGlass={this.changeGlass} />
      </div>
    );
  }
}
