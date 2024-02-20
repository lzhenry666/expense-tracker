import styled
 from "styled-components";

export const TableLine = styled.tr`
    background-color: #fff;
    color: #000;
    `;

export const TableColumn = styled.td<{ width?: number }>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px;
    `;
export const Category = styled.div<{ color: string }>`
    display:inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    background-color: ${props => props.color};
    `;
export const Value = styled.div<{ color: string }>`
    color: ${props => props.color};
    `;