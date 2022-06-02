export const PersonalInformationInitialValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: new Date('1900-01-01').toISOString().split('T')[0],
    gender: '',
    profilePicture: undefined,
    residentialAddress: '',
    postalAddress: '',
    state: '',
    country: '',
    nationality: '',
    bio: '',
    kinFirstName: '',
    kinMiddleName: '',
    kinLastName: '',
    kinEmail: '',
    kinPhone: '',
    kinRelationship: '',
};

export const WorkExperienceInitialValues = {
    workExperienceCompany: '',
    workExperienceDesignation: '',
    workExperienceDesc: '',
    workExperienceAddress: '',
    workExperienceStartDate: new Date('1900-01-01').toISOString().split('T')[0],
    workExperienceEndDate: new Date('1900-01-01').toISOString().split('T')[0],
    workExperienceEndDateActive: true,
    workExperienceState: '',
    workExperienceCountry: '',
};

export const AcademicInformationInitialValues = {
    academicNameOfInstitution: '',
    academicDiscipline: '',
    academicProgram: '',
    academicAdmitted: new Date('1900-01-01').toISOString().split('T')[0],
    academicGraduated: new Date('1900-01-01').toISOString().split('T')[0],
    academicStillActive: false,
    academicCertificate: undefined,
};

export const AdditionalInformationInitialValues = {
    orgNumber: '',
    nseNumber: '',
    corenNumber: '',
    refereeNumberOne: '',
    refereeNameOne: '',
    refereeNumberTwo: '',
    refereeNameTwo: '',
    refereeNumberThree: '',
    refereeNameThree: '',
};
