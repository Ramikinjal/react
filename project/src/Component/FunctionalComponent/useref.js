import React from "react";
import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
    return (
        <label>
            {props.label}
            <input ref={ref} />
        </label>
    );
});
const MyInput = forwardRef(function MyInput(props, ref) {
    const { label, ...otherProps } = props;
    return (
        <label>
            {label}
            <input {...otherProps} ref={ref} />
        </label>
    );
});