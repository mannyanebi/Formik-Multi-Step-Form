import { Dialog, Transition } from '@headlessui/react';
// import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import React, { Fragment } from 'react';

interface ModalProps {
    isOpen: boolean;
    title: string;
    modalChildren: React.ReactNode | React.ReactNode[];
}

function MembershipRegistrationFormModal({ isOpen, title, modalChildren }: ModalProps) {
    //   const [isOpen, setIsOpen] = useState(true)

    //   function closeModal() {
    //     setIsOpen(false)
    //   }

    //   function openModal() {
    //     setIsOpen(true)
    //   }

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => {}}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="flex max-h-[38rem] w-full transform flex-col items-center justify-center space-y-4 overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all md:w-[25rem] md:max-w-[40rem] xl:w-full">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    {title}
                                </Dialog.Title>
                                <section className="my-4">{modalChildren}</section>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

export default MembershipRegistrationFormModal;
