import getErrorCustomFormInputField from '@lib/utils/get-error-custom-form-input-field';
import getIsTouchedCustomFormInputField from '@lib/utils/get-is-touched-custom-form-input-field';
import { FieldProps, FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import { errorStyle, halfWidthInputStyle } from './field-styles';

interface OrganizationSpecialtySelectFieldProps {
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

const OrganizationSpecialtySelectField: React.FC<OrganizationSpecialtySelectFieldProps> = ({
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
                <option value="water">Water Engineering</option>
                <option value="food">Food Chemistry</option>
                <option value="animal">Animal Husbandry</option>
                <option value="corporate">Plant Midwifery</option>
            </select>
            {touched && error && <small className={errorStyle}>{error}</small>}
        </>
    );
};

export default OrganizationSpecialtySelectField;
