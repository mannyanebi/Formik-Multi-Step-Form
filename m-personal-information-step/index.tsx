/* eslint-disable jsx-a11y/label-has-associated-control */
import CountrySelectField from 'archive/a-membership-form-fields/a-country-select-field';
import GenderSelectField from 'archive/a-membership-form-fields/a-gender-select-field';
import HalfWidthTextField from 'archive/a-membership-form-fields/a-half-width-text-field';
import ImageField from 'archive/a-membership-form-fields/a-image-field';
import StateSelectField from 'archive/a-membership-form-fields/a-state-select-field';
import TextareaField from 'archive/a-membership-form-fields/a-textarea-field';
import { Field } from 'formik';
import FormStepProps from '../../components/molecules/m-membership-reg-form-steps/membership-reg-form-step.types';

const PersonalInformationStep: React.FC<FormStepProps> = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                <label htmlFor="firstName" className="block text-sm font-medium text-primaryColor">
                    First Name <span className="text-red-500">*</span>
                    <Field
                        name="firstName"
                        id="firstName"
                        type="text"
                        autoComplete="given-name"
                        component={HalfWidthTextField}
                    />
                </label>
                <label htmlFor="middleName" className="block text-sm font-medium text-primaryColor">
                    Middle Name
                    <Field
                        name="middleName"
                        id="middleName"
                        type="text"
                        autoComplete="additional-name"
                        component={HalfWidthTextField}
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                <label htmlFor="lastName" className="block text-sm font-medium text-primaryColor">
                    Last Name <span className="text-red-500">*</span>
                    <Field
                        name="lastName"
                        id="lastName"
                        type="text"
                        autoComplete="family-name"
                        component={HalfWidthTextField}
                    />
                </label>
                <label htmlFor="email" className="block text-sm font-medium text-primaryColor">
                    Email <span className="text-red-500">*</span>
                    <Field
                        name="email"
                        id="email"
                        type="text"
                        autoComplete="email"
                        component={HalfWidthTextField}
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                <label htmlFor="phone" className="block text-sm font-medium text-primaryColor">
                    Phone Number <span className="text-red-500">*</span>
                    <Field
                        name="phone"
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+555 5555 5555"
                        component={HalfWidthTextField}
                    />
                </label>
                <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium text-primaryColor"
                >
                    Date of Birth <span className="text-red-500">*</span>
                    <Field
                        name="dateOfBirth"
                        id="dateOfBirth"
                        type="date"
                        autoComplete="bday"
                        component={HalfWidthTextField}
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                <label htmlFor="gender" className="block text-sm font-medium text-primaryColor">
                    Gender <span className="text-red-500">*</span>
                    <Field
                        name="gender"
                        id="gender"
                        autoComplete="sex"
                        component={GenderSelectField}
                    />
                </label>
                <label
                    htmlFor="profilePicture"
                    className="block text-sm font-medium text-primaryColor"
                >
                    Profile Picture <span className="text-red-500">*</span>
                    <Field
                        name="profilePicture"
                        id="profilePicture"
                        type="file"
                        value={undefined}
                        autoComplete="given-name"
                        component={ImageField}
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                <label
                    htmlFor="residentialAddress"
                    className="block text-sm font-medium text-primaryColor"
                >
                    Residential Address <span className="text-red-500">*</span>
                    <Field
                        name="residentialAddress"
                        id="residentialAddress"
                        type="text"
                        autoComplete="street-address"
                        placeholder="No. 3 Main street, Maitama, Abuja"
                        component={HalfWidthTextField}
                    />
                </label>
                <label
                    htmlFor="postalAddress"
                    className="block text-sm font-medium text-primaryColor"
                >
                    Postal Address <span className="text-red-500">*</span>
                    <Field
                        name="postalAddress"
                        id="postalAddress"
                        type="text"
                        autoComplete="street-address"
                        placeholder="No. 3 Main street, Maitama, Abuja"
                        component={HalfWidthTextField}
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                <label htmlFor="state" className="block text-sm font-medium text-primaryColor">
                    State <span className="text-red-500">*</span>
                    <Field name="state" id="state" component={StateSelectField} />
                </label>
                <label htmlFor="country" className="block text-sm font-medium text-primaryColor">
                    Country <span className="text-red-500">*</span>
                    <Field name="country" id="country" component={CountrySelectField} />
                </label>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                <label
                    htmlFor="nationality"
                    className="block text-sm font-medium text-primaryColor"
                >
                    Nationality <span className="text-red-500">*</span>
                    <Field name="nationality" id="nationality" component={CountrySelectField} />
                </label>
            </div>
            <div>
                <label htmlFor="bio" className="block text-sm font-medium text-primaryColor">
                    Professional Summary <span className="text-red-500">*</span>
                    <Field name="bio" id="bio" component={TextareaField} />
                </label>
            </div>

            <span
                id="next-of-kin"
                className="w-[18rem] border-b-2 text-base font-bold text-primaryColor md:w-[35.7rem] lg:text-lg lg:md:w-[39.3rem] xl:w-[63rem] xl:text-xl"
            >
                Next Of Kin
            </span>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                <label
                    htmlFor="kinFirstName"
                    className="block text-sm font-medium text-primaryColor"
                >
                    First Name <span className="text-red-500">*</span>
                    <Field
                        name="kinFirstName"
                        id="kinFirstName"
                        type="text"
                        autoComplete="given-name"
                        component={HalfWidthTextField}
                    />
                </label>
                <label
                    htmlFor="kinMiddleName"
                    className="block text-sm font-medium text-primaryColor"
                >
                    Middle Name
                    <Field
                        name="kinMiddleName"
                        id="kinMiddleName"
                        type="text"
                        autoComplete="additional-name"
                        component={HalfWidthTextField}
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                <label
                    htmlFor="kinLastName"
                    className="block text-sm font-medium text-primaryColor"
                >
                    Last Name <span className="text-red-500">*</span>
                    <Field
                        name="kinLastName"
                        id="kinLastName"
                        type="text"
                        autoComplete="family-name"
                        component={HalfWidthTextField}
                    />
                </label>
                <label htmlFor="kinEmail" className="block text-sm font-medium text-primaryColor">
                    Email <span className="text-red-500">*</span>
                    <Field
                        name="kinEmail"
                        id="kinEmail"
                        type="email"
                        autoComplete="email"
                        component={HalfWidthTextField}
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                <label htmlFor="kinPhone" className="block text-sm font-medium text-primaryColor">
                    Phone Number <span className="text-red-500">*</span>
                    <Field
                        name="kinPhone"
                        id="kinPhone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+555 5555 5555"
                        component={HalfWidthTextField}
                    />
                </label>
                <label
                    htmlFor="kinRelationship"
                    className="block text-sm font-medium text-primaryColor"
                >
                    Relationship <span className="text-red-500">*</span>
                    <Field
                        name="kinRelationship"
                        id="kinRelationship"
                        type="text"
                        component={HalfWidthTextField}
                    />
                </label>
            </div>
        </>
    );
};

export default PersonalInformationStep;
