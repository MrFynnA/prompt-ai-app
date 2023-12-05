import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'promtos',
    description: 'Discover and share AI prompts',
}

export default function RootLayout({ children }) {
    return ( 
    <html lang = "en">
      <body className='bg-gray-300'>
        <Provider>
        <div className='main'>
        <div className='gradient'></div>
        </div>
        <main className='app'>
            <Nav/>
             {children}
        </main>
        </Provider>
      </body> 
    </html>
    )
}