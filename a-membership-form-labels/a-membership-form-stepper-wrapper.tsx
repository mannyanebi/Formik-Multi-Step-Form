import React from 'react';

interface MembershipFormStepperWrapperProps {
    activeStep: number;
    children: React.ReactNode[];
}

function MembershipFormStepperWrapper({ activeStep, children }: MembershipFormStepperWrapperProps) {
    const childrenArray = React.Children.toArray(children) as React.ReactElement[];
    const newChildren: React.ReactNode[] = childrenArray.map((child, index) => {
        if (activeStep === index) {
            return React.cloneElement(child, { activeStep: true });
        }
        return child;
    });
    return (
        <div className="my-5 grid grid-cols-4 gap-2 border-b-2 border-gray-200 p-2 text-base">
            {newChildren}
        </div>
    );
}

export default MembershipFormStepperWrapper;
