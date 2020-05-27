import { configure } from "enzyme"
import React from "react"
import EnzymeAdapter from "enzyme-adapter-react-16"

configure({ adapter: new EnzymeAdapter() })
React.useLayoutEffect = React.useEffect

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
