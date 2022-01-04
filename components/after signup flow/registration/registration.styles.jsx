import styled from "styled-components";
import { Breakpoints } from "../../../styles/constants";

export const RegistirationContainer = styled.div`
    margin: 42px 15px 33px;
     @media screen and (max-width: ${Breakpoints.sm}){
      margin: 0;
    } 
    color: ${(props) => props.theme.colors.Gray2};

    .main-title{
        color: ${(props) => props.theme.colors.Gray2};
        margin-top: 9px;
        @media screen and (max-width: ${Breakpoints.sm}){
            font-size: 16px;
            color: #333333;
        }
    }

    .step-title{
        color: ${(props) => props.theme.colors.Gray2};
        margin-top: 9px;
        @media screen and (max-width: ${Breakpoints.sm}){
            font-size: 14px;
        }
    }
    .step-header{
        color: ${(props) => props.theme.colors.Gray1};
        @media screen and (max-width: ${Breakpoints.sm}){
            font-size: 12px;
        }
    }
    .secondStep-header{
        color: ${(props) => props.theme.colors.Gray2};
        font-size: 18px;
        @media screen and (max-width: ${Breakpoints.sm}){
            font-size: 14px;
        }
    }
    h4{
        margin-bottom: 5px;
        font-weight: 700;
        color: ${(props) => props.theme.colors.Gray2};
    }
    .ant-form-vertical .ant-form-item-label{
        text-align: right;
    }
    .rc-virtual-list-holder-inner{
        text-align: right;
        
    }
` 