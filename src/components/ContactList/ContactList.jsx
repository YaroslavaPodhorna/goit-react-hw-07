import Contact from "../Contact/Contact";
import { useSelector, useDispatch } from "react-redux";
import css from "./ContactList.module.css";
import { deleteContact } from "../../redux/contactsOps";

import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
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
