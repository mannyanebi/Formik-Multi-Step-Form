/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import FileField from 'archive/a-membership-form-fields/a-file-field';
import FullWidthTextField from 'archive/a-membership-form-fields/a-full-width-text-field';
import HalfWidthTextField from 'archive/a-membership-form-fields/a-half-width-text-field';
import { AcademicInformationInitialValues } from 'archive/membership-reg-form-initial-values';
import { Field, FieldArray } from 'formik';
import FormStepProps from '../membership-reg-form-step.types';

const AcademicInformationStep: React.FC<FormStepProps> = () => {
    return (
        <FieldArray name="academicRecords">
            {({ push, remove, form }) => {
                const { academicRecords } = form.values;
                return academicRecords.map(
                    (academicRecord: typeof AcademicInformationInitialValues, index: number) => {
                        return (
                            <div className="flex flex-col items-center space-y-3" key={index}>
                                <div>
                                    <label
                                        htmlFor={`academicRecords.${index}.academicNameOfInstitution`}
                                        className="block text-sm font-medium text-primaryColor"
                                    >
                                        Name of Institution <span className="text-red-500">*</span>
                                        <Field
                                            name={`academicRecords.${index}.academicNameOfInstitution`}
                                            id={`academicRecords.${index}.academicNameOfInstitution`}
                                            type="text"
                                            autoComplete="given-name"
                                            component={FullWidthTextField}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label
                                        htmlFor={`academicRecords.${index}.academicDiscipline`}
                                        className="block text-sm font-medium text-primaryColor"
                                    >
                                        Academic Program <span className="text-red-500">*</span>
                                        <Field
                                            name={`academicRecords.${index}.academicDiscipline`}
                                            id={`academicRecords.${index}.academicDiscipline`}
                                            type="text"
                                            autoComplete="given-name"
                                            component={FullWidthTextField}
                                        />
                                    </label>
                                </div>
                                <div>
                                    <label
                                        htmlFor={`academicRecords.${index}.academicProgram`}
                                        className="block text-sm font-medium text-primaryColor"
                                    >
                                        Academic Discipline
                                        <span className="text-red-500">*</span>
                                        <Field
                                            name={`academicRecords.${index}.academicProgram`}
                                            id={`academicRecords.${index}.academicProgram`}
                                            type="text"
                                            placeholder="B.SC, B.Eng, HND, Masters, Ph.D etc"
                                            component={FullWidthTextField}
                                        />
                                    </label>
                                </div>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                                    <label
                                        htmlFor={`academicRecords.${index}.academicAdmitted`}
                                        className="block text-sm font-medium text-primaryColor"
                                    >
                                        Date Admitted <span className="text-red-500">*</span>
                                        <Field
                                            name={`academicRecords.${index}.academicAdmitted`}
                                            id={`academicRecords.${index}.academicAdmitted`}
                                            type="date"
                                            autoComplete="given-name"
                                            component={HalfWidthTextField}
                                        />
                                        <label className="mt-2 block text-sm font-medium text-gray-700">
                                            <Field
                                                name="academicStillActive"
                                                type="checkbox"
                                                className="mr-2 text-sm font-medium text-gray-700"
                                            />
                                            I am currently schooling here
                                        </label>
                                    </label>
                                    <label
                                        htmlFor={`academicRecords.${index}.academicGraduated`}
                                        className="block text-sm font-medium text-primaryColor"
                                    >
                                        Date Graduated
                                        <Field
                                            name={`academicRecords.${index}.academicGraduated`}
                                            id={`academicRecords.${index}.academicGraduated`}
                                            type="date"
                                            autoComplete="given-name"
                                            component={HalfWidthTextField}
                                        />
                                    </label>
                                </div>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                                    <label
                                        htmlFor={`academicRecords.${index}.academicCertificate`}
                                        className="block text-sm font-medium text-primaryColor"
                                    >
                                        Document
                                        <span className="text-red-500">*</span>
                                        <Field
                                            name={`academicRecords.${index}.academicCertificate`}
                                            id={`academicRecords.${index}.academicCertificate`}
                                            type="file"
                                            placeholder="Upload Document"
                                            value={undefined}
                                            component={FileField}
                                        />
                                    </label>
                                </div>
                                <div className="flex w-full justify-between self-start pb-6 text-sm md:text-base">
                                    <button
                                        type="button"
                                        className="font-bold text-primaryColor underline hover:text-green-700"
                                        onClick={() => push(AcademicInformationInitialValues)}
                                    >
                                        Add Academic Information
                                    </button>
                                    <button
                                        type="button"
                                        className={`${
                                            academicRecords.length === 1 && 'invisible'
                                        } font-bold text-red-600 underline`}
                                        onClick={() => remove(index)}
                                    >
                                        Remove Academic Information
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

export default AcademicInformationStep;
