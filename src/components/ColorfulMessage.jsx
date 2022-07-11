import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props; //分割代入で「props.color」「props.children」を省略する
  const contentStyle = {
    color, //JavaScriptは同じ名前なら省略できる！
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};
