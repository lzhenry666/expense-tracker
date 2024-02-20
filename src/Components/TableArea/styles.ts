import styled
 from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #000;
  border-radius: 10px;
  margin-top: 20px;
  thead {
    tr {
      th {
        padding: 10px;
      }
    }
  }
  tbody {
    tr {
      td {
        padding: 10px;
      }
    }
  }
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
    color: #000;
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding: 10px;
    `;