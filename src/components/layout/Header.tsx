import { Logo } from "@/assets/icons";

const Header = () => {
  return (
    <header className="text-blue-700 p-4">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        <h1 className="text-xl cursor-pointer font-bold flex justify-start gap-2 items-center">
          <Logo />
          Share Shop
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/about" className="hover:underline">
                Cart
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Favorite
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
