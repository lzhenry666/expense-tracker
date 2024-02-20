import styled
 from "styled-components";

 export const Container = styled.div`
        background-color: #fff;
        box-shadow: 0px 0px 5px #000;
        border-radius: 10px;
        padding: 20px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        display: flex;
        `;

export const MonthArea = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

export const MonthArrow = styled.div`
cursor: pointer;
width: 40px;
font-size: 25px;
text-align: center;
`;

export const MonthTitle = styled.div`
flex: 1;
text-align: center;
`;

export const ResumeArea = styled.div`
flex: 2;
display: flex;
`;