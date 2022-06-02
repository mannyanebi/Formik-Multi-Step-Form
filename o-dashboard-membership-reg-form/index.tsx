import {
    AcademicInformationInitialValues,
    AdditionalInformationInitialValues,
    PersonalInformationInitialValues,
    WorkExperienceInitialValues,
} from 'archive/membership-reg-form-initial-values';
import {
    AcademicInformationSchema,
    AdditionalInformationSchema,
    PersonalInformationSchema,
    WorkExperienceSchema,
} from '@lib/constants/dashboard/membership-reg-form-validation-schemas';
import MembershipRegFormStepper from 'archive/m-membership-reg-form-stepper';
import AcademicInformationStep from '@molecules/m-membership-reg-form-steps/m-academic-information-step';
import AdditionalInformationStep from 'archive/m-additional-information-step';
import PersonalInformationStep from 'archive/m-personal-information-step';
import WorkExperienceStep from 'archive/m-work-experience-step';
import MembershipRegistrationFormModal from 'archive/o-membership-reg-form-modal';
import OpeningMembershipRegForm from 'archive/o-opening-membership-reg-form';
import { FormikValues } from 'formik';
import { useCallback, useState } from 'react';

// eslint-disable-next-line no-promise-executor-return
const sleep = (time: number | undefined) => new Promise((acc) => setTimeout(acc, time));

function DashboardMembershipRegForm() {
    const onSubmitHandler = useCallback(async (values: FormikValues): Promise<any> => {
        await sleep(3000);
        console.log('values', values);
    }, []);

    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

    const closeOpeningFormModal = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return (
        <>
            <MembershipRegistrationFormModal
                title="Fill This Form"
                isOpen={isModalOpen}
                modalChildren={<OpeningMembershipRegForm closeModal={closeOpeningFormModal} />}
            />
            <MembershipRegFormStepper
                initialValues={{
                    ...PersonalInformationInitialValues,
                    workExperiences: [WorkExperienceInitialValues],
                    academicRecords: [AcademicInformationInitialValues],
                    ...AdditionalInformationInitialValues,
                }}
                enableReinitialize
            >
                <PersonalInformationStep
                    label="Personal Information"
                    onSubmit={onSubmitHandler}
                    validationSchema={PersonalInformationSchema}
                />

                <WorkExperienceStep
                    label="Work Experience"
                    onSubmit={onSubmitHandler}
                    validationSchema={WorkExperienceSchema}
                />

                <AcademicInformationStep
                    label="Academic Information"
                    onSubmit={onSubmitHandler}
                    validationSchema={AcademicInformationSchema}
                />

                <AdditionalInformationStep
                    label="Additional Information"
                    onSubmit={onSubmitHandler}
                    validationSchema={AdditionalInformationSchema}
                />
            </MembershipRegFormStepper>
        </>
    );
}

export default DashboardMembershipRegForm;
