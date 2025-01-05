import Logo from "./Logo";
import Navigation from "./Navigation";
import UserSection from "./UserSection";

export default function Header() {
  return (
    <header className="header flex items-center justify-between h-[100px] border-b-grayishBlue/50 border-b-[1px]">
      <div className="flex items-center gap-16">
        <Logo />
        <Navigation />
      </div>
      <UserSection />
    </header>
  );
}
