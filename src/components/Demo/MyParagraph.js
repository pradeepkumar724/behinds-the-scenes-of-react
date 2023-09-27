import React from "react";

const MyParagraph = (props) => {
  console.log("My paragraph Running");
  return (
    <div>
      <p>{props.children}</p>
    </div>
  );
};

export default MyParagraph;
