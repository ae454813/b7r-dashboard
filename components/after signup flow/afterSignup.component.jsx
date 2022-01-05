import { RightOutlined } from "@ant-design/icons/lib/icons";
import {
  Button,
  Col,
  Divider,
  Form,
  message,
  Row,
  Space,
  Typography,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useState } from "react";
import { AFTER_SIGNUP } from "../../locales/ar/afterSignup";
import { Row_Container } from "../../styles/parents.styles";
import {
  AfterSignupContsiner,
  ProgressStepsContainer,
} from "./afterSignup.styles";
import FirstStep from "./registration/firstStep";
import SecondtStep from "./registration/secondStep";

const { Title, Text } = Typography;




const AfterSignupComponent = () => {
  const [current, setCurrent] = useState(0);
const [form]=useForm()
const form2=useForm()
const steps = [
  {
    title: "الخطوة 02/01",
    content:  <FirstStep form={form}/>,
  },
  {
    title: "الخطوة 02/02",
    content: <SecondtStep form={form2[0]} />,
  },
];
  const next = () => {
    form.submit()
    console.log("🚀 ~ file: afterSignup.component.jsx ~ line 41 ~ next ~ form", form)
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <AfterSignupContsiner>
      <Row_Container>
      <Form onFinish={(vals)=>{
      console.log("🚀 ~ file: firstStep.jsx ~ line 15 ~ FirstStep ~ vals", vals)


      }} form={form} layout="vertical">
        <Row>
          <Col md={10}>
            <Typography style={{marginBottom: "15px"}}>
              <Title level={3} className="registraion-title">{AFTER_SIGNUP.continueBuildStore}</Title>
              <Text className="registration-description">{AFTER_SIGNUP.finishSomeDetails}</Text>
            </Typography>
          </Col>
          <Col md={14}>
          {current > 0 && (
                  <Button className="Mobile-btn-3" type="text" onClick={() => prev()}>
                    <Space size={8}>
                    <RightOutlined style={{fontSize: "7px"}} />
                    {AFTER_SIGNUP.backButton}
                    </Space> 
                  </Button>
                )}
            <ProgressStepsContainer>
              <Text className="step-num">{steps[current].title}</Text>
              <Row gutter={2}>
                <Col span={12}>
                  <Divider
                    style={{
                      minHeight: "5px",
                      margin: "7px 0px ",
                      backgroundColor: "#2CB87A",
                      borderRadius: "8px",
                    }}
                  />
                </Col>
                <Col span={12}>
                  <Divider
                    style={{
                      minHeight: "5px",
                      margin: "7px 0px ",
                      borderRadius: "8px",
                      backgroundColor: current == 1 ? "#2CB87A" : "#DBF0E7",
                    }}
                  />
                </Col>
              </Row>
              <div>{steps[current].content}</div>
              <Row justify="space-between" className="steps-action">
                <Col md={12} >
                <Space size={8}>
                {current < steps.length - 1 && (
                  <Button type="primary" className="btn-1" onClick={() => next()}>
                    {AFTER_SIGNUP.nextButton}
                  </Button>
                )}
               
                {current > 0 && (
                  <Button className="btn-2" onClick={() => prev()}>
                    {AFTER_SIGNUP.skip}
                  </Button>
                )}
                 {current === steps.length - 1 && (
                  <Button
                    type="primary"
                    className="btn-1"
                    onClick={() => {
                      next()
                      message.success("Processing complete!")}}
                  >
                    {AFTER_SIGNUP.finishGoDashboard}
                  </Button>
                )}
                </Space>
                </Col>
                <Col md={4} >
                {current > 0 && (
                  <Button className="btn-3" type="text" onClick={() => prev()}>
                    <Space size={8}>
                    <RightOutlined style={{fontSize: "7px"}} />
                    {AFTER_SIGNUP.backButton}
                    </Space> 
                  </Button>
                )}
                </Col>
              </Row>
            </ProgressStepsContainer>
          </Col>
        </Row>
        </Form>
      </Row_Container>
    </AfterSignupContsiner>
  );
};

export default AfterSignupComponent;
