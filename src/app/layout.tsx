import "./globals.css";
import Provider from "./ui/Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-screen" lang="en">
      <body className="h-screen">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
