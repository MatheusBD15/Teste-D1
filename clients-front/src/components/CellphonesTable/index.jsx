import { Table } from "antd";
import "./styles.css"

const columns = [
  {
    title: "Id",
    key: "id",
    dataIndex: "id"
  },
  {
    title: "Número",
    key: "number",
    dataIndex: "number"
  },
  {
    title: "Identificação",
    key: "identification",
    dataIndex: "identification"
  }
]

function CellphonesTable({ cellphones }) {

  const data = [];

  cellphones.forEach((item) => {
    data.push(item)
  });

  return <Table
    dataSource={data}
    columns={columns}
    pagination={false}
    className="cellphones-table"
  />
}

export default CellphonesTable;