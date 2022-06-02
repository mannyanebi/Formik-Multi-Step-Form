/* eslint-disable no-unused-vars */
import { FormikConfig, FormikHelpers, FormikValues } from 'formik';
import * as Yup from 'yup';

interface FormStepProps extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
    label: string;
    onSubmit: (
        values: FormikValues,
        formikHelpers: FormikHelpers<FormikValues>,
    ) => void | Promise<any>;
    validationSchema?: Yup.ObjectSchema<any>;
}

export default FormStepProps;
