import styles from "./header.module.css";

function Navbar({ links }) {
  return (
    <nav>
      <ul className={styles.list}>
        {/* <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li> */}

        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.url}>{link.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Navbar;
