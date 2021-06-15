import React from "react";
import styled from "styled-components";
import BarChart from "./Bar";

const LandingMain = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #16a596;
`
const Divider = styled.div`
    width: 100vw;
    height: 2%;
    background-color: #FAE0DF;
    margin:  2%  2% 0% 0%;
`
const Content = styled.div`
    display: flex;
    height: 50%;
    justify-content: space-around;
`

const Template = styled.div`
    background-color: #f6f5f1da;
    width: 40%;
    height: -webkit-fill-available;
    margin: 3%;
    padding: 5%;
    border-radius: 5%;
    text-align: center;
`
const Landing = ()=>{
    return(
        <LandingMain>
            <header>Successful Stock Simulator</header>
            <Divider/>
            <Content>
                {/* 즐겨찾기 list */}
                <Template>
                    <ul>
                        <li> target 1 </li>
                        <li> target 2 </li>
                        <li> target 3 </li>
                        <li> target 4 </li>
                        <li> target 5 </li>
                    </ul>
                </Template>
                {/* 이번주 최다 구매 증권 */}
                <Template>
                    <ul>
                        <li> target 1 </li>
                        <li> target 2 </li>
                        <li> target 3 </li>
                        <li> target 4 </li>
                        <li> target 5 </li>
                    </ul>
                </Template>
            </Content>
            <Content>
                {/* 즐겨찾기 list */}
                <Template>
                    <ul>
                        <li> target 1 </li>
                        <li> target 2 </li>
                        <li> target 3 </li>
                        <li> target 4 </li>
                        <li> target 5 </li>
                    </ul>
                </Template>
                {/* 이번주 최다 구매 증권 */}
                <Template>
                    <BarChart/>
                </Template>
            </Content>

        </LandingMain>
    );












};

export default Landing;