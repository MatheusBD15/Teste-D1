import { Alert, Button, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import useDelete from "../../hooks/useDelete";
import useFetch from "../../hooks/useFetch";
import CellphonesTable from "../CellphonesTable";
import AddressesTable from "../AddressesTable";
import SearchBox from "../SearchBox";
import "./styles.css"

function ClientsTable() {

  const dataRows = [];

  const [fetchParams, setFetchParams] = useState("")
  const { data, loading, error, fetch } = useFetch("clients" + fetchParams);
  const [selectedPage, setSelectedPage] = useState(1);
  const [selectedName, setSelectedName] = useState('');
  const { response, callDelete } = useDelete();
  const navigate = useNavigate();

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

  useEffect(() => {
    fetch();
  }, [response])

  const onSearch = (value) => {
    setSelectedName(value);
  }

  const expandedRowRender = (record) => {
    const addresses = record.addresses;
    const cellphones = record.cellphones;

    return (
      <div className="row-details">
        <h3>Telefones</h3>
        <CellphonesTable cellphones={cellphones} />

        <h3>Endereços</h3>
        <AddressesTable 
          addresses={addresses} 
        />

      </div>
    )
  }

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
    },
    {
      title: 'Ações',
      dataIndex: 'actions',
      key: 'actions',
      render: (_text, record) => (
        <Space size="small">
          <Button type="primary" onClick={() => callDelete("clients/" + record.id)}>
            Deletar
          </Button>
          <Button onClick={() => navigate("edit-client/" + record.id)}>
            Editar
          </Button>
        </Space>
      )
    },
  ];

  if (loading || error) return <></>

  const clients = data.clients;

  clients.forEach((client) => {
    dataRows.push({
      ...client,
      birthDate: new Date(client.birthDate)?.toLocaleDateString() ?? "Data inválida",
      linkedin: client.linkedin ?? "Não providenciado",
      twitter: client.twitter ?? "Não providenciado",
      facebook: client.facebook ?? "Não providenciado",
      instagram: client.instagram ?? "Não providenciado",
    })
  })

  return (
    <>
      {response.response ? (
        <Alert
          message="Cliente removido"
          type="success"
          closable
          className='alert-message'
        />
      ) : null}

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
        scroll={{ x: 1000 }}
        expandable={{ expandedRowRender }}
        rowKey={(record) => record.id}
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