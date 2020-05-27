import * as React from "react"
import "./App.css"
import { useTranslation } from "react-i18next"
import "./i18next"
import { Layout, Menu } from "antd"
import history from "./history"
import { Router } from "react-router"
import SupportFormContainer from "./SupportFormContainer"

const { Header, Footer, Content } = Layout

function App() {
  const { t, i18n } = useTranslation()

  return (
    <Router history={history}>
      <Layout style={{ minHeight: "100vh", overflow: "auto" }}>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="de" onClick={() => i18n.changeLanguage("de")}>
              {t("german")}
            </Menu.Item>
            <Menu.Item key="en" onClick={() => i18n.changeLanguage("en")}>
              {t("english")}
            </Menu.Item>
          </Menu>
        </Header>
        <Content>
          <div className="my-content">
            <SupportFormContainer />
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Router>
  )
}

export default App
