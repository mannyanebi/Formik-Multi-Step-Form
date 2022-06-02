/* eslint-disable jsx-a11y/label-has-associated-control */
import FullWidthTextField from 'archive/a-membership-form-fields/a-full-width-text-field';
import HalfWidthTextField from 'archive/a-membership-form-fields/a-half-width-text-field';
import { Field } from 'formik';
import FormStepProps from '../../components/molecules/m-membership-reg-form-steps/membership-reg-form-step.types';

const AdditionalInformationStep: React.FC<FormStepProps> = () => {
    return (
        <>
            <div>
                <label htmlFor="orgNumber" className="block text-sm font-medium text-primaryColor">
                    Membership Number <span className="text-red-500">*</span>
                    <Field
                        name="orgNumber"
                        id="orgNumber"
                        type="text"
                        component={FullWidthTextField}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="nseNumber" className="block text-sm font-medium text-primaryColor">
                    NSE Number <span className="text-red-500">*</span>
                    <Field
                        name="nseNumber"
                        id="nseNumber"
                        type="text"
                        component={FullWidthTextField}
                    />
                </label>
            </div>
            <div>
                <label
                    htmlFor="corenNumber"
                    className="block text-sm font-medium text-primaryColor"
                >
                    COREN Number <span className="text-red-500">*</span>
                    <Field
                        name="corenNumber"
                        id="corenNumber"
                        type="text"
                        component={FullWidthTextField}
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                <label
                    htmlFor="refereeNameOne"
                    className="block text-sm font-medium text-primaryColor"
                >
                    Referee One <span className="text-red-500">*</span>
                    <Field
                        name="refereeNameOne"
                        id="refereeNameOne"
                        type="text"
                        autoComplete="given-name"
                        placeholder="Referee Name"
                        component={HalfWidthTextField}
                    />
                </label>
                <label
                    htmlFor="refereeNumberOne"
                    className="block text-sm font-medium text-primaryColor"
                >
                    {' '}
                    <span className="invisible">#ignore</span>
                    <Field
                        name="refereeNumberOne"
                        id="refereeNumberOne"
                        type="text"
                        placeholder="Referee Number"
                        component={HalfWidthTextField}
                    />
                </label>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                <label
                    htmlFor="refereeNameTwo"
                    className="block text-sm font-medium text-primaryColor"
                >
                    Referee Two <span className="text-red-500">*</span>
                    <Field
                        name="refereeNameTwo"
                        id="refereeNameTwo"
                        type="text"
                        autoComplete="given-name"
                        component={HalfWidthTextField}
                    />
                </label>
                <label
                    htmlFor="refereeNumberTwo"
                    className="block text-sm font-medium text-primaryColor"
                >
                    <span className="invisible">#ignore</span>
                    <Field
                        name="refereeNumberTwo"
                        id="refereeNumberTwo"
                        type="text"
                        autoComplete="given-name"
                        placeholder="Referee Number"
                        component={HalfWidthTextField}
                    />
                </label>
            </div>
            {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-[3rem]">
                <label
                    htmlFor="refereeNameThree"
                    className="block text-sm font-medium text-primaryColor"
                >
                    Referee Three <span className="text-red-500">*</span>
                    <Field
                        name="refereeNameThree"
                        id="refereeNameThree"
                        type="text"
                        autoComplete="given-name"
                        placeholder="Referee Name"
                        component={HalfWidthTextField}
                    />
                </label>
                <label
                    htmlFor="refereeNumberThree"
                    className="block text-sm font-medium text-primaryColor"
                >
                    <span className="invisible">#ignore</span>
                    <Field
                        name="refereeNumberThree"
                        id="refereeNumberThree"
                        type="text"
                        autoComplete="given-name"
                        placeholder="Referee Number"
                        component={HalfWidthTextField}
                    />
                </label>
            </div> */}
        </>
    );
};

export default AdditionalInformationStep;
