import Logo from "./Logo";
import Navigation from "./Navigation";
import UserSection from "./UserSection";

export default function Header() {
  return (
    <header
      className="header flex items-center justify-between md:h-[100px] h-[70px]
     border-b-grayishBlue/50 border-b-[1px] px-6 md:px-0"
    >
      <div className="flex items-center gap-16">
        <div className="flex items-center justify-center gap-4">
          <button className="md:hidden flex items-center justify-center mt-1">
            <img src="/icon-menu.svg" alt="menu" />
          </button>
          <Logo />
        </div>
        <Navigation />
      </div>
      <UserSection />
    </header>
  );
}
