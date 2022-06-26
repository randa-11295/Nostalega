import classes from "./searchInputTablet.module.css";

const SearchInputTablet = () => {
  return (
    <div>
      <input className={classes.input} type="text" placeholder="بحث ..." />
    </div>
  );
};

export default SearchInputTablet;
