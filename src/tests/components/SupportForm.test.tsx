import * as React from "react"
import SupportForm from "../../components/SupportForm"
import { mount, ReactWrapper, HTMLAttributes } from "enzyme"
import { initialValues } from "../../components/SupportForm"
import "../../lib/i18next"
import { act } from "@testing-library/react"
import i18next from "i18next"

// Taken from: https://github.com/jaredpalmer/formik/issues/937#issuecomment-565256589
export const updateFormikField = async (
  nativeFieldWrapper: ReactWrapper<
    HTMLAttributes,
    any,
    React.Component<{}, {}, any>
  >,
  targetName: string,
  value: any,
) => {
  // updates values and errors
  await act(async () => {
    nativeFieldWrapper.simulate("change", {
      persist: jest.fn(),
      target: { name: targetName, value: value },
    })
  })
  // updates touched
  await act(async () => {
    nativeFieldWrapper.simulate("blur", { target: { name: targetName } })
  })
}

export const submitFormikForm = async (
  nativeFormWrapper: ReactWrapper<
    HTMLAttributes,
    any,
    React.Component<{}, {}, any>
  >,
) => {
  await act(async () => {
    nativeFormWrapper.simulate("submit", { preventDefault: () => {} })
  })
}

describe("Support form", () => {
  it("allows submission with correct values", async () => {
    const submitHandler = jest.fn()

    const form = mount(
      <SupportForm initialValues={initialValues} onSubmit={submitHandler} />,
    )

    const name = form.find('input[name="name"]').first()
    await updateFormikField(name, "name", "Ivan Vidusenko")

    const email = form.find('input[name="email"]').first()
    await updateFormikField(email, "email", "yoruvo@gmail.com")

    const description = form.find('textarea[name="description"]')
    await updateFormikField(
      description,
      "description",
      "These are ten characters.",
    )

    const submit = form.find('button[type="submit"]').first()
    expect(submit.prop("disabled")).toBe(false)

    await submitFormikForm(form)

    expect(submitHandler).toHaveBeenCalled()
  })

  /**
   * formik-antd bug: The submit button is initially always "enabled"
   * even though the validation does not pass, so long as the values are
   * equal to the initial values.
   *
   * Therefore, we will change a field and leave most empty to
   * pass the test.
   */
  it("doesn't allow submission with missing required values", async () => {
    const submitHandler = jest.fn()

    const form = mount(
      <SupportForm initialValues={initialValues} onSubmit={submitHandler} />,
    )

    const name = form.find('input[name="name"]').first()
    await updateFormikField(name, "name", "Ivan Vidusenko")

    const debug = form.find("pre").first()
    expect(debug.text()).toContain("form.validation.required")

    const submit = form.find('button[type="submit"]').first()
    expect(submit.prop("disabled")).toBe(true)

    await submitFormikForm(form)

    expect(submitHandler).not.toHaveBeenCalled()
  })

  it("throws error after invalid version change", async () => {
    const form = mount(
      <SupportForm initialValues={initialValues} onSubmit={() => {}} />,
    )

    const version = form.find('input[name="version"]').first()

    await updateFormikField(version, "version", "1.100")

    const debug = form.find("pre").first()
    expect(debug.text()).toContain("form.validation.versionInvalid")
  })

  it("translates labels when switching language", async () => {
    const form = mount(
      <SupportForm initialValues={initialValues} onSubmit={jest.fn()} />,
    )

    let label = form
      .find('textarea[name="description"]')
      .parents(".ant-form-item")
      .find("label")
      .first()
    expect(label.text()).toBe("Beschreibung")

    await act(async () => {
      await i18next.changeLanguage("en")
    })

    expect(label.text()).toBe("Description")
  })
})
