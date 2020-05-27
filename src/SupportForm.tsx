import * as React from "react"
import { Space } from "antd" // Ant Design styling components.

// Formik wrappers for Ant Design form components.
import { Form, Input, ResetButton, Select, SubmitButton } from "formik-antd"
import { Field, Formik } from "formik" // Raw Formik components.

// Custom formik-antd component override. See comment in the file for details.
import { FormItem } from "./FormItemWithTranslation"

import * as Yup from "yup" // Form validation.
import { useTranslation } from "react-i18next"

import SupportFormValues from "./SupportFormValues"

// Ant Design layout setups for the form elements.
const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  style: { display: "grid", gridTemplateColumns: "1fr 1fr" },
}
const buttonLayout = {
  wrapperCol: { offset: 8, span: 16 },
}
// Pulled from: https://stackoverflow.com/questions/52483260/validate-phone-number-with-yup
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// Pulled from: https://semver.org/#is-there-a-suggested-regular-expression-regex-to-check-a-semver-string
const versionRegExp = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/

interface SupportFormProps {
  initialValues: SupportFormValues
  onSubmit: (values: SupportFormValues) => void
}
// Formik logic wrapper.
const SupportForm = (props: SupportFormProps) => {
  const { t } = useTranslation()

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("form.validation.required"),
    email: Yup.string()
      .email("form.validation.emailInvalid")
      .required("form.validation.required"),
    // Topic validation: should be one of the possible values.
    topic: Yup.string()
      .required("form.validation.required")
      .oneOf(["general", "error", "call"], "form.validation.topicInvalid"),
    // Version validation: Only when topic is "Software error".
    // Should conform to Semantic Versioning.
    version: Yup.string().when("topic", {
      is: (topic) => topic === "error",
      then: Yup.string()
        .required("form.validation.required")
        .matches(versionRegExp, "form.validation.versionInvalid"),
    }),
    // Phone validation: Only when topic is "Return call".
    // Should be a phone number.
    phone: Yup.string().when("topic", {
      is: (topic) => topic === "call",
      then: Yup.string()
        .required("form.validation.required")
        .matches(phoneRegExp, "form.validation.phoneInvalid"),
    }),
    // Description validation: Should be at least 10 characters.
    description: Yup.string()
      .required("form.validation.required")
      .min(10, "form.validation.descriptionLength"),
  })

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

            {/* Conditional fields */}
            {props.values.topic === "error" && (
              <FormItem
                name="version"
                required={true}
                label={t("form.labels.version")}
              >
                <Input name="version" required={true} />
              </FormItem>
            )}
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
                <SubmitButton size="large" style={{ marginTop: 10 }}>
                  {t("form.labels.submit")}
                </SubmitButton>

                <ResetButton size="large" style={{ marginTop: 10 }}>
                  {t("form.labels.reset")}
                </ResetButton>
              </Space>
            </FormItem>
          </div>

          <div className="component" style={{ flex: 1 }}>
            {/* Copied from FormikDebug of formik-antd.
                    The FormikDebug element only displays in dev mode.
                    I want this to show on the GitHub Pages site.*/}
            <pre style={{ padding: 15 }}>
              <Field>{({ form }: any) => JSON.stringify(form, null, 2)}</Field>
            </pre>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default SupportForm
