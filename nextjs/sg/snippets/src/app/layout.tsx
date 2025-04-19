import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="container mx-auto px-12">
          {children}
        </div>
      </body>
    </html>
  );
}
