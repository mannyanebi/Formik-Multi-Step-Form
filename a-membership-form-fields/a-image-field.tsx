/* eslint-disable jsx-a11y/label-has-associated-control */
import ImageFieldAvatar from '@assets/jpg/unisex-avatar-image-field.jpg';
import getErrorCustomFormInputField from '@lib/utils/get-error-custom-form-input-field';
import getIsTouchedCustomFormInputField from '@lib/utils/get-is-touched-custom-form-input-field';
import { FieldProps, FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import { errorStyle } from './field-styles';

interface ImageFieldProps {
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

const ImageField: React.FC<ImageFieldProps> = ({ field, form, ...props }) => {
    const error = getErrorCustomFormInputField(form?.errors, field);
    const touched = getIsTouchedCustomFormInputField(form?.touched, field);
    return (
        <div className="flex w-[18rem] items-center space-x-6 rounded-md p-4 shadow-lg md:w-[17.5rem] lg:md:w-[19rem] xl:w-[30rem]">
            <div className="shrink-0">
                <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={ImageFieldAvatar.src}
                    alt="Profile Avatar"
                />
            </div>
            <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                    className={`block w-full text-sm text-slate-500
                            file:mr-4 file:rounded-full file:border-0
                            file:bg-gray-50 file:py-2
                            file:px-4 file:text-sm
                            file:font-semibold file:text-primaryColor
                            hover:file:bg-secondaryColor
                            hover:file:text-white
                            `}
                    {...field}
                    {...props}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        if (!event.target.files) return;
                        form.setFieldValue(field.name, event.target.files[0]);
                    }}
                />
            </label>
            {touched && error && <small className={errorStyle}>{error}</small>}
        </div>
    );
};

export default ImageField;
