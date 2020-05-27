import React from "react"

import { Link, Redirect } from "react-router-dom"
import { useTranslation } from "react-i18next"

import { SupportFormValues } from "./SupportForm"

import { Button, Table, Typography } from "antd" // Ant Design styling
const { Title, Paragraph } = Typography // Ant Design styling

interface SupportFormResultsProps {
  values: SupportFormValues
}

const SupportFormResults = (props: SupportFormResultsProps) => {
  const { t } = useTranslation()

  // If values invalid, return to form.
  if (!props.values || Object.keys(props.values).length === 0) {
    return <Redirect to="/" />
  }

  // Prepare values for output.
  const values = props.values

  if (props.values.topic !== "error") {
    delete values.version
  }
  if (props.values.topic !== "call") {
    delete values.phone
  }

  // At this point, we are confident that all values and all value keys are strings.
  // Let's avoid iteration TypeScript errors with the following.
  const usableValues = (values as unknown) as { [k: string]: string }

  // Conversions for Ant Design table element.
  const dataSource = Object.keys(values).map((key) => {
    return {
      key: t(`form.labels.${key}`),
      value:
        key === "topic"
          ? t(`form.values.${usableValues[key]}`)
          : usableValues[key],
    }
  })
  const columns = [
    {
      title: t("results.key"),
      dataIndex: "key",
      key: "key",
    },
    {
      title: t("results.value"),
      dataIndex: "value",
      key: "value",
    },
  ]

  return (
    <div className="component">
      <Typography>
        <Title>{t("results.title")}</Title>
        <Paragraph>{t("results.thankYou")}</Paragraph>
        <Title level={3}>{t("results.submission")}</Title>
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </Typography>
      <Button type="primary" style={{ marginTop: 24 }}>
        <Link to="/">{t("results.return")}</Link>
      </Button>
    </div>
  )
}

export default SupportFormResults
