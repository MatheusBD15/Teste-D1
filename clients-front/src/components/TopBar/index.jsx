import { Layout } from 'antd';
import Title from 'antd/lib/typography/Title';
import './styles.css';
const { Header } = Layout;

export default function Topbar() {
  return (
    <Header className="header" style={{ backgroundColor: ' #fff' }}>
      <Title className="title">
        Clientes
      </Title>
    </Header>
  );
}
