import { Alert } from "antd";
import ClientForm from "../../components/ClientForm";
import usePost from "../../hooks/usePost";
import "./styles.css"

function RegisterClient() {
  const { response, post } = usePost('clients')

  return (
    <div className="contentContainer">
      
      {!response.error && response.response ? (
        <Alert
          message="Cliente criado com sucesso"
          type="success"
          closable
          className='alert-message'
        />
      ) : null}

      <h2>Registrar cliente</h2>

      <ClientForm onSubmit={post} />
    </div>
  )
}

export default RegisterClient;