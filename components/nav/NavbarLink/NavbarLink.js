import React from "react";
import Link from "next/link";
import styles from "./NavbarLink.module.scss";

const NavbarLink = ({ href, title, style }) => {
  return (
    <Link href={href}>
      <a className={styles.Link} style={{ ...style }}>
        {title}
      </a>
    </Link>
  );
};

export default NavbarLink;
