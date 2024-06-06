
import { Toaster } from 'react-hot-toast'
import App from '../components/App'
import './global.css'



export const metadata = {
  title: 'SKYWAX ',
  description: 'SKYWAX Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <head>
        <link rel="icon" href="/favicon.png" sizes="84x84" />
      </head>
      <body>
        <App>
          {children}
          <Toaster position='top-right' />
        </App>
      </body>
    </html>
  )
}
