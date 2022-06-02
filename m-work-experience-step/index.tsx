/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import CountrySelectField from 'archive/a-membership-form-fields/a-country-select-field';
import FullWidthTextField from 'archive/a-membership-form-fields/a-full-width-text-field';
import HalfWidthTextField from 'archive/a-membership-form-fields/a-half-width-text-field';
import StateSelectField from 'archive/a-membership-form-fields/a-state-select-field';
import TextareaField from 'archive/a-membership-form-fields/a-textarea-field';
import { Field, FieldArray, FieldArrayRenderProps } from 'formik';
import { WorkExperienceInitialValues } from 'archive/membership-reg-form-initial-values';
import FormStepProps from '../../components/molecules/m-membership-reg-form-steps/membership-reg-form-step.types';

const WorkExperienceStep: React.FC<FormStepProps> = () => {
    return (
        <FieldArray name="workExperiences">
            {({ push, remove, form }) => {
                const { workExperiences } = form.values;
                return workExperiences?.map(
                    (workExperience: typeof WorkExperienceInitialValues, index: number) => {
                        return (
                            <div className="flex flex-col items-center space-y-3" key={index}>
                                <div>
                                    <label
                                        htmlFor={`workExperiences.${index}.workExperienceCompany`}
                                        className="block text-sm font-medium text-primaryColor"
                                    >
                                        Name of Organization/Company{' '}
                                        <span className="text-red-500">*</span>
                                        <Field
                                            name={`workExperiences.${index}.workExperienceCompany`}
                                            id={`workExperiences.${index}.workExperienceCompany`}
                                            type="text"
                                            // fieldarrayname="workExperiences"
                                            // fieldarrayindex={index}
                                            autoComplete="organization"
                                            component={FullWidthTextField}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label
                                        htmlFor={`workExperiences.${index}.workExperienceDesignation`}
                                        className="block text-sm font-medium text-primaryColor"
                                    >
                                        Job Title/Position <span className="text-red-500">*</span>
                                        <Field
                                            name={`workExperiences.${index}.workExperienceDesignation`}
                                            id={`workExperiences.${index}.workExperienceDesignation`}
                                            type="text"
                                            autoComplete="organization-title"
                                            component={FullWidthTextField}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label
                                        htmlFor={`workExperiences.${index}.workExperienceDesc`}
                                        className="block text-sm font-medium text-primaryColor"
                                    >
                                        Brief Job Description{' '}
                                        <span className="text-red-500">*</span>
                                        <Field
                                            name={`workExperiences.${index}.workExperienceDesc`}
                                            id={`workExperiences.${index}.workExperienceDesc`}
                                            type="text"
                                            component={FullWidthTextField}
                                        />
                                    </label>
                                </div>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                                    <label
                                        htmlFor={`workExperiences.${index}.workExperienceStartDate`}
                                        className="block text-sm font-medium text-primaryColor"
                                    >
                                        Start Date <span className="text-red-500">*</span>
                                        <Field
                                            name={`workExperiences.${index}.workExperienceStartDate`}
                                            id={`workExperiences.${index}.workExperienceStartDate`}
                                            type="date"
                                            component={HalfWidthTextField}
                                        />
                                        <label className="mt-2 block text-sm font-medium text-gray-700">
                                            <Field
                                                name={`workExperiences.${index}.workExperienceEndDateActive`}
                                                type="checkbox"
                                                className="mr-2 text-sm font-medium text-gray-700"
                                            />
                                            I am currently working here
                                        </label>
                                    </label>
                                    <label
                                        htmlFor={`workExperiences.${index}.workExperienceEndDate`}
                                        className="block text-sm font-medium text-primaryColor"
                                    >
                                        End Date
                                        <Field
                                            name={`workExperiences.${index}.workExperienceEndDate`}
                                            id={`workExperiences.${index}.workExperienceEndDate`}
                                            autoComplete="given-name"
                                            component={HalfWidthTextField}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label
                                        htmlFor={`workExperiences.${index}.workExperienceAddress`}
                                        className="block text-sm font-medium text-primaryColor"
                                    >
                                        Name of Organization/Company Address{' '}
                                        <span className="text-red-500">*</span>
                                        <Field
                                            name={`workExperiences.${index}.workExperienceAddress`}
                                            id={`workExperiences.${index}.workExperienceAddress`}
                                            component={TextareaField}
                                        />
                                    </label>
                                </div>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                                    <label
                                        htmlFor={`workExperiences.${index}.workExperienceState`}
                                        className="block text-sm font-medium text-primaryColor"
                                    >
                                        State <span className="text-red-500">*</span>
                                        <Field
                                            name={`workExperiences.${index}.workExperienceState`}
                                            id={`workExperiences.${index}.workExperienceState`}
                                            component={StateSelectField}
                                        />
                                    </label>
                                    <label
                                        htmlFor={`workExperiences.${index}.workExperienceCountry`}
                                        className="block text-sm font-medium text-primaryColor"
                                    >
                                        Country <span className="text-red-500">*</span>
                                        <Field
                                            name={`workExperiences.${index}.workExperienceCountry`}
                                            id={`workExperiences.${index}.workExperienceCountry`}
                                            component={CountrySelectField}
                                        />
                                    </label>
                                </div>
                                <div className="flex w-full justify-between self-start pb-6 text-sm md:text-base">
                                    <button
                                        type="button"
                                        className="font-bold text-primaryColor underline hover:text-green-700"
                                        onClick={() => push(WorkExperienceInitialValues)}
                                    >
                                        Add Work Experience
                                    </button>
                                    <button
                                        type="button"
                                        className={`${
                                            workExperiences.length === 1 && 'invisible'
                                        } font-bold text-red-600 underline`}
                                        onClick={() => remove(index)}
                                    >
                                        Remove Work Experience
                                    </button>
                                </div>
                            </div>
                        );
                    },
                );
            }}
        </FieldArray>
    );
};

export default WorkExperienceStep;
