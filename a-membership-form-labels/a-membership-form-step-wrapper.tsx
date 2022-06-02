/* eslint-disable react/jsx-no-useless-fragment */
interface MembershipFormStepWrapperProps {
    children: React.ReactNode;
    completed: boolean;
    onClick: () => void;
}

const MembershipFormStepWrapper: React.FC<MembershipFormStepWrapperProps> = (children) => {
    return <>{children}</>;
};

export default MembershipFormStepWrapper;
