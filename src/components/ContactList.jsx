import { useSelector } from "react-redux";
import Contact from "./Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name.toLowerCase());

  const filtered = contacts.filter((c) =>
    c.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={styles.list}>
      {filtered.map((c) => (
        <Contact key={c.id} {...c} />
      ))}
    </ul>
  );
};

export default ContactList;
