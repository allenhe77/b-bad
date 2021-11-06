import { useState } from "react";

function Search({ getQuery }) {
  const [text, setText] = useState("");
  function onChange(query) {
    setText(query);
    getQuery(query);
  }
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search for a Character"
          autoFocus
          onChange={(e) => onChange(e.target.value)}
          value={text}
        />
      </form>
    </section>
  );
}

export default Search;
