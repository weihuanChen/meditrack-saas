// import "./globals.css";
export default function Header() {
  return (
    <header className="bg-theme-bg-color">
      <nav className="flex items-center justify-between px-4 py-2">
        <div className="text-theme-text-default font-bold text-lg">Meditrack</div>
        <ul className="flex items-center">
          <li className="mx-3">
            <a href="#" className="text-theme-text-default font-mono">
              在线试用
            </a>
          </li>
          <li className="mx-3">
            <a href="#" className="text-theme-text-default font-mono">
              关于我们
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
