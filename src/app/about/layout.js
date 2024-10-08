export default function AboutLayout({ children }) {
    return (
      <div>
        <header>
          <h1>About Us Layout</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 My Next.js App</p>
        </footer>
      </div>
    );
  }
  