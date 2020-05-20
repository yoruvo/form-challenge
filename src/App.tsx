import * as React from "react"
import "./App.css"
import { Formik } from "formik"
import {
  FormikDebug,
  InputNumber,
  Input,
  SubmitButton,
  Form,
  Select,
} from "formik-antd"
import { useTranslation } from "react-i18next"
import "./i18next"
import { Layout, Menu, notification } from "antd"
import { AntDesignOutlined } from "@ant-design/icons"
const { Header, Footer, Content } = Layout

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  style: { display: "grid", gridTemplateColumns: "1fr 1fr" },
}

function App() {
  const { t, i18n } = useTranslation()
  return (
    <Layout>
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
          <Formik
            initialValues={{ topic: "error" }}
            onSubmit={(values, f) => {
              notification.info({ message: values.topic })
              f.setSubmitting(false)
            }}
          >
            {(props) => (
              <Form {...formLayout}>
                <div style={{ flex: 1, padding: 24 }}>
                  <Form.Item name="name" label={t("form.labels.name")}>
                    <Input name="name" />
                  </Form.Item>

                  <Form.Item name="email" label={t("form.labels.email")}>
                    <Input name="email" />
                  </Form.Item>

                  <Form.Item name="topic" label={t("form.labels.topic")}>
                    <Select name="topic">
                      <Select.Option value="general">
                        {t("form.values.general")}
                      </Select.Option>
                      <Select.Option value="error">
                        {t("form.values.error")}
                      </Select.Option>
                      <Select.Option value="call">
                        {t("form.values.call")}
                      </Select.Option>
                    </Select>
                  </Form.Item>

                  {/* Conditional fields */}
                  {props.values.topic === "error" && (
                    <Form.Item name="version" label={t("form.labels.version")}>
                      <InputNumber name="version" />
                    </Form.Item>
                  )}
                  {props.values.topic === "call" && (
                    <Form.Item name="phone" label={t("form.labels.phone")}>
                      <Input name="phone" />
                    </Form.Item>
                  )}

                  <Form.Item
                    name="description"
                    label={t("form.labels.description")}
                  >
                    <Input.TextArea name="description" />
                  </Form.Item>

                  <SubmitButton
                    style={{ marginTop: 10 }}
                    icon={<AntDesignOutlined />}
                  >
                    {t("form.labels.submit")}
                  </SubmitButton>
                </div>

                <div style={{ flex: 1, padding: 24 }}>
                  <FormikDebug />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default App
