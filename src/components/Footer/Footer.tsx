import Link from "next/link";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="footer">
      <div className="footerLinks">
        <Link href={"/datenschutz"}>Datenschutz | </Link>
        <Link href={"/impressum"}>Impressum </Link>
      </div>
    </footer>
  );
}
