import React from "react"

import { Formik } from "formik"
import * as Yup from "yup" // Form validation.
import { useTranslation } from "react-i18next"

// Custom formik-antd component replacements. See comment in the file for details.
import FormItem from "./formik-antd/TranslatedFormItem"
import FormikDebug from "./formik-antd/FormikDebugProduction"

// Formik wrappers for Ant Design form components.
import { Form, Input, ResetButton, Select, SubmitButton } from "formik-antd"
import { Space } from "antd"

// Ant Design layout setups for the form elements.
const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  style: { display: "grid", gridTemplateColumns: "1fr 1fr" },
}
const buttonLayout = {
  style: { marginTop: 10 },
  wrapperCol: { offset: 8, span: 16 },
}

// The shape of the values used in the form.
export interface SupportFormValues {
  name: string
  email: string
  topic: string
  version?: string
  phone?: string
  description: string
}

// The current version of the software we're supporting. Serves as placeholder.
const softwareVersion = "1.10.0"

export const initialFormValues = {
  name: "",
  email: "",
  topic: "error",
  version: softwareVersion,
  phone: "",
  description: "",
}

// Pulled from: https://stackoverflow.com/questions/52483260/validate-phone-number-with-yup
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// Pulled from: https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
const versionRegExp = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/

// Yup validation schema for the form values.
const validationSchema = Yup.object().shape({
  name: Yup.string().required("form.validation.required"),

  email: Yup.string()
    .email("form.validation.emailInvalid")
    .required("form.validation.required"),

  topic: Yup.string()
    .required("form.validation.required")
    .oneOf(["general", "error", "call"], "form.validation.topicInvalid"),

  version: Yup.string().when("topic", {
    is: (topic) => topic === "error",
    then: Yup.string()
      .required("form.validation.required")
      .matches(versionRegExp, "form.validation.versionInvalid"),
  }),

  phone: Yup.string().when("topic", {
    is: (topic) => topic === "call",
    then: Yup.string()
      .required("form.validation.required")
      .matches(phoneRegExp, "form.validation.phoneInvalid"),
  }),

  description: Yup.string()
    .required("form.validation.required")
    .min(10, "form.validation.descriptionLength"),
})

interface SupportFormProps {
  initialValues: SupportFormValues
  onSubmit: (values: SupportFormValues) => void
}

const SupportForm = (props: SupportFormProps) => {
  const { t } = useTranslation()

  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(props) => (
        <Form {...formLayout}>
          <div className="component" style={{ flex: 1 }}>
            <FormItem name="name" required={true} label={t("form.labels.name")}>
              <Input name="name" required={true} />
            </FormItem>

            <FormItem
              name="email"
              required={true}
              label={t("form.labels.email")}
            >
              <Input name="email" required={true} />
            </FormItem>

            <FormItem
              name="topic"
              required={true}
              label={t("form.labels.topic")}
            >
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
            </FormItem>

            {/* Conditional field: Version (if topic is "Error") */}
            {props.values.topic === "error" && (
              <FormItem
                name="version"
                required={true}
                label={t("form.labels.version")}
              >
                <Input name="version" required={true} />
              </FormItem>
            )}

            {/* Conditional field: Phone (if topic is "Call") */}
            {props.values.topic === "call" && (
              <FormItem
                name="phone"
                required={true}
                label={t("form.labels.phone")}
              >
                <Input name="phone" required={true} />
              </FormItem>
            )}

            <FormItem
              name="description"
              required={true}
              label={t("form.labels.description")}
            >
              <Input.TextArea name="description" />
            </FormItem>

            <FormItem name="submit" {...buttonLayout}>
              <Space size="large">
                <SubmitButton size="large">
                  {t("form.labels.submit")}
                </SubmitButton>

                <ResetButton size="large">{t("form.labels.reset")}</ResetButton>
              </Space>
            </FormItem>
          </div>

          {/* Output the state of the form as debug information. */}
          <div className="component" style={{ flex: 1 }}>
            <FormikDebug />
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SupportForm
