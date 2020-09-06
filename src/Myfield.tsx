import { Button, TextField } from '@material-ui/core';
import { FieldProps } from 'formik';
import * as React from 'react';

interface Props extends FieldProps { placeholder: string, lable: string}

const MyField: React.FC<Props> = ({placeholder, field, label}) => {
    return (
        <TextField
            placeholder={placeholder}
            {...field}
            label={label}
        />
    )

}

export default MyField