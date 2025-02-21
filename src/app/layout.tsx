"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="flex justify-center w-full pt-10">
            <SignedOut>
              <div className="flex gap-4">
                <SignInButton />

                <SignUpButton />
              </div>
            </SignedOut>

            <SignedIn>
              <div className="flex flex-col gap-4">
                {children}
                <SignOutButton>Leave</SignOutButton>
              </div>
            </SignedIn>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
