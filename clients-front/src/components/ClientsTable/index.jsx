import { Table } from "antd";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./styles.css"

const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Cpf',
    dataIndex: 'cpf',
    key: 'cpf',
  },
  {
    title: 'Rg',
    dataIndex: 'rg',
    key: 'rg',
  },
  {
    title: 'Data de Nascimento',
    dataIndex: 'birthDate',
    key: 'birthDate',
  }
];

function ClientsTable() {
    
  const dataRows = [];

  const [ fetchParams, setFetchParams ] = useState("")
  const { data, loading, error } = useFetch("clients" + fetchParams);
  const [ selectedPage, setSelectedPage ] = useState(0);

  useEffect(() => {
    setFetchParams("?page=" + selectedPage);
  }, [selectedPage])

  if (loading || error) return <></>

  const clients = data.clients;

  clients.forEach((client) => {
    dataRows.push({
      id: client.id,
      name: client.name,
      rg: client.rg,
      cpf: client.cpf,
      birthDate: client.birthDate
    })
  })

  return (
    <div className="tableContainer">
      <h2>Listagem de CLientes</h2>
      <Table
        size="middle"
        dataSource={dataRows}
        columns={columns}
        style={{ marginTop: '20px', minWidth: '0' }}
        pagination = {
          {
            pageSize: 10,
            onChange: (page) => {
              setSelectedPage(page - 1);
            },
            total: data.totalItems,
            current: selectedPage + 1
          }
        }
      />
    </div>
  )

}

export default ClientsTable;