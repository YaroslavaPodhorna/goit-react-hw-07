import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import contactsSlice from "../../redux/contactsSlice";
import { fetchContacts } from "../../redux/contactsOps";
import {
  selectLoading,
  selectError,
  selectFilteredContacts,
} from "../../redux/contactsSlice";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import css from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}

      <SearchBox />
      <ContactList />
      {/* {contacts.length > 0 && <ContactList />} */}
    </div>
  );
}
