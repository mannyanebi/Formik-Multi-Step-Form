/* eslint-disable jsx-a11y/label-has-associated-control */
import getErrorCustomFormInputField from '@lib/utils/get-error-custom-form-input-field';
import getIsTouchedCustomFormInputField from '@lib/utils/get-is-touched-custom-form-input-field';
import { FieldProps, FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import { errorStyle } from './field-styles';

interface FileFieldProps {
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

const FileField: React.FC<FileFieldProps> = ({ field, form, ...props }) => {
    const error = getErrorCustomFormInputField(form?.errors, field);
    const touched = getIsTouchedCustomFormInputField(form?.touched, field);
    return (
        <>
            <input
                // className={fullWidthInputStyle}
                className="mt-1 block w-full w-[18rem]
                rounded-md border border-gray-400 text-black shadow-sm
                file:mr-4 file:rounded-md file:border-0 file:border
                file:border-gray-200 file:bg-gray-50 file:py-2
                file:px-4 file:text-sm file:font-semibold
                file:text-primaryColor hover:file:bg-secondaryColor hover:file:text-white focus:outline-none
                focus:ring-[1.5px] focus:ring-primaryColor
                focus:ring-offset-2 md:w-[17.5rem]
                lg:md:w-[19rem]
                xl:w-[30rem]"
                {...field}
                {...props}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (!event.target.files) return;
                    form.setFieldValue(field.name, event.target.files[0]);
                }}
            />
            {touched && error && <small className={errorStyle}>{error}</small>}
        </>
    );
};

export default FileField;
