import { Alert } from "antd";
import ClientForm from "../../components/ClientForm";
import usePost from "../../hooks/usePost";
import "./styles.css"

function RegisterClient() {
  const { response, post } = usePost('clients')
  console.log(response)

  return (
    <div className="contentContainer">
      
      {!response.error && response.response?.status == "201" ? (
        <Alert
          message="Cliente criado com sucesso"
          type="success"
          closable
          className='alert-message'
        />
      ) : null}

      {response.response && response.response?.status != "201" ? (
        <Alert
          message="Erro ao criar cliente"
          type="error"
          closable
          className='alert-message'
        />
      ) : null}

      <h2>Registrar cliente</h2>

      <ClientForm 
        onSubmit={post} 
        submitText="Criar Cliente"
      />
    </div>
  )
}

export default RegisterClient;