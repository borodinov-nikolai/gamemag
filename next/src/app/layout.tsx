import Header from '@/components/Header'
import { Roboto } from 'next/font/google'
import '../styles/global.scss'
import StyledComponentsRegistry from '@/libs/antDesign/AntdRegistry'
import theme from '@/libs/antDesign/themeConfig'
import {ConfigProvider} from 'antd'
import ReduxProvider from '@/store/reduxProvider'
import Footer from '@/components/Footer'
import Scripts from '@/components/Scripts'


const roboto = Roboto({
  subsets: ['cyrillic'],
  weight: '400',
  display: 'swap'
})




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={roboto.className} >
    <Scripts/>
      <body >
        <ConfigProvider theme={theme} >
        <StyledComponentsRegistry>
          <ReduxProvider>
        <div className="container">
        <Header/>
          {children}
        </div>  
          <Footer/>
         </ReduxProvider>
       
          </StyledComponentsRegistry>
        </ConfigProvider>
        
        </body>
    </html>
  )
}
