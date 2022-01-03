import { Layout } from 'antd'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './theme/global.style'
import HeaderComponent from '../header/header.component'
import { theme } from './theme/style'

const Page = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Layout>
            <HeaderComponent/>
            {children}
            </Layout>
        </ThemeProvider>
    )
}

export default Page
