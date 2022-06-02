/* eslint-disable no-unused-vars */
import { v4 as uuidv4 } from 'uuid';
import MembershipFormStepLabel from '@atoms/a-membership-form-labels/a-membership-form-step-label';
import MembershipFormStepperWrapper from '@atoms/a-membership-form-labels/a-membership-form-stepper-wrapper';
import { Form, Formik, FormikConfig, FormikState, FormikValues } from 'formik';
import React, { useState } from 'react';

interface MembershipRegFormStepperProps extends FormikConfig<FormikValues> {
    children: React.ReactNode | React.ReactNode[];
}

function MembershipRegFormStepper({
    children,
    ...props
}: Omit<MembershipRegFormStepperProps, 'onSubmit'>) {
    const childrenArray = React.Children.toArray(children) as React.ReactElement[];
    const [step, setStep] = useState(0);
    const currentChild = childrenArray[step];
    const [completed, setCompleted] = useState<boolean>(false);

    function isLastStep() {
        return step === childrenArray.length - 1;
    }

    return (
        <Formik
            {...props}
            validationSchema={currentChild.props.validationSchema}
            onSubmit={async (values, helpers) => {
                console.log('isLastStep()', isLastStep());
                if (isLastStep()) {
                    await currentChild.props.onSubmit(values, helpers);
                    setCompleted(true);
                } else {
                    setStep((s) => s + 1);
                    await currentChild.props.onSubmit(values, helpers);
                }
            }}
        >
            {({ isSubmitting }: FormikState<FormikValues>) => (
                <Form autoComplete="off">
                    <MembershipFormStepperWrapper activeStep={step}>
                        {childrenArray.map((child, index) => {
                            return (
                                <MembershipFormStepLabel
                                    key={child.key}
                                    label={child.props.label}
                                    onClickHandler={() => setStep(index)}
                                    completed={step > index || completed}
                                />
                            );
                        })}
                    </MembershipFormStepperWrapper>
                    <div className="min-h-[72vh] rounded-md bg-white px-[2rem] py-[1.5rem] drop-shadow-xl md:py-[2.5rem] lg:px-[3.5rem] lg:py-[3rem]">
                        <div className="flex flex-col items-center space-y-3">{currentChild}</div>
                        <div className="flex">
                            {step > 0 && (
                                <button
                                    type="button"
                                    className="mx-auto mt-5 mb-2 max-w-[8rem] rounded-md bg-primaryColor px-9 py-3 text-base text-white md:max-w-[30rem] md:px-[6rem] md:text-lg xl:px-[12rem]"
                                    onClick={() => setStep((s) => s - 1)}
                                >
                                    Previous
                                </button>
                            )}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mx-auto mt-5 mb-2 max-w-[8rem] rounded-md bg-primaryColor px-9 py-3 text-base text-white md:max-w-[30rem] md:px-[6rem] md:text-lg xl:px-[12rem]"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}

export default MembershipRegFormStepper;
