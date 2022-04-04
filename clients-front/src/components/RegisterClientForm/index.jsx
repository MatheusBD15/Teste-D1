import { Form, Input, Button, Select, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "./styles.css";
import usePost from '../../hooks/usePost';
import { useEffect } from 'react';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function RegisterClientForm() {
  const [form] = Form.useForm();
  const { response, post } = usePost('clients')

  useEffect(() => {
    console.log(response)
  }, [response])

  const onFinish = (values) => {
    console.log(values);
    post(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}
      size="small"
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
            <Input placeholder='Nome' />
          </Form.Item>
          <Form.Item
            name="birthdate"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder='Data de nascimento' />
          </Form.Item>
          <Form.Item
            name="cpf"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder='Cpf' />
          </Form.Item>
          <Form.Item
            name="rg"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder='Rg' />
          </Form.Item>
          <Form.Item
            name="linkedin"
            rules={[
              {
                required: true,
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
              },
            ]}
          >
            <Input placeholder='Instagram' />
          </Form.Item>

        </div>
        <div className='form-list-container'>
          <Form.List name="addresses">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, ...restField }) => (
                  <div key={key} style={{ display: 'flex' }}>
                    <Form.Item
                      {...restField}
                      name={[name, 'country']}
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="País" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'state']}
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Estado" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'postalCode']}
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="CEP" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'neighbourhood']}
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Bairro" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'street']}
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Rua" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </div>
                ))}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} className="add-item-button">
                    Adicionar endereço
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>

        </div>
        <div>
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
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'identification']}
                      rules={[{ required: true }]}
                    >
                      <Select>
                        <Select.Option value="residential">Residencial</Select.Option>
                        <Select.Option value="comercial">Comercial</Select.Option>
                      </Select>

                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
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

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>

    </Form>
  );

}

export default RegisterClientForm;