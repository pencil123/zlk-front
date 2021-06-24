import { Layout } from 'antd'

import Home from "@/pages/home/home";
import './App.css';

const { Header, Footer, Content } = Layout;

function App() {
  return (
      <Layout>
          <Header>
              header
          </Header>
          <Content>
              <Home />
          </Content>
          <Footer>
              Footer
          </Footer>
      </Layout>
  );
}

export default App;
