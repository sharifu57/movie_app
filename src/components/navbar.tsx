import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { defaultColors } from "../utils/colors";

export default function Navbar() {
  const primaryColor = defaultColors.primaryColor;
  const secondaryColor = defaultColors.secondaryColor;
  const [isScrolled, setIsScrolled] = useState(false); 
  const navigate = useNavigate();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/release", label: "Release" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
  ];

  
  const handleSignInClick = () => {
    navigate("/signIn");
  };

  const handleScroll = () => {
    const offset = window.scrollY; 
    if (offset > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 transition-all duration-300 ${isScrolled? "bg-black": "bg-transparent"}`}
    >
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4 md:px-20">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Logo
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white border border-white focus:ring-6 focus:outline-none font-medium md:rounded-2xl text-sm px-5 py-2 text-center me-2 mb-2 dark:border-white dark:text-white-500"
            style={{ borderColor: secondaryColor, color: secondaryColor }}
            onClick={handleSignInClick}
          >
            Sign In
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-small p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {navLinks.map((link) => {
              return (
                <li key={link.label}>
                  <NavLink
                    to={link.href}
                    className={({ isActive, isPending }) =>
                      `block font-small py-2 px-3 md:p-0 text-white rounded md:bg-transparent ${
                        isActive ? "font-bold" : "text-gray-400"
                      } ${isPending ? "opacity-50" : ""}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
