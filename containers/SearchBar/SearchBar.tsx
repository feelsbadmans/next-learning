import React, { useCallback, useMemo, useState } from "react";
import { Form } from "react-final-form";
import cnBind, { Argument } from 'classnames/bind';
import Link from "next/link";
import { useRouter } from "next/router";

import SearchField from "../../components/SearchField/SearchField";

import styles from "../../styles/SearchBar.module.scss";

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

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
                <form onSubmit={handleSubmit} className={cx('search-bar')}>
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
