/**
 * THIS IS TAKEN FROM formik-antd LIBRARY
 * LINK: https://github.com/jannikbuschke/formik-antd/blob/master/src/formik-debug/index.tsx
 *
 * The FormikDebug element only displays in dev mode.
 * I want this to show on the GitHub Pages site.
 */
import { Field } from "formik"
import * as React from "react"

export const FormikDebug = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) => (
  <pre style={{ padding: 15, ...props }}>
    <Field>{({ form }: any) => JSON.stringify(form, null, 2)}</Field>
  </pre>
)

export default FormikDebug
