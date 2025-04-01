import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleSubmit = (e) => {
    const filterAction = changeFilter(e.target.value);
    dispatch(filterAction);
  };

  return (
    <div className={css.searchBox}>
      <label>Find contacts by name</label>
      <input type="text" value={filter} onChange={handleSubmit} />
    </div>
  );
}
