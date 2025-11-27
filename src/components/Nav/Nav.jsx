import { Logo, Search, Cart } from "../icons";
import styles from "./style.module.css";

const Nav = () => {
  const navItems = [
    { name: <Logo className={styles.nav__logo} />, href: "#" },
    { name: "Store", href: "#", type: "text" },
    { name: "Mac", href: "#", type: "text" },
    { name: "iPad", href: "#", type: "text" },
    { name: "iPhone", href: "#", type: "text" },
    { name: "Watch", href: "#", type: "text" },
    { name: "Vision", href: "#", type: "text" },
    { name: "AirPods", href: "#", type: "text" },
    { name: "TV & Home", href: "#", type: "text" },
    { name: "Enterteinment", href: "#", type: "text" },
    { name: "Accessories", href: "#", type: "text" },
    { name: "Support", href: "#", type: "text" },
    { name: <Search className={styles.nav__icon} />, href: "#" },
    { name: <Cart className={styles.nav__icon} />, href: "#" },
  ];

  return (
    <nav className={styles.nav}>
      <div className="container">
        <ul className={styles.nav__links}>
          {navItems.map((item, index) => (
            <li
              key={index}
              className={
                styles["nav__links-item"] +
                (item.type === "text"
                  ? ` ${styles["nav__links-item--text"]}`
                  : "")
              }
            >
              <a className={styles.nav__link} href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
