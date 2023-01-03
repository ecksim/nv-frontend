import * as React from "react";
import key from "weak-key";
import { CSSTransition } from "react-transition-group";

// components
import Link from "next/link";

type Props = { navItems: naviItem[] };

export default function HamburgerMenu({ navItems }: Props) {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);
  const nodeRef = React.useRef(null);

  return (
    <>
      <span
        className={`hamburger${menuIsOpen ? " menuIsOpen" : ""}`}
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
              return (
                <>
                  <Link
                    href={item.path}
                    key={key(item)}
                    className="mobileNavItem"
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
