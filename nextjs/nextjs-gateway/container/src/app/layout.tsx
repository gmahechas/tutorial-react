import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>Container Header</h1>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <div>
            Container Footer
          </div>
        </footer>
      </body>
    </html>
  );
}
