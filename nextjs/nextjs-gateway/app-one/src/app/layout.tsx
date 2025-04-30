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
          <h1>AppOne Header</h1>
        </header>
        <main>
          {children}
        </main>
        <footer>
          <div>
            AppOne Footer
          </div>
        </footer>
      </body>
    </html>
  );
}
