import React, { useCallback, useMemo, useState } from "react";
import { Form } from "react-final-form";
import { cn } from "@bem-react/classname";
import Link from "next/link";
import { useRouter } from "next/router";

import SearchField from "../../components/SearchField/SearchField";

import style from "../../styles/SearchBar.module.scss";

const cnSearchBar = cn(style.searchBar);

const SearchBar = () => {
    const router = useRouter();

    const [city, setCity] = useState("");

    const url = useMemo(() => {
        if (city) {
            return `/${city}`;
        }
        return "";
    }, [city]);

    const onEnterPress = useCallback(
        (button) => {
            if (button.key.toLowerCase() === "enter" && city !== "") {
                router.push(city);
            }
        },
        [city, router]
    );

    return (
        <Form onSubmit={() => undefined} validateOnBlur>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className={cnSearchBar()}>
                    <SearchField
                        onChangeCity={setCity}
                        onKeyPress={onEnterPress}
                    />
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
