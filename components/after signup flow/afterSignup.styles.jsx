import styled from "styled-components";

export const AfterSignupContsiner = styled.div`
    margin: 40px;
    direction: rtl;

    .steps-content {
  min-height: 200px;
  margin-top: 16px;
  padding-top: 80px;
  text-align: center;
  background-color: #fafafa;
  border: 1px dashed #e9e9e9;
  border-radius: 2px;
}

.steps-action {
  margin-top: 24px;
}
`;

export const ProgressStepsContainer = styled.div`
background-color: ${(props) => props.theme.customColors.white};

`