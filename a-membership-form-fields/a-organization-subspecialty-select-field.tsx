import getErrorCustomFormInputField from '@lib/utils/get-error-custom-form-input-field';
import getIsTouchedCustomFormInputField from '@lib/utils/get-is-touched-custom-form-input-field';
import { FieldProps, FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import { errorStyle, halfWidthInputStyle } from './field-styles';

interface OrganizationSubSpecialtySelectFieldProps {
    name: string;
    placeholder?: string;
    form: FieldProps['form'];
    field: FieldProps['field'];
    errors?: FormikErrors<{
        [field: string]: any;
    }>;
    touched?: FormikTouched<{
        [field: string]: any;
    }>;
    autofocus?: boolean;
    disabled?: boolean;
}

const OrganizationSubSpecialtySelectField: React.FC<OrganizationSubSpecialtySelectFieldProps> = ({
    field,
    form,
    ...props
}) => {
    const error = getErrorCustomFormInputField(form?.errors, field);
    const touched = getIsTouchedCustomFormInputField(form?.touched, field);
    return (
        <>
            <select className={halfWidthInputStyle} {...field} {...props}>
                <option value="-------" defaultChecked>
                    --------
                </option>
                <option value="crop">Crop Theft</option>
                <option value="meat">Meat Sports</option>
                <option value="fruit">Fruit Battle</option>
                <option value="icecream">Icecream Warfare</option>
            </select>
            {touched && error && <small className={errorStyle}>{error}</small>}
        </>
    );
};

export default OrganizationSubSpecialtySelectField;
