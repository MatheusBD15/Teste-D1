import { Alert } from "antd";
import { useParams } from "react-router-dom";
import ClientForm from "../../components/ClientForm";
import useFetch from "../../hooks/useFetch";
import usePut from "../../hooks/usePut";
import moment from "moment";
import "./styles.css"
import { useEffect } from "react";

function EditClient() {
  const { id } = useParams();
  const { response, put } = usePut('clients/' + id);
  const { data, loading, error, fetch } = useFetch("clients/" + id);

  useEffect(() => {
    fetch();
  }, [ response ])

  const onPut = (params) => {
    put({
      id: id,
      ...params
    })
  }

  if (loading || error) return <></>

  if (response.response) location.reload();

  // formatar birthDate para que possa ser utilizado como valor padrão pelo form
  data.birthDate = moment(data.birthDate);

  return (
    <div className="contentContainer">
      
      {!response.error && response.response ? (
        <Alert
          message="Cliente editado com sucesso"
          type="success"
          closable
          className='alert-message'
        />
      ) : null}

      <h2>Editar cliente</h2>

      <ClientForm 
        onSubmit={onPut} 
        initialValues={data}
        submitText="Editar Cliente"
      />
    </div>
  )
}

export default EditClient;