import React from "react"
import { Route, Switch, useHistory } from "react-router"

import { Layout } from "antd"

import SupportForm, { initialValues } from "./SupportForm"
import SupportFormResults from "./SupportFormResults"
import { SupportFormValues } from "./SupportForm"

const Content = () => {
  const [values, setValues] = React.useState<SupportFormValues>(initialValues)
  const history = useHistory()

  return (
    <Layout.Content>
      <Switch>
        <Route exact path="/results">
          <SupportFormResults values={values} />
        </Route>
        <Route>
          <SupportForm
            initialValues={initialValues}
            onSubmit={(v) => {
              setValues(v)
              history.push("/results")
            }}
          />
        </Route>
      </Switch>
    </Layout.Content>
  )
}

export default Content
