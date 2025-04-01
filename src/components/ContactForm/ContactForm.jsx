import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Format: 123-45-67")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const handleSubmit = (values, form) => {
    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
      )
    ) {
      alert(`${values.name} is already in contacts!`);
      return;
    }

    dispatch(
      addContact({ id: nanoid(), name: values.name, number: values.number })
    );
    form.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label>
          Name:
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className={css.error} />
        </label>
        <label>
          Number:
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="div" className={css.error} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
