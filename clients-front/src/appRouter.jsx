import { Layout } from 'antd';
const { Content } = Layout;
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/index';
import Topbar from './components/TopBar';
import Clients from './pages/Clients';
import RegisterClient from './pages/RegisterClient';

function AppRouter() {
  return (
    <Layout style={{ backgroundColor: '#f0f2f5' }}>
      <Topbar />
      <Layout>
        <BrowserRouter>
          <Sidebar />
          <Layout
            style={{
              backgroundColor: '#f0f2f5',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <Content
              style={{
                margin: 0,
                minHeight: window.innerHeight - 64,
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <Routes>
                <Route path="/register-client" element={<RegisterClient />} />
                <Route path="/" element={<Clients />} />
              </Routes>

            </Content>
          </Layout>
        </BrowserRouter>
      </Layout>
    </Layout>

  )
}

export default AppRouter;