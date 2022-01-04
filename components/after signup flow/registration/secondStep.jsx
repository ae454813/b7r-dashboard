import { Col, Form, Row, Select, Typography } from "antd";
import React from "react";
import { AFTER_SIGNUP } from "../../../locales/ar/afterSignup";
import { RegistirationContainer } from "./registration.styles";

const { Text, Title } = Typography;

const SecondtStep = () => {
  return (
    <RegistirationContainer>
        <Row gutter={[0, 32]}>
          <Col  xs={24}>
            <Title className="main-title" level={4}>
              {AFTER_SIGNUP.introduceYourstore}
            </Title>
            <Text className="step-header">
              {AFTER_SIGNUP.secretInformation}
            </Text>
          </Col>
          <Col  xs={24}>
            <Form.Item
              label={
                <Text className="secondStep-header">
                  {AFTER_SIGNUP.doYouHaveExperience}
                </Text>
              }
            >
              <Select>
                <Select.Option value="yes">نعم</Select.Option>
                <Select.Option value="no">لا</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={
                <Text className="secondStep-header">
                  {AFTER_SIGNUP.whatDoYouWantSell}
                </Text>
              }
            >
              <Select>
                <Select.Option value="clothes">ملابس</Select.Option>
                <Select.Option value="cosmatics">مستحضرات تجميل</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              label={
                <Text className="secondStep-header">
                  {AFTER_SIGNUP.isYourStore}
                </Text>
              }
            >
              <Select>
                <Select.Option value="yes">نعم</Select.Option>
                <Select.Option value="no">لا</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

    </RegistirationContainer>
  );
};

export default SecondtStep;
