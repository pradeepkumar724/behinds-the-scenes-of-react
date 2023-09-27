import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("Demo Running");
  return (
    <div>
      <MyParagraph>{props.isShow ? "The new para" : ""}</MyParagraph>
    </div>
  );
};

export default DemoOutput;
