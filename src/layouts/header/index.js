import Logo from "./logo";
import Locale from "./locale";
import Menu from "./menu";
import Search from "./search";

export default function Header() {
  return (
    <header>
      <div id="header">
        <div className="header">
          <Logo />
          <Locale />
        </div>
        <div className="header">
          <Menu />
          <Search />
        </div>
      </div>
    </header>
  );
}
