import React, { useCallback, useState } from 'react';
import { Form } from 'react-final-form';
import cnBind, { Argument } from 'classnames/bind';
import { useRouter } from 'next/router';

import { SearchField } from 'components/SearchField';

import styles from './SearchBar.module.scss';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const SearchBar: React.FC = () => {
    const router = useRouter();

    const [city, setCity] = useState('');

    const onFindClick = useCallback(() => {
        if (city) {
            void router.push(city);
        }
    }, [city, router]);

    return (
        <Form onSubmit={onFindClick} validateOnBlur>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className={cx('search-bar')}>
                    <SearchField onChangeCity={setCity} />
                    <button type="submit" onClick={onFindClick} className={cx('search-bar__button')}>
                        Find
                    </button>
                </form>
            )}
        </Form>
    );
};
