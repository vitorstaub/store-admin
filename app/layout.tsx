import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ModalProvider } from '@/components/modal-provider'

import { Toaster } from 'sonner'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Admin Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Toaster
            duration={3000}
            closeButton
            richColors
            position="top-right"
            visibleToasts={3}
          />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
