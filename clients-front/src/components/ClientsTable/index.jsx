import { Table } from "antd";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import SearchBox from "../SearchBox";
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
  },
  {
    title: 'Linkedin',
    dataIndex: 'linkedin',
    key: 'linkedin',
  },
  {
    title: 'Facebook',
    dataIndex: 'facebook',
    key: 'facebook',
  },
  {
    title: 'Twitter',
    dataIndex: 'twitter',
    key: 'twitter',
  },
  {
    title: 'Instagram',
    dataIndex: 'instagram',
    key: 'instagram',
  }
];

function ClientsTable() {

  const dataRows = [];

  const [fetchParams, setFetchParams] = useState("")
  const { data, loading, error } = useFetch("clients" + fetchParams);
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedName, setSelectedName] = useState('');

  // Checagem de nome selecionado serve para botar nome nos params da query
  useEffect(() => {
    if (selectedName.length > 0) {
      setFetchParams(
        "?name=" + selectedName + "&page=" + selectedPage
      );
    } else {
      setFetchParams("?page=" + selectedPage);
    }
  }, [selectedPage, selectedName])

  const onSearch = (value) => {
    setSelectedName(value);
  }

  if (loading || error) return <></>

  const clients = data.clients;

  clients.forEach((client) => {
    dataRows.push({
      id: client.id,
      name: client.name,
      rg: client.rg,
      cpf: client.cpf,
      birthDate: new Date(client.birthDate)?.toLocaleDateString() ?? "Data inválida",
      linkedin: client.linkedin ?? "Não providenciado",
      twitter: client.twitter ?? "Não providenciado",
      facebook: client.facebook ?? "Não providenciado",
      instagram: client.instagram ?? "Não providenciado",
    })
  })

  return (
    <>
      <div className='heading-container'>
        <h2>Listagem de CLientes</h2>
        <SearchBox
          onSearch={onSearch}
        />
      </div>
      <Table
        size="middle"
        dataSource={dataRows}
        columns={columns}
        className='table'
        pagination={
          {
            pageSize: 10,
            onChange: (page) => {
              setSelectedPage(page);
            },
            total: data.totalItems,
            current: selectedPage
          }
        }
      />
    </>

  )

}

export default ClientsTable;