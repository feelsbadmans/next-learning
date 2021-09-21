import React from "react";
import { Field, FormSpy } from "react-final-form";
import cnBind, { Argument } from 'classnames/bind';

import { ISearchFieldProps } from './types';

import styles from './SearchField.module.scss';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

const validate = (value: string) => (value ? undefined : 'error');

export const SearchField: React.FC<ISearchFieldProps> = ({ onChangeCity = () => undefined }) => {
    return (
        <>
            <Field name="city" validate={validate}>
                {({ input, meta }) => (
                    <input
                        placeholder="Type city name here"
                        className={cx('search-field', {
                            'not-valid': Boolean(meta.error) && meta.touched && !input.value,
                        })}
                        {...input}
                        type="text"
                        autoComplete="off"
                    />
                )}
            </Field>
            <FormSpy onChange={(data) => setTimeout(() => onChangeCity(data.values.city), 0)} />
        </>
    );
};
