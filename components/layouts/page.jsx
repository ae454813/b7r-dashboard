import { ConfigProvider, Layout } from 'antd'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './theme/global.style'
import HeaderComponent from '../header/header.component'
import { theme } from './theme/style'
import SubFooter from '../footer/footer.component'

const Page = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <ConfigProvider direction="rtl">
            <GlobalStyle/>
            <Layout>
            <HeaderComponent/>
            {children}
            <SubFooter/>
            </Layout>
            </ConfigProvider>
        </ThemeProvider>
    )
}

export default Page
