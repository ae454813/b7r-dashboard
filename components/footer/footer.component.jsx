import { Col, Divider, Row, Space, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { Row_Container } from '../../styles/parents.styles';

const {Title, Text} = Typography;

const SubFooter = () => {
    return (
        <SubFooterContainer>
            <Row_Container>
                <Divider style={{margin: "0 0 20px 0"}}/>
            <Row justify='space-between'>
                <Col>
                <Space>
                <Text>الشروط والأحكام</Text>
                <Text>سياسة الخصوصية</Text>
                </Space>
                </Col>
                <Col><Text>© 2021 B7R</Text></Col>
            </Row>
            </Row_Container>
        </SubFooterContainer>
    )
}

export default SubFooter

const SubFooterContainer = styled.footer`
    min-height: 49px;
`
