import "./App.css";

import AppHeader from "./components/common/header";

import { Layout } from "antd";
const { Header } = Layout;

function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
    </Layout>
  );
}

export default App;
