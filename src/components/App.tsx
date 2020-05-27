import React from "react"

import { BrowserRouter as Router } from "react-router-dom"

import { Trans, useTranslation } from "react-i18next"
import "../lib/i18next"

import Content from "./Content"
import { Layout, Menu } from "antd"
const { Header, Footer } = Layout

function App() {
  const { t, i18n } = useTranslation()

  return (
    <Router>
      <Layout style={{ minHeight: "100vh", overflow: "auto" }}>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["de"]}>
            <Menu.Item key="de" onClick={() => i18n.changeLanguage("de")}>
              {t("german")}
            </Menu.Item>
            <Menu.Item key="en" onClick={() => i18n.changeLanguage("en")}>
              {t("english")}
            </Menu.Item>
          </Menu>
        </Header>
        <Content />
        <Footer>
          <Trans i18nKey="footer">
            Written by Ivan "yoruvo" Vidusenko. Find this project on{" "}
            <a href="https://github.com/yoruvo/form-challenge">GitHub</a>
          </Trans>
        </Footer>
      </Layout>
    </Router>
  )
}

export default App
