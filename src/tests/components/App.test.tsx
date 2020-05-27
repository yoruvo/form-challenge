import * as React from "react"
import App from "../../components/App"
import { mount } from "enzyme"
import "../../lib/i18next"
import { act } from "@testing-library/react"

describe("App", () => {
  it("triggers language switch when clicking a language switch button", async () => {
    const app = mount(<App />)

    let menuItem = app
      .find(".ant-menu-item")
      .findWhere((element) => {
        return element.contains("Englisch")
      })
      .first()

    await act(async () => {
      menuItem.simulate("click")
    })

    expect(menuItem.text()).toBe("English")
  })
})
