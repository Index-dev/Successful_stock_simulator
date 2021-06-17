import React from "react";
import styled from "styled-components";
import LineChart from "../../components/chart/Line";
import DoughnutChart from "../../components/chart/Doughnut";
import PieChart from "../../components/chart/Pie";

const LandingMain = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #16a596;
`
const Divider = styled.div`
    width: 100vw;
    height: 0.5%;
    background-color: #FAE0DF;
    margin:  2%  2% 0% 0%;
`
const VerticalDivider = styled.div`
    border-left: 6px solid green;
    height: 100%;
    width: 10%;
    display: flex;
    position: absolute;
    left: 50%;

    margin-left: -3px;
    top: 0;
`
const Content = styled.div`
    /* display: flex; */
    flex-flow: column;
    /* height: 100%; */
    height: -webkit-fill-available;
    width: 100%;
    /* height: 50vh; */
    justify-content: space-around;
`

const Template = styled.div`
    background-color: #f6f5f1da;
    width: 50%;
    margin: 3%;
    padding: 5%;
    border-radius: 20px;
    height: 200px;
    /* height: -webkit-fill-available; */
    text-align: center;
`
const Row = styled.div`
    display: flex;
`
const Landing = ()=>{
    return(
        <LandingMain>
            <header>Successful Stock Simulator</header>
            <Divider/>
            <Content>
                <Row>
                {/* 즐겨찾기 list */}
                <Template>
                    <div>🌟 My Favorite Stock🌟</div>
                    <div>
                        <ul>
                            <li> target 1 </li>
                            <li> target 2 </li>
                            <li> target 3 </li>
                            <li> target 4 </li>
                            <li> target 5 </li>
                        </ul>
                        <VerticalDivider/>

                    </div>
                    
                </Template>
                {/* 이번주 최다 구매 증권 */}
                <Template>
                    <PieChart/>
                </Template>
                </Row>
                <Row>
                {/* 즐겨찾기 list */}
                <Template>
                    <DoughnutChart/>
                </Template>
                {/* 이번주 최다 구매 증권 */}
                <Template>
                    <LineChart/>
                </Template>
                </Row>
            </Content>

        </LandingMain>
    );












};

export default Landing;