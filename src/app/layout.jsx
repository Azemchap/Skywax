import localFont from 'next/font/local'
import { Toaster } from 'react-hot-toast'
import App from '../components/App'
// import { StoreProvider } from '../redux/StoreProvider'
import './globals.css'


const inter = localFont({
  src: '../../public/font/inter.woff',
  display: 'swap',
})



export const metadata = {
  title: 'SKYWAX ',
  description: 'SKYWAX Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.png" sizes="84x84" />
      </head>
      <body>
        {/* <StoreProvider> */}
          <App>
            {children}
            <Toaster position='top-right' />
          </App>
        {/* </StoreProvider> */}
      </body>
    </html>
  )
}
