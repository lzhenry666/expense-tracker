import styled
 from "styled-components";

 export const Container = styled.div`
 flex: 1;
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

export const Title = styled.div`
text-align: center;
font-weight: bold;
color:$
`;

export const Info = styled.div<{ color: string }>`
flex: 1;
color: ${props => props.color};
text-align: center;
`;