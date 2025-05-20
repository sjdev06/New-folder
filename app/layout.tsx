import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Saket Jha | Creative Developer & UI/UX Designer",
  description:
    "Personal portfolio and resume of Saket Jha, showcasing skills, projects, and professional experience",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false} // Optional: use system theme or not
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

