import React from "react";
import key from "weak-key";

// components
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

// utils
import breakpoint from "./../../utils/breakpoint";

type Props = { naviItems: naviItem[] };

export default function Navi({ naviItems }: Props) {
  const sortedNavi = naviItems.sort((a, b) => a.position - b.position);
  const currentBreakpoint = breakpoint();
  const navigationItems = (
    <ul className="mainNavigationList">
      {sortedNavi.map((item) => (
        <li key={key(item)}>
          <Link href={item.path}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
  return (
    <header className="mainNavigation">
      {currentBreakpoint === "isMobile" && (
        <HamburgerMenu navItems={sortedNavi} />
      )}
      <section className="logoRow">
        <Image
          alt="Wappen des NV Bodemännle"
          src={"/Wappen.png"}
          width={100}
          height={60}
        />
        <h1>Narrenverein Bodemännle</h1>
      </section>
      {currentBreakpoint !== "isMobile" && navigationItems}
    </header>
  );
}
