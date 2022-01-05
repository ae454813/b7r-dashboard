import styled from "styled-components";
import { Breakpoints } from "../../styles/constants";

export const AfterSignupContsiner = styled.div`
    margin: 40px;

    @media screen and (max-width: ${Breakpoints.md }){
      margin: 0px;
    }
    
    .step-num{
      color: ${(props) => props.theme.colors.Gray6};
    }
    
    .registraion-title{
      font-size: 20px;
      color: #333333;
      font-weight: 700; 
      @media screen and (max-width: ${Breakpoints.sm}){
        font-size: 18px;
        margin-bottom: 0;
        margin-top: 8px;
        
      }
    }
    .registration-description{
      font-size: 18px;
      line-height: 34px;
      font-weight: 600;
      color: ${(props) => props.theme.colors.Gray2};
      @media screen and (max-width: ${Breakpoints.sm}){
        font-size: 14px;
        font-weight: 500;
      }
     
    }
    .Mobile-btn-3{
      display: none;
      color: ${(props) => props.theme.customColors.secondary};
      font-size: 16px;
      margin: 16px 0 16px ;
      padding: 0px;
      @media screen and (max-width: ${Breakpoints.sm}){
        display: inline-block;
      }
    }

.steps-action {
  direction: ltr;

  .btn-1{
      background-color: ${(props) => props.theme.customColors.lightBlue1} ;
      padding: 12px 24px;
      height: 48px;
      border-radius: 4px;
      @media screen and (max-width: ${Breakpoints.sm}){
      padding: 7px 20px;
      height: 36px;
      font-size: 14px;
    }
    @media screen and (max-width: ${Breakpoints.xs}){
      font-size: 12px
    }
    }

    .btn-2{
      background-color: ${(props) => props.theme.customColors.white} ;
      color: ${(props) => props.theme.colors.Gray2};
      padding: 12px 24px;
      height: 48px;
      border-radius: 4px;
      @media screen and (max-width: ${Breakpoints.sm}){
      padding: 7px 20px;
      height: 36px;
      font-size: 14px;
    }
    @media screen and (max-width: ${Breakpoints.xs}){
      font-size: 12px
    }
    }
    .btn-3{
      color: ${(props) => props.theme.customColors.secondary};
      font-size: 16px;
      @media screen and (max-width: ${Breakpoints.sm}){
        display: none;
      }
    }
} 
`;

export const ProgressStepsContainer = styled.div`
background-color: ${(props) => props.theme.customColors.white};
padding: 20px;
@media screen and (max-width: ${Breakpoints.sm}){
      padding: 14px 12px 24px 12px;
    } 

.ant-steps-item-icon{
  display: none;
}

`