import React from "react"
import { Route, Switch } from "react-router"
import SupportForm from "./SupportForm"
import SupportFormResults from "./SupportFormResults"
import SupportFormValues from "./SupportFormValues"
import history from "./history"

// The current version of the software we're supporting. Serves as placeholder.
const softwareVersion = "1.10.0"

const initialValues = {
  name: "",
  email: "",
  topic: "error",
  version: softwareVersion,
  phone: "",
  description: "",
}
const SupportFormContainer = () => {
  const [values, setValues] = React.useState<SupportFormValues>(initialValues)
  return (
    <Switch>
      <Route path="/form-challenge/results">
        <SupportFormResults values={values} />
      </Route>
      <Route>
        <SupportForm
          initialValues={initialValues}
          onSubmit={(v) => {
            setValues(v)
            history.push("/form-challenge/results")
          }}
        />
      </Route>
    </Switch>
  )
}

export default SupportFormContainer
