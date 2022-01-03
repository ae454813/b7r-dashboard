import { Button, Col, message, Row, Steps, Typography } from "antd";
import React,{ useState } from "react";
import { AFTER_SIGNUP } from "../../locales/ar/afterSignup";
import { Row_Container } from "../../styles/parents.styles";
import { AfterSignupContsiner, ProgressStepsContainer } from "./afterSignup.styles";

const { Title, Text } = Typography;
const { Step } = Steps;

const steps = [
  {
    title: "",
    content: "First-content",
  },
  {
    title: "",
    content: "Second-content",
  },
];

const AfterSignupComponent = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <AfterSignupContsiner>
      <Row_Container>
        <Row>
          <Col span={8}>
            <Typography>
              <Title level={3}>{AFTER_SIGNUP.continueBuildStore}</Title>
              <Text>{AFTER_SIGNUP.finishSomeDetails}</Text>
            </Typography>
          </Col>
          <Col span={16}>
              <ProgressStepsContainer>
            <Steps current={current} progressDot type="navigation">
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
              {current < steps.length - 1 && (
                <Button type="primary" onClick={() => next()}>
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success("Processing complete!")}
                >
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
                  Previous
                </Button>
              )}
            </div>
            </ProgressStepsContainer>
          </Col>
        </Row>
      </Row_Container>
    </AfterSignupContsiner>
  );
};

export default AfterSignupComponent;
