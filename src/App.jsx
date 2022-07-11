/* eslint react-hooks/exhaustive-deps: off */

//コンポーネント化をする場合は、Reactと分かりやすいように拡張子をjsxにしたほうがいい。
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  //JSX記法のルール。HTMLタグを書く時は一つのタグにまとめる。
  //ただ、不要な<div>タグは避けたいので「React.Fragment」タグを使って要素を一つにまとめることができる
  //これは長いので省略して<>で書くことができる
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ！</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>ON/OFF</button>
      <p>{num}</p>
      {faceShowFlag && <p>(=ﾟωﾟ)ﾉ</p>}
    </>
  );
};

//他のファイルでもAppを使うよということを命じてあげる
export default App;

// 先頭が大文字で始まり、単語の区切りを大文字とする変数名の付け方を
// 「パスカルケース」と呼びます。

// Reactのコンポーネントはこのパスカルケースで命名しましょう！
