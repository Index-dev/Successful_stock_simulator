import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    body{
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 15px;
        font-weight: 400;
        background-color: white;
        color: black;
        padding: 0px;    
    }
`;

export default globalStyles;
