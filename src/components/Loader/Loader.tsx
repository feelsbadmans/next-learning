import React from 'react';
import cnBind, { Argument } from 'classnames/bind';

import styles from "./Loader.module.scss";

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const Loader: React.FC = ({ children }) => {
    return <div className={cx('loader')}>{children}</div>;
};
