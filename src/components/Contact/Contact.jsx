import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contact}>
      <span className={css.name}>{contact.name}</span>
      <span className={css.number}>{contact.number}</span>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
