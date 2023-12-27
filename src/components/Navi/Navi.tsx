import React from "react";
import key from "weak-key";
import { useRouter } from "next/router";

// components
import Image from "next/image";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

// utils
import breakpoint from "../../utils/breakpoint";

type Props = { naviItems: naviItem[] };

export default function Navi({ naviItems }: Props) {
  const [scrolled, setScrolled] = React.useState(false);
  const sortedNavi = naviItems.sort((a, b) => a.position - b.position);
  const currentBreakpoint = breakpoint();
  const router = useRouter();

  React.useEffect(() => {
    const wholeClubImg = document.getElementById("wholeClubId");
    const width = wholeClubImg?.getBoundingClientRect().width;
    if (wholeClubImg && scrolled) {
      setTimeout(
        () => (
          (wholeClubImg.style.top = "-60px"),
          (wholeClubImg.style.transition = "top 1s")
        )
      );
    }
  }, [scrolled]);

  const navigationItems = (
    <ul className="mainNavigationList">
      {sortedNavi.map((item) => {
        let style = {};

        if (router.asPath === item.path) {
          style = {
            boxShadow: "0px 0px 30px white",
            border: "2px solid white",
            backgroundColor: "#00f9ff",
          };
        }
        return (
          <li key={key(item)}>
            <Link href={item.path} style={style}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    setScrolled(true);
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <header className="mainNavigation">
      {currentBreakpoint === "isMobile" && (
        <HamburgerMenu navItems={sortedNavi} />
      )}
      <section className="logoRow">
        <Link href={"/"}>
          <Image
            alt="Wappen des NV Bodemännle"
            src={"/wappen.png"}
            width={100}
            height={60}
          />
        </Link>
        <h1>Narrenverein Bodemännle</h1>
      </section>
      {currentBreakpoint !== "isMobile" && navigationItems}
      <img
        alt="Gruppenbild der Bodemännle"
        src="/gruppenbild-mit-fell.png"
        className="wholeClub"
        id="wholeClubId"
      />
    </header>
  );
}
