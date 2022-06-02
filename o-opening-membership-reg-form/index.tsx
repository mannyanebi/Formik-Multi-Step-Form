/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-promise-executor-return */
import HalfWidthTextField from 'archive/a-membership-form-fields/a-half-width-text-field';
import MembershipStatusSelectField from 'archive/a-membership-form-fields/a-membership-status-select-field';
import OrganizationChapterSelectField from 'archive/a-membership-form-fields/a-organization-chapter-select-field';
import OrganizationMembershipTypeSelectField from 'archive/a-membership-form-fields/a-organization-membership-type-select-field';
import OrganizationSpecialtySelectField from 'archive/a-membership-form-fields/a-organization-specialty-select-field';
import OrganizationSubSpecialtySelectField from 'archive/a-membership-form-fields/a-organization-subspecialty-select-field';
import { AdditionalInformationInitialValues } from 'archive/membership-reg-form-initial-values';
import { OpeningMembershipRegFormSchema } from '@lib/constants/dashboard/membership-reg-form-validation-schemas';
import { Field, Form, Formik, FormikState, FormikValues } from 'formik';
import { useCallback } from 'react';

const sleep = (time: number | undefined) => new Promise((acc) => setTimeout(acc, time));

function OpeningMembershipRegForm({ closeModal }: { closeModal: () => void }) {
    const onSubmitHandler = useCallback(async (values: FormikValues): Promise<any> => {
        await sleep(3000);
        console.log('values', values);
        closeModal();
    }, []);
    return (
        <Formik
            initialValues={{ ...AdditionalInformationInitialValues }}
            validationSchema={OpeningMembershipRegFormSchema}
            onSubmit={onSubmitHandler}
        >
            {({ isSubmitting }: FormikState<FormikValues>) => (
                <Form autoComplete="off">
                    <div className="flex max-h-[22rem] flex-col space-y-4 overflow-y-auto">
                        <label
                            htmlFor="memberStatus"
                            className="block text-sm font-medium text-primaryColor"
                        >
                            Membership Status <span className="text-red-500">*</span>
                            <Field
                                name="memberStatus"
                                id="memberStatus"
                                autoComplete="given-name"
                                component={MembershipStatusSelectField}
                            />
                        </label>
                        <label
                            htmlFor="subDivision"
                            className="block text-sm font-medium text-primaryColor"
                        >
                            Chapter <span className="text-red-500">*</span>
                            <Field
                                name="subDivision"
                                id="subDivision"
                                autoComplete="given-name"
                                component={OrganizationChapterSelectField}
                            />
                        </label>
                        <label
                            htmlFor="membershipType"
                            className="block text-sm font-medium text-primaryColor"
                        >
                            Membership Type <span className="text-red-500">*</span>
                            <Field
                                name="membershipType"
                                id="membershipType"
                                autoComplete="given-name"
                                component={OrganizationMembershipTypeSelectField}
                            />
                        </label>
                        <label
                            htmlFor="specialty"
                            className="block text-sm font-medium text-primaryColor"
                        >
                            Specialty <span className="text-red-500">*</span>
                            <Field
                                name="specialty"
                                id="specialty"
                                autoComplete="given-name"
                                component={OrganizationSpecialtySelectField}
                            />
                        </label>
                        <label
                            htmlFor="subSpecialty"
                            className="block text-sm font-medium text-primaryColor"
                        >
                            Sub-specialty <span className="text-red-500">*</span>
                            <Field
                                name="subSpecialty"
                                id="subSpecialty"
                                autoComplete="given-name"
                                component={OrganizationSubSpecialtySelectField}
                            />
                        </label>
                        <label
                            htmlFor="orgNumber"
                            className="block text-sm font-medium text-primaryColor"
                        >
                            Membership Number <span className="text-red-500">*</span>
                            <Field
                                name="orgNumber"
                                id="orgNumber"
                                type="text"
                                autoComplete="given-name"
                                component={HalfWidthTextField}
                            />
                        </label>
                        <label
                            htmlFor="nseNumber"
                            className="block text-sm font-medium text-primaryColor"
                        >
                            NSE Number <span className="text-red-500">*</span>
                            <Field
                                name="nseNumber"
                                id="nseNumber"
                                type="text"
                                autoComplete="given-name"
                                component={HalfWidthTextField}
                            />
                        </label>
                        <label
                            htmlFor="corenNumber"
                            className="block text-sm font-medium text-primaryColor"
                        >
                            COREN Number <span className="text-red-500">*</span>
                            <Field
                                name="corenNumber"
                                id="corenNumber"
                                type="text"
                                autoComplete="given-name"
                                component={HalfWidthTextField}
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mx-auto mt-5 mb-2 w-full rounded-md bg-primaryColor px-9 py-3 text-base text-white md:max-w-[30rem] md:px-[6rem] md:text-lg xl:px-[12rem]"
                    >
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default OpeningMembershipRegForm;
