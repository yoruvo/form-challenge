import { notification, Space } from "antd"
import { Form, Input, ResetButton, Select, SubmitButton } from "formik-antd"
import { Field, Formik, FormikProps } from "formik"
import * as React from "react"
import * as Yup from "yup"
import { useTranslation } from "react-i18next"
import useTranslateFormErrors from "./lib/use-translate-form-errors"

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

// Shape of form values
interface FormValues {
  name: string
  email: string
  topic: string
  version: string
  phone: string
  description: string
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { errors, touched, setFieldTouched, values } = props

  const { t } = useTranslation()
  useTranslateFormErrors(errors, touched, setFieldTouched)

  return (
    <Form {...formLayout}>
      <div style={{ flex: 1, padding: 24 }}>
        <Form.Item name="name" required={true} label={t("form.labels.name")}>
          <Input name="name" required={true} />
        </Form.Item>

        <Form.Item name="email" required={true} label={t("form.labels.email")}>
          <Input name="email" required={true} />
        </Form.Item>

        <Form.Item name="topic" required={true} label={t("form.labels.topic")}>
          <Select name="topic">
            <Select.Option value="general">
              {t("form.values.general")}
            </Select.Option>
            <Select.Option value="error">
              {t("form.values.error")}
            </Select.Option>
            <Select.Option value="call">{t("form.values.call")}</Select.Option>
          </Select>
        </Form.Item>

        {/* Conditional fields */}
        {values.topic === "error" && (
          <Form.Item
            name="version"
            required={true}
            label={t("form.labels.version")}
          >
            <Input name="version" required={true} />
          </Form.Item>
        )}
        {values.topic === "call" && (
          <Form.Item
            name="phone"
            required={true}
            label={t("form.labels.phone")}
          >
            <Input name="phone" required={true} />
          </Form.Item>
        )}

        <Form.Item
          name="description"
          required={true}
          label={t("form.labels.description")}
        >
          <Input.TextArea name="description" />
        </Form.Item>

        <Form.Item name="submit" {...buttonLayout}>
          <Space size="large">
            <SubmitButton size="large" style={{ marginTop: 10 }}>
              {t("form.labels.submit")}
            </SubmitButton>

            <ResetButton size="large" style={{ marginTop: 10 }}>
              {t("form.labels.reset")}
            </ResetButton>
          </Space>
        </Form.Item>
      </div>

      <div style={{ flex: 1, padding: 24 }}>
        {/* Copied from FormikDebug of formik-antd.
                    The FormikDebug element only displays in dev mode.
                    I want this to show on the GitHub Pages site.*/}
        <pre style={{ padding: 15 }}>
          <Field>{({ form }: any) => JSON.stringify(form, null, 2)}</Field>
        </pre>
      </div>
    </Form>
  )
}

const SupportForm = () => {
  const { t } = useTranslation()
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t("form.validation.required")),
    email: Yup.string()
      .email(t("form.validation.emailInvalid"))
      .required(t("form.validation.required")),
    // Topic validation: should be one of the possible values.
    topic: Yup.string()
      .required(t("form.validation.required"))
      .oneOf(["general", "error", "call"], t("form.validation.topicInvalid")),
    // Version validation: Only when topic is "Software error".
    // Should conform to Semantic Versioning.
    version: Yup.string().when("topic", {
      is: (topic) => topic === "error",
      then: Yup.string()
        .required(t("form.validation.required"))
        .matches(phoneRegExp, t("form.validation.versionInvalid")),
    }),
    // Phone validation: Only when topic is "Return call".
    // Should be a phone number.
    phone: Yup.string().when("topic", {
      is: (topic) => topic === "call",
      then: Yup.string()
        .required(t("form.validation.required"))
        .matches(phoneRegExp, t("form.validation.phoneInvalid")),
    }),
    // Description validation: Should be at least 10 characters.
    description: Yup.string()
      .required(t("form.validation.required"))
      .min(10, t("form.validation.descriptionLength")),
  })

  // Taken from: https://medium.com/code-divoire/how-to-internationalize-a-yup-validation-schema-in-a-react-formik-and-react-i18next-app-689ff3cd978

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        topic: "error",
        version: "",
        phone: "",
        description: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, f) => {
        notification.info({ message: values.topic })
        f.setSubmitting(false)
      }}
      component={InnerForm}
    />
  )
}

export default SupportForm
