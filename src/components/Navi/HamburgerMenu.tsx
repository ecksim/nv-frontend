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
                  <li
                    className="mobileNavItem"
                    onClick={() => setMenuIsOpen(false)}
                    key={key(item)}
                  >
                    <label htmlFor="hamburger" className="mobileNavItemLabel">
                      <Link href={item.path}>{item.title}</Link>
                    </label>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </CSSTransition>
    </>
  );
}
