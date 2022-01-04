import styled from "styled-components";
import { Breakpoints } from "../../styles/constants";

export const AfterSignupContsiner = styled.div`
    margin: 40px;

    @media screen and (max-width: ${Breakpoints.lg }){
      margin: 0px;
    }
    
    .step-num{
      color: ${(props) => props.theme.colors.Gray6};
    }
    
    .btn-1{
      background-color: ${(props) => props.theme.customColors.lightBlue1} ;
      padding: 12px 24px;
      height: 48px;
      border-radius: 4px;
      @media screen and (max-width: ${Breakpoints.md}){
      padding: 7px 20px;
      font-size: 14px;
    }
    }

    .btn-2{
      background-color: ${(props) => props.theme.customColors.white} ;
      color: ${(props) => props.theme.colors.Gray2};
      padding: 12px 24px;
      height: 48px;
      border-radius: 4px;
    }
    .btn-3{
      color: ${(props) => props.theme.customColors.secondary};
      font-size: 16px;
      /* @media screen and (max-width: ${Breakpoints.md}){
      display: none;
    } */
    }

.steps-action {
  direction: ltr;
} 
`;

export const ProgressStepsContainer = styled.div`
background-color: ${(props) => props.theme.customColors.white};
padding: 40px;

.ant-steps-item-icon{
  display: none;
}

`