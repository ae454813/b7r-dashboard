import { GlobalOutlined } from '@ant-design/icons/lib/icons'
import { Col, Image, Row, Space, Typography } from 'antd'
import React from 'react'
import { Row_Container } from '../../styles/parents.styles'
import { HeaderContainer } from './header.styles'

const { Text } = Typography

const HeaderComponent = () => {
    return (
        <HeaderContainer>
            <Row_Container>
            <Row justify='space-between' >
                <Col>
                <Image preview={false} src='/static/Group 7016.svg'/>
                </Col>
                <Col>
                <Space size={5} direction='horizontal'>
                <Text>EN</Text>
                <GlobalOutlined />
                {/* <Image preview={false} src='/static/grommet-icons_language.svg'/> */}
                </Space>
                </Col>
            </Row>
            </Row_Container>
            
        </HeaderContainer>
    )
}

export default HeaderComponent
