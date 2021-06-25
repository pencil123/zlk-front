import { Layout } from "antd";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "@/pages/home/home";
import Info from "@/pages/info/info";
import MyHeader from "@/components/header/header";
import MyFooter from "./components/footer/footer";
import "./App.css";

const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <MyHeader />
        <Content>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/info" exact component={Info}/>
          </Switch>
        </Content>
        <MyFooter />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
