/* eslint-disable*/

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, b] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬독학"]);
  let [따봉, 따봉변경] = useState(0);
  let [성별, 성별변경] = useState(글제목[0]);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>
          {성별}
          <span
            onClick={() => {
              성별변경("여자 코트 추천");
            }}
          >
            ❤
          </span>
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}
        </h4>
        <p>7월 19일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>7월 19일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>7월 19일 발행</p>
      </div>
    </div>
  );
}

export default App;
