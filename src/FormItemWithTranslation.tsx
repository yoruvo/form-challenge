/**
 * Custom Form.Item component override to allow translation.
 *
 * I did so to allow translation of the error messages with react-i18next.
 *
 * Ideally, the form component from formik-antd should allow supplying a
 * translation function for the error output.
 *
 * Issue opened here: https://github.com/jannikbuschke/formik-antd/issues/144
 *
 * NOTE: This is purely because of the Ant Design-based layer I used
 * for this project. It is not necessary to do so with pure Formik.
 * If your project uses Formik with another library, you can just
 * use the i18next t() function in your custom error output.
 */

import * as React from "react"
import { Field, FieldProps, getIn, FieldConfig } from "formik"
import { Form } from "antd"
import { FormItemProps as $FormItemProps } from "antd/lib/form/FormItem"
import { useTranslation } from "react-i18next"
export type FormItemProps = {
  showValidateSuccess?: boolean
  showInitialErrorAfterTouched?: boolean
  children: React.ReactNode
} & { name: string } & $FormItemProps &
  Pick<FieldConfig, "validate">

export const FormItem = ({
  name,
  showValidateSuccess,
  showInitialErrorAfterTouched = false,
  children,
  validate,
  ...restProps
}: FormItemProps) => {
  const { t } = useTranslation()

  return (
    <Field name={name} validate={validate}>
      {({
        form: { errors = {}, touched = {}, initialErrors = {} },
      }: FieldProps) => {
        const error = getIn(errors, name, undefined)
        const initialError = getIn(initialErrors, name, undefined)
        let isTouched = getIn(touched, name, false) as boolean | boolean[]
        if (Array.isArray(isTouched)) {
          isTouched = isTouched.reduce((acc, value) => acc || value, false)
        }
        const hasError = error !== undefined && isTouched
        const hasInitialError = initialError !== undefined
        const isValid = !error && isTouched
        const showHelp =
          hasError ||
          (hasInitialError && (!isTouched || showInitialErrorAfterTouched))

        return (
          <Form.Item
            validateStatus={
              hasError || (hasInitialError && !isTouched)
                ? "error"
                : isValid && showValidateSuccess
                ? "success"
                : undefined
            }
            hasFeedback={isValid}
            help={
              showHelp && (
                <>
                  {hasError && <li>{t(error)}</li>}
                  {hasInitialError &&
                    (!isTouched || showInitialErrorAfterTouched) && (
                      <li>{t(initialError)}</li>
                    )}
                </>
              )
            }
            {...restProps}
          >
            {children}
          </Form.Item>
        )
      }}
    </Field>
  )
}

export default FormItem
