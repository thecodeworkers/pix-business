import React from "react";
import { Pixel } from "../../assets/img";
import "./styles.scss";

const PixelTitle = (props: any) => {
  return (
    <>
      <div className="_pixelTitle">
        <p>{props.title}</p>
        <Pixel color="#ffffff" width="22" height="14" />
      </div>
    </>
  );
};

export default PixelTitle;
