import React from "react";
import { Field, FormSpy } from "react-final-form";
import { cn } from "@bem-react/classname";

import style from "../../styles/SearchField.module.scss";

const cnSearchField = cn(style.searchField);
const cnNotValid = cn(style.notValid);

const validate = (value) => (value ? undefined : "error");

const SearchField = ({ onChangeCity }) => {
  return (
    <>
      <Field name="city" validate={validate}>
        {({ input, meta }) => (
          <input
            placeholder="Type city name here"
            className={
              cnSearchField() +
              `${Boolean(meta.error) && meta.touched ? ` ${cnNotValid()}` : ""}`
            }
            type="text"
            {...input}
            autoComplete="off"
          />
        )}
      </Field>
      <FormSpy
        onChange={(data) => setTimeout(() => onChangeCity(data.values.city), 0)}
      />
    </>
  );
};

export default SearchField;
