import { Table } from "antd";

const columns = [
  {
    title: "Id",
    key: "id",
    dataIndex: "id"
  },
  {
    title: "País",
    key: "country",
    dataIndex: "country"
  },
  {
    title: "Estado",
    key: "state",
    dataIndex: "state"
  },
  {
    title: "CEP",
    key: "postalCode",
    dataIndex: "postalCode"
  },
  {
    title: "Bairro",
    key: "neighbourhood",
    dataIndex: "neighbourhood"
  },
  {
    title: "Rua",
    key: "street",
    dataIndex: "street"
  }
]

function AddressesTable({ addresses }) {
  const data = [];

  addresses.forEach((item) => {
    data.push(item)
  });

  return <Table
    dataSource={data}
    columns={columns}
    pagination={false}
  />
}

export default AddressesTable;