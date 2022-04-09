import { Form, Input, Button, Select, Space, DatePicker, Alert } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "./styles.css";

const layout = {
  labelCol: { span: 1 },
  wrapperCol: { span: 20 },
};

function ClientForm({ onSubmit, initialValues, submitText }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    if (!values.addresses || !values.cellphones) {
      alert("Insira no mínimo um telefone e um endereço");
    } else {
      onSubmit(values);
      form.resetFields();
    }
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Form {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        initialValues={initialValues}
      >
        <div className="forms-container">
          <div>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Insira seu nome"
                },
              ]}
            >
              <Input
                placeholder='Nome'
              />
            </Form.Item>
            <Form.Item
              name="birthDate"
              rules={[
                {
                  required: true,
                  message: "Insira sua data de nascimento"
                },
              ]}
            >
              <DatePicker placeholder='Data de nascimento' />
            </Form.Item>
            <Form.Item
              name="cpf"
              rules={[
                {
                  required: true,
                  message: "Insira seu cpf"
                },
                {
                  pattern: /(^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$)/,
                  message: "Insira um cpf válido"
                }
              ]}
            >
              <Input placeholder='Cpf' />
            </Form.Item>
            <Form.Item
              name="rg"
              rules={[
                {
                  required: true,
                  message: "Insira seu rg"
                },
                {
                  pattern: /(^\d{1,2}).?(\d{3}).?(\d{3})-?(\d{1}|X|x$)/,
                  message: "Insira um rg válido"
                }
              ]}
            >
              <Input placeholder='Rg' />
            </Form.Item>
            <Form.Item
              name="linkedin"
              rules={[
                {
                  required: true,
                  message: "Insira seu perfil do linkedin"
                },
              ]}
            >
              <Input placeholder='Linkedin' />
            </Form.Item>
            <Form.Item
              name="facebook"
              rules={[
                {
                  required: true,
                  message: "Insira seu perfil do facebook"
                },
              ]}
            >
              <Input placeholder='Twitter' />
            </Form.Item>
            <Form.Item
              name="twitter"
              rules={[
                {
                  required: true,
                  message: "Insira seu perfil do twitter"
                },
              ]}
            >
              <Input placeholder='Twitter' />
            </Form.Item>
            <Form.Item
              name="instagram"
              rules={[
                {
                  required: true,
                  message: "Insira seu perfil do instagram"
                },
              ]}
            >
              <Input placeholder='Instagram' />
            </Form.Item>

          </div>
          <div className='form-list-container'>
            <Form.List name="addresses" >
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} style={{ display: 'flex' }} align="baseline">
                      <Form.Item
                        {...restField}
                        name={[name, 'country']}
                        rules={[{
                          required: true,
                          message: "Insira um país"
                        }]}
                      >
                        <Input placeholder="País" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'state']}
                        rules={[{
                          required: true,
                          message: "Insira um estado"
                        }]}
                      >
                        <Input placeholder="Estado" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'postalCode']}
                        rules={[{
                          required: true,
                          message: "Insira um CEP"
                        },
                        {
                          pattern: /(^[0-9]{5})-?([0-9]{3}$)/,
                          message: "Insira um CEP válido"
                        }
                        ]}
                      >
                        <Input placeholder="CEP" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'neighbourhood']}
                        rules={[
                          {
                            required: true,
                            message: "Insira um bairro"
                          }
                        ]}
                      >
                        <Input placeholder="Bairro" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'street']}
                        rules={[
                          {
                            required: true,
                            message: "Insira uma rua"
                          }
                        ]}
                      >
                        <Input placeholder="Rua" />
                      </Form.Item>
                      {(name > 0) ? <MinusCircleOutlined onClick={() => remove(name)} /> : <> </>}
                    </Space>
                  ))}
                  {fields.length < 4 ? (
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} className="add-item-button">
                        Adicionar Endereço
                      </Button>
                    </Form.Item>
                  ) : null}
                </>
              )}
            </Form.List>
            <Form.List name="cellphones">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} style={{ display: 'flex' }} align="baseline">
                      <Form.Item
                        {...restField}
                        name={[name, 'number']}
                        rules={[
                          {
                            required: true,
                            message: "Insira seu número de telefone"
                          },
                          {
                            pattern: /(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)/,
                            message: "Insira um número de telefone válido"
                          }
                        ]}
                      >
                        <Input placeholder="Número" allowClear />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'identification']}
                        rules={[{
                          required: true,
                          message: "Informe o tipo do telefone"
                        }]}
                      >
                        <Select style={{ minWidth: "130px" }} placeholder="identificação">
                          <Select.Option value="residencial">Residencial</Select.Option>
                          <Select.Option value="comercial">Comercial</Select.Option>
                        </Select>

                      </Form.Item>
                      {(name > 0) ? <MinusCircleOutlined onClick={() => remove(name)} /> : <> </>}
                    </Space>
                  ))}
                  {fields.length < 4 ? (
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} className="add-item-button">
                        Adicionar Telefone
                      </Button>
                    </Form.Item>
                  ) : null}
                </>
              )}
            </Form.List>


          </div>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" className='create-client-button'>
            {submitText}
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Resetar Campos
          </Button>
        </Form.Item>

      </Form>

    </>
  );

}

export default ClientForm;