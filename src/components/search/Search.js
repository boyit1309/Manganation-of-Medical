import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Tag, Space } from "antd";
import "antd/dist/antd.css";

export default function Search() {
  const [state, _setState] = useState([]);
//   const setState = (data = {}) => {
//     _setState((prevState) => {
//       return { ...prevState, ...data };
//     });
//   };

  useEffect(() => {
    axios
      .get(`https://60ffade3bca46600171cf447.mockapi.io/api/products`)
      .then((res) => {
        _setState(res.data);
        console.log(res.data);
        console.log(state);
      })
      .catch((error) => console.log(error));
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Ngày tiêm mũi 1",
      dataIndex: "firstVaxDate",
      key: "firstVaxDate",
    },
  ];
  return (
    <>
      <Table columns={columns} dataSource={state} />
    </>
  );
}
