export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <header>
            <nav>
              <a href="/">Home</a> | <a href="/about">About</a>
            </nav>
          </header>
          {children}
        </body>
      </html>
    );
  }
  