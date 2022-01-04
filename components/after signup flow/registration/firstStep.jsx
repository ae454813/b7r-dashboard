import { Col, Form, Input, Row, Select, Space, Typography } from "antd";
import React from "react";
import { AFTER_SIGNUP } from "../../../locales/ar/afterSignup";
import { RegistirationContainer } from "./registration.styles";

const { Text, Title } = Typography;

const FirstStep = ({form}) => {
  return (
    <RegistirationContainer>
 
        <Title
          level={4}
          style={{ marginBottom: "12px" }}
          className="main-title"
        >
          {AFTER_SIGNUP.startBuildStore}{" "}
        </Title>
        <Title level={5} className="step-title">
          {AFTER_SIGNUP.WhatNameYourStore}
        </Title>
        <Form.Item
          label={
            <Text className="step-header">
              {AFTER_SIGNUP.WriteStoreNameShowen}
            </Text>
          }
          name="size"
        >
          <Space direction="vertical" size={12} style={{ width: "100%" }}>
            <Input />
            <Text className="step-header">
              {AFTER_SIGNUP.yourStoreURL}
              <br />
              <a href="URL">URL</a>
            </Text>
            <Title level={5} className="step-title">
              {AFTER_SIGNUP.whatYourCountryAndCurrency}
            </Title>
          </Space>
        </Form.Item>

        <Form.Item
          label={<Text className="step-header">{AFTER_SIGNUP.country}</Text>}
        >
          <Select>
            <Select.Option value="egypt">مصر</Select.Option>
            <Select.Option value="sudia">السعودية</Select.Option>
          </Select>
        </Form.Item>
        <Row gutter={[12, 20]}>
          <Col sm={12} xs={24} >
            <Form.Item
              label={
                <Text className="step-header">{AFTER_SIGNUP.storeLang}</Text>
              }
            >
              <Select allowClear mode="multiple" defaultValue={"عربى"}>
                <Select.Option value="arabic">عربى</Select.Option>
                <Select.Option value="english">انجليزى</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={12} xs={24}>
            <Form.Item
              label={
                <Text className="step-header">{AFTER_SIGNUP.defaultLang}</Text>
              }
            >
              <Select>
                <Select.Option value="arabic">عربى</Select.Option>
                <Select.Option value="english">انجليزى</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={12} xs={24}>
            <Form.Item
              label={
                <Text className="step-header">
                  {AFTER_SIGNUP.storeCurrency}
                </Text>
              }
            >
              <Select allowClear mode="multiple" defaultValue={"ريال"}>
                <Select.Option value="real">ريال</Select.Option>
                <Select.Option value="pound">جنيه</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col sm={12} xs={24}>
            <Form.Item
              label={
                <Text className="step-header">
                  {AFTER_SIGNUP.defaultCurrency}
                </Text>
              }
            >
              <Select>
                <Select.Option value="real">ريال</Select.Option>
                <Select.Option value="pound">جنيه</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
    </RegistirationContainer>
  );
};

export default FirstStep;
