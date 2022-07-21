import clsx from "clsx";
import React, { Component } from "react";
import Style from "./model.module.css";
import ModelImage from "../../../asset/glassesImage/model.jpg";

export default class Model extends Component {
  render() {
    return (
      <div className={clsx(Style.model)}>
        <img src={ModelImage} alt="error"></img>
        <div
          className={clsx(Style.overlay, { [Style.show]: this.props.display })}
        >
          <img src={this.props.imgSrc} alt="error"></img>
          <div className={clsx(Style.detail)}>
            <h1>{this.props.selectedGlass.name}</h1>
            <p>{this.props.selectedGlass.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
