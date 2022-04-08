import { Form, Input, Button, Select, Space, DatePicker, Alert } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "./styles.css";

const layout = {
  labelCol: { span: 1 },
  wrapperCol: { span: 20 },
};

function ClientForm({ onSubmit, initialValues }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values);
    onSubmit(values);
    form.resetFields();
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
                },
              ]}
            >
              <Input 
                placeholder='Nome'
                allowClear
                />
            </Form.Item>
            <Form.Item
              name="birthDate"
              rules={[
                {
                  required: true,
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
                },
              ]}
            >
              <Input placeholder='Cpf' allowClear/>
            </Form.Item>
            <Form.Item
              name="rg"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder='Rg' allowClear/>
            </Form.Item>
            <Form.Item
              name="linkedin"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder='Linkedin' allowClear/>
            </Form.Item>
            <Form.Item
              name="facebook"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder='Twitter' allowClear/>
            </Form.Item>
            <Form.Item
              name="twitter"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder='Twitter' allowClear/>
            </Form.Item>
            <Form.Item
              name="instagram"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder='Instagram' allowClear/>
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
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="País" allowClear/>
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'state']}
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Estado" allowClear/>
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'postalCode']}
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="CEP" allowClear/>
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'neighbourhood']}
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Bairro" allowClear/>
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'street']}
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Rua" allowClear/>
                      </Form.Item>
                      {(name > 0) ? <MinusCircleOutlined onClick={() => remove(name)} /> : <> </>}
                    </Space>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} className="add-item-button">
                      Adicionar endereço
                    </Button>
                  </Form.Item>
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
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Número" allowClear/>
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'identification']}
                        rules={[{ required: true }]}
                      >
                        <Select style={{ minWidth: "130px" }} placeholder="identificação">
                          <Select.Option value="residential">residencial</Select.Option>
                          <Select.Option value="comercial">comercial</Select.Option>
                        </Select>

                      </Form.Item>
                      {(name > 0) ? <MinusCircleOutlined onClick={() => remove(name)} /> : <> </>}
                    </Space>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} className="add-item-button">
                      Adicionar Telefone
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>


          </div>
        </div>

        <Form.Item>
          <Button type="primary" htmlType="submit" className='create-client-button'>
            Criar Cliente
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