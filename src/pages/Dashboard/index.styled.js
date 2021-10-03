import styled from "styled-components";

export const StyledTableWrapper = styled.div`
  padding: 0px 20px 20px 20px;

  .ant-table-thead {
    th {
      background-color: white !important;
      color: #595fa5;
    }
    > tr > th::before {
      width: 0px !important;
    }
  }
  .ant-table-column-sorters {
    justify-content: flex-start !important;
  }
  .ant-table-column-title {
    margin-right: 5px;
    flex: none !important;
  }

  .ant-btn-primary {
    border-radius: 4px;
  }
  .black {
    background-color: black;
    border: none;
  }
  .pagination {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
  }
  .ant-pagination-item-active {
    background-color: black;
    border: none;
    a {
      color: white;
    }
  }
`;
