import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Box } from "@mui/material";
import Providers from './components/Providers';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Test",
  description: "next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
        <Header/>
        <Box
        sx={{
          width:"100%",
          height:"100%",
          display:"flex",
        }}>
          {children}
        </Box>
        </Providers>
      </body>
    </html>
  );
}
