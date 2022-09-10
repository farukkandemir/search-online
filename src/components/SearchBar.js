import React, {useEffect, useState} from "react";
import {useDebounce} from "use-debounce";
import {NavLink} from "react-router-dom";
import {useResultContext} from "../context/ResultContextProvider";

function SearchBar() {
  const {setCategory, setSearchTerm} = useResultContext();
  const [text, setText] = useState("Ataturk");
  const [debouncedValue] = useDebounce(text, 1000);

  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);

  const links = [
    {url: "/search", text: "🔍 All"},
    {url: "/news", text: "📰 News"},
    {url: "/image", text: "📸 Images"},
    {url: "/video", text: "📽️ Videos"},
  ];

  return (
    <nav>
      <form>
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <div className="nav-links">
        {links.map((link, index) => (
          <NavLink key={index} to={link.url} onClick={(e) => setCategory(e.target.pathname)}>
            {link.text}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default SearchBar;
