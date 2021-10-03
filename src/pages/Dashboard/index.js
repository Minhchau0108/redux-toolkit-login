import React, { useEffect, useState } from "react";
import Navigation from "../../components/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { Table, Pagination } from "antd";
import {
  getAllStores,
  storesSelector,
} from "../../features/stores/storesSlice";
import { Button, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { StyledTableWrapper } from "./index.styled";
import { useScreenSize } from "../../hooks/useScreenSize";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    sorter: true,
    width: "20%",
  },
  {
    title: "Address",
    dataIndex: "address",
  },
  {
    title: "Phone",
    dataIndex: "phoneNumber",
    width: "20%",
  },
  {
    title: "City",
    dataIndex: "city",
    width: "20%",
  },
  {
    title: "",
    render: () => (
      <Space>
        <Button type='primary' size='small' className='black'>
          <EditOutlined />
        </Button>
        <Button type='primary' danger size='small'>
          <DeleteOutlined />
        </Button>
      </Space>
    ),
    width: "10%",
  },
];

const Dashboard = () => {
  const { isMobile } = useScreenSize();
  const dispatch = useDispatch();
  const { loading, stores, totalStores } = useSelector(storesSelector);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [orderBy, setOrderBy] = useState("");

  useEffect(() => {
    dispatch(getAllStores({ page: currentPage, perPage: perPage, orderBy }));
  }, [currentPage, perPage, orderBy]);
  const handlePaginationChange = (current, pageSize) => {
    setCurrentPage(current);
    setPerPage(pageSize);
  };
  const handleTableChange = (_, _filter, sorter) => {
    if (!sorter) return;
    if (sorter && sorter.field && sorter.order === "ascend") {
      setOrderBy(sorter.field);
    } else {
      setOrderBy("");
    }
  };

  return (
    <div>
      <Navigation />
      <StyledTableWrapper>
        <Table
          columns={
            !isMobile
              ? columns
              : columns.filter((item) => item.title !== "Address")
          }
          rowKey={(record) => record.id}
          dataSource={stores}
          loading={loading}
          pagination={{
            pageSize: perPage,
            position: ["none"],
          }}
          onChange={handleTableChange}
        />
        <div className='pagination'>
          <Pagination
            showQuickJumper
            defaultCurrent={currentPage}
            total={totalStores}
            onChange={handlePaginationChange}
            showTotal={(total, range) => `${range[0]}-${range[1]} / ${total}`}
          />
        </div>
      </StyledTableWrapper>
    </div>
  );
};

export default Dashboard;
