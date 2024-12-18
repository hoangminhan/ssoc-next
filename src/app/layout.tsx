import type { Metadata } from 'next'
import ButtonApp from '@components/ui/button'
import '../styles/globals.css'
import { robotoSans } from '@utils/fonts'

export const metadata: Metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={`${robotoSans.variable}  antialiased`}>
            <main className="font-roboto-sans">
               <ButtonApp />
               {children}
            </main>
         </body>
      </html>
   )
}
