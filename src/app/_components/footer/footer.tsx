export default function Footer() {
  return (
    <footer className="site-footer section-wrap">
      <p>© {new Date().getFullYear()} Raimov Xushnudbek</p>
      <div>
        <a href="https://github.com/xushnud123" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/xushnudbek-raimov-a876a9228/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
