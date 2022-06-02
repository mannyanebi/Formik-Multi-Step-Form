import getErrorCustomFormInputField from '@lib/utils/get-error-custom-form-input-field';
import getIsTouchedCustomFormInputField from '@lib/utils/get-is-touched-custom-form-input-field';
import { FieldProps, FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import { errorStyle, halfWidthInputStyle } from './field-styles';

interface StateSelectFieldProps {
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

const StateSelectField: React.FC<StateSelectFieldProps> = ({ field, form, ...props }) => {
    const error = getErrorCustomFormInputField(form?.errors, field);
    const touched = getIsTouchedCustomFormInputField(form?.touched, field);
    return (
        <>
            <select autoComplete="state" className={halfWidthInputStyle} {...field} {...props}>
                <option value="" defaultValue="">
                    ---------
                </option>
                <option value="Abia">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno</option>
                <option value="Cross River">Cross River</option>
            </select>
            {touched && error && <small className={errorStyle}>{error}</small>}
        </>
    );
};

export default StateSelectField;
