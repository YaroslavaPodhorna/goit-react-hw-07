import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={css.contact}>
      <span className={css.name}>{contact.name}</span>
      <span className={css.number}>{contact.number}</span>
      <button className={css.button} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
