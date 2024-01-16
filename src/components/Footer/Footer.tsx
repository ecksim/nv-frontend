import Link from "next/link";
import React from "react";

type FooterProps = {};

export default function Footer({}: FooterProps) {
  return (
    <footer className="footer">
      <div className="footerSocial">
        <a
          href="https://www.instagram.com/hattenweiler_bodemaennle"
          target="_blank"
        >
          <img
            src="Instagram_Glyph_White.png"
            alt="Instagram Logo"
            className="socialIcon"
          />
        </a>
        <a href="https://www.facebook.com/nv.bodemaennle" target="_blank">
          <img
            src="facebook-icon.webp"
            alt="Facebook Logo"
            className="socialIcon"
          />
        </a>
        <a href="mailto:nv-bodemaennle@web.de">
          <img src="mail-icon.png" alt="Mail icon" className="socialIcon" />
        </a>
      </div>
      <div className="footerLinks">
        <Link href={"/datenschutz"}>Datenschutz | </Link>
        <Link href={"/impressum"}>Impressum </Link>
      </div>
    </footer>
  );
}
