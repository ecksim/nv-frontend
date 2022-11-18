import Image from "next/image";
import Link from "next/link";
import React from "react";
import key from "weak-key";

type Props = { naviItems: naviItem[] };

interface naviItem {
  path: string;
  position: number;
  title: string;
  _createdAt: string; //or date?
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string; //or date?
}

export default function Navi({ naviItems }: Props) {
  const sortedNavi = naviItems.sort((a, b) => a.position - b.position);
  return (
    <header className="mainNavigation">
      <section className="logoRow">
        <Image
          alt="Wappen des NV Bodemännle"
          src={"/Wappen.png"}
          width={100}
          height={60}
        />
        <h1>Narrenverein Bodemännle</h1>
      </section>
      <ul className="mainNavigationList">
        {sortedNavi.map((item) => (
          <li key={key(item)}>
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
