import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="flex justify-center md:justify-start">
        <img
          src={logo}
          alt="Custom Spine Orthotics logo"
          className="h-8 w-auto"
        />
      </div>
    </header>
  );
};

export default Header;
