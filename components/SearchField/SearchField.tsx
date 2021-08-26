import React from "react";
import { Field, FormSpy } from "react-final-form";
import cnBind, { Argument } from 'classnames/bind';

import styles from "../../styles/SearchField.module.scss";

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

interface ISearchFieldProps {
    onChangeCity: (value: string) => void;
    onKeyPress: (value: React.KeyboardEvent) => void;
}

const validate = (value: string) => (value ? undefined : "error");

const SearchField: React.FC<ISearchFieldProps> = ({ onChangeCity = () => undefined, onKeyPress }) => {
    return (
        <>
            <Field name="city" validate={validate}>
                {({ input, meta }) => (
                    <input
                        placeholder="Type city name here"
                        className={cx('search-field', {'not-valid': Boolean(meta.error) && meta.touched && !input.value })}
                        {...input}
                        type="text"
                        autoComplete="off"
                        onKeyPress={onKeyPress}
                    />
                )}
            </Field>
            <FormSpy onChange={(data) => setTimeout(() => onChangeCity(data.values.city), 0)} />
        </>
    );
};

export default SearchField;
