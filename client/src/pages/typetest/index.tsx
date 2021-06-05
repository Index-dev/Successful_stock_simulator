import React from "react";
import styled from "styled-components";

const TestMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  * {
    box-sizing: border-box;
  }

  .playground {
    display: flex;
    width: 90%;
    height: 600px;
    padding: 40px;

    border: 2px solid black;
    border-radius: 10px;
  }
`;

const Typetest = () => {
  return (
    <TestMain>
      <div className="playground">타입스크립트 테스트를 위한 공간입니다.</div>
    </TestMain>
  );
};

export default Typetest;
