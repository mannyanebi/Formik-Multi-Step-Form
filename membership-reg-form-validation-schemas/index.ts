import * as Yup from 'yup';

function checkIfImageIsTooBig(file?: File): boolean {
    let valid = true;
    if (file) {
        const size = file.size / 1024 / 1024;
        if (size > 0.5) {
            valid = false;
        }
        return valid;
    }
    return valid;
}

function checkIfFileIsTooBig(file?: File): boolean {
    let valid = true;
    if (file) {
        const size = file.size / 1024 / 1024;
        if (size > 10) {
            valid = false;
        }
        return valid;
    }
    return valid;
}

function checkIfFilesAreCorrectType(file?: File): boolean {
    let valid = true;
    if (file) {
        if (
            !['image/jpeg', 'image/jpg', 'image/gif', 'image/png'].includes(file.type.toLowerCase())
        ) {
            valid = false;
        }
        return valid;
    }
    return valid;
}

// personal information
export const PersonalInformationSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    //   email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().min(8, 'Kindly provide your complete phone number').required('Required'),
    dateOfBirth: Yup.date()
        .min('01/01/1900', 'Date of Birth must not be less than 01/01/1900')
        .required(),
    gender: Yup.string().required('Required'),
    profilePicture: Yup.mixed()
        // .nullable()
        .required('Required')
        .test('is-invalid-file-type', 'Invalid image type', checkIfFilesAreCorrectType)
        .test('is-big-file', 'Image too big. File should be less than 500KB', checkIfImageIsTooBig),
    bio: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    country: Yup.string().required('Required'),
    nationality: Yup.string().required('Required'),
    residentialAddress: Yup.string().min(8),
    postalAddress: Yup.string().min(8),
    kinFirstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    kinLastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    kinEmail: Yup.string().email('Invalid email').required('Required'),
    kinPhone: Yup.string().min(8, 'Kindly provide your complete phone number').required('Required'),
    kinRelationship: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

// work experience
export const WorkExperienceSchema = Yup.object().shape({
    workExperiences: Yup.array().of(
        Yup.object().shape({
            workExperienceCompany: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            workExperienceDesignation: Yup.string()
                .min(4, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            workExperienceDesc: Yup.string()
                .min(7, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            workExperienceAddress: Yup.string()
                .min(7, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            workExperienceStartDate: Yup.date()
                .min('01/01/1900', 'Start Date must not be less than 01/01/1900')
                .required(),
            workExperienceState: Yup.string().required('Required'),
            workExperienceCountry: Yup.string().required('Required'),
        }),
    ),
});

export const AcademicInformationSchema = Yup.object().shape({
    academicRecords: Yup.array().of(
        Yup.object().shape({
            academicNameOfInstitution: Yup.string()
                .min(4, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            academicDiscipline: Yup.string()
                .min(4, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            academicProgram: Yup.string()
                .min(4, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),
            academicAdmitted: Yup.date()
                .min('01/01/1900', 'Start Date must not be less than 01/01/1900')
                .required(),
            academicCertificate: Yup.mixed()
                .required('Required')
                .test('is-invalid-file-type', 'Invalid file type', checkIfFilesAreCorrectType)
                .test(
                    'is-big-file',
                    'File too big. File should be less than 10MB',
                    checkIfFileIsTooBig,
                ),
        }),
    ),
});

export const AdditionalInformationSchema = Yup.object().shape({
    orgNumber: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    nseNumber: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    corenNumber: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    refereeNameOne: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    // refereeNumberOne: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    refereeNameTwo: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    // refereeNumberTwo: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    // refereeNameThree: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    // refereeNumberThree: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

export const OpeningMembershipRegFormSchema = Yup.object().shape({
    subDivision: Yup.string().required('Required'),
    memberStatus: Yup.string().required('Required'),
    membershipType: Yup.string().required('Required'),
    specialty: Yup.string().required('Required'),
    subSpecialty: Yup.string().required('Required'),
    orgNumber: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    nseNumber: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    corenNumber: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});
