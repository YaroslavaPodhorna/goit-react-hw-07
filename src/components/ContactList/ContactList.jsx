import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsSlice";

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name) || "";

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.iteam}>
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={() => dispatch(deleteContact(contact.id))}
          />
        </li>
      ))}
    </ul>
  );
}
