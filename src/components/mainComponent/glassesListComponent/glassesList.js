import clsx from "clsx";
import React, { Component } from "react";
import Data from "../../../asset/data/dataGlasses.json";
import Style from "./glassesList.module.css";

export default class GlassesList extends Component {
  renderGlassesList() {
    const tag = Data.map((item) => {
      return (
        <div key={item.id} className={clsx(Style.item)}>
          <button
            onClick={() => {
              this.props.changeGlass(item.id);
            }}
          >
            <img
              src={
                process.env.PUBLIC_URL + `/asset/glassesImage/v${item.id}.png`
              }
              alt="error"
            ></img>
          </button>
        </div>
      );
    });

    return tag;
  }
  render() {
    return <div className={clsx(Style.list)}>{this.renderGlassesList()}</div>;
  }
}
