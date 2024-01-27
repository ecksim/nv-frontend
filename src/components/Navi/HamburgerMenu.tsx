import { useState, useRef, useEffect } from "react";
import key from "weak-key";
import { CSSTransition } from "react-transition-group";

// components
import Link from "next/link";
import { useRouter } from "next/router";

type Props = { navItems: naviItem[] };

export default function HamburgerMenu({ navItems }: Props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [showCircle, setShowCircle] = useState(false);
  const nodeRef = useRef(null);
  const router = useRouter();

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setShowCircle(true);
    } else {
      setShowCircle(false);
    }
  });

  return (
    <>
      <span
        className={
          showCircle ? "hamburgerCircleVisible" : "hamburgerCircleHidden"
        }
      ></span>
      <span
        className={`hamburger${menuIsOpen ? " menuIsOpen" : ""}`}
        style={
          showCircle || menuIsOpen
            ? { position: "fixed" }
            : { position: "absolute" }
        }
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <div className="hamburgerBar"></div>
        <div className="hamburgerBar"></div>
        <div className="hamburgerBar"></div>
      </span>
      <CSSTransition
        nodeRef={nodeRef}
        in={menuIsOpen}
        timeout={500}
        classNames="menuAnimation"
        unmountOnExit
      >
        <div className="overlay" ref={nodeRef}>
          <ul className="mobileNav">
            {navItems.map((item) => {
              let className;
              if (router.asPath === item.path) {
                className = "mobileNavItem active";
              } else {
                className = "mobileNavItem";
              }
              return (
                <>
                  <Link
                    href={item.path}
                    key={key(item)}
                    className={className}
                    onClick={() => setMenuIsOpen(false)}
                  >
                    <li>
                      <label htmlFor="hamburger" className="mobileNavItemLabel">
                        {item.title}
                      </label>
                    </li>
                  </Link>
                </>
              );
            })}
          </ul>
        </div>
      </CSSTransition>
    </>
  );
}
