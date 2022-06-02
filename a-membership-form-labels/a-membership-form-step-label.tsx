import { BiCheck } from 'react-icons/bi';
// import { BsCheck2All } from "react-icons/bs";

/* eslint-disable react/jsx-no-useless-fragment */
interface MembershipFormStepLabelProps {
    label: string;
    activeStep?: boolean;
    onClickHandler: () => void;
    completed: boolean;
}

function MembershipFormStepLabel({
    label,
    activeStep,
    onClickHandler,
    completed,
}: MembershipFormStepLabelProps) {
    return (
        <button
            onClick={onClickHandler}
            type="button"
            className={`p-2 ${
                activeStep
                    ? 'border-b-2 border-primaryColor text-primaryColor'
                    : `${completed ? 'text-primaryColor' : 'text-gray-300'}`
            }`}
        >
            <span className="inline-flex flex-col items-center justify-center space-y-2 text-[0.8rem] md:text-base xl:flex-row xl:space-x-2">
                <BiCheck size={25} className={`${completed ? 'visible' : 'invisible'}`} />
                {label}
            </span>
        </button>
    );
}
export default MembershipFormStepLabel;
