import React, { useCallback, useMemo, useRef, useState } from "react";
import { Form } from "react-final-form";
import { cn } from "@bem-react/classname";
import Link from "next/link";

import SearchField from "../../components/SearchField/SearchField";

import style from "../../styles/SearchBar.module.scss";

const cnSearchBar = cn(style.searchBar);

const SearchBar = () => {
  const [city, setCity] = useState("");

  const url = useMemo(() => {
    if (city) {
      return `/${city}`;
    }
    return "";
  }, [city]);

  return (
    <Form onSubmit={() => undefined}>
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className={cnSearchBar()}>
          <SearchField onChangeCity={setCity} />
          {url !== "" ? (
            <Link href={url} passHref>
              Find
            </Link>
          ) : (
            <button type="submit">Find</button>
          )}
        </form>
      )}
    </Form>
  );
};

export default SearchBar;
