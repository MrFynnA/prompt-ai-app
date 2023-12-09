import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import GotoTop from '@components/GotoTop'
import Footer from '@components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'promtos',
    description: 'Discover and share AI prompts',
}

export default function RootLayout({ children }) {
    return ( 
    <html lang = "en">
      <body className={`!from-gray-200 !bg-neutral-400 !via-neutral-400 lg:pb-20`}>
        <Provider>
        <div className='main'>
        <div className='gradient'></div>
        </div>
        <main className='app'>
            <Nav/>
             {children}
        </main>
        <Footer/>
        </Provider>
        <GotoTop/>
      </body> 
    </html>
    )
}