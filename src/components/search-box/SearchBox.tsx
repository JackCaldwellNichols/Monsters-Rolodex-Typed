import { ChangeEvent } from "react";
import "./search-box.css";

type Props = {
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ onChangeHandler }: Props) => {
  return (
    <div className="search-box">
      <input
        type="search"
        placeholder="Search monsters"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
