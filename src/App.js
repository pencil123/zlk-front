import { Layout } from 'antd'

import Home from "@/pages/home/home";
import MyHeader from "@/components/header/header";
import MyFooter from './components/footer/footer';
import './App.css';

const { Content } = Layout;

function App() {
  return (
      <Layout>
          <MyHeader />
          <Content>
              <Home />
          </Content>
          <MyFooter />
      </Layout>
  );
}

export default App;
