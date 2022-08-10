import { createContext, useState } from "react";

interface IModalContext {
	modal: boolean;
	openModal: () => void;
	closeModal: () => void;
}

interface ModalStateProps {
	children: React.ReactNode;
}

export const ModalContext = createContext<IModalContext>({
	modal: false,
	openModal: () => {},
	closeModal: () => {},
});

export const ModalState = ({ children }: ModalStateProps) => {
	const [modal, setModal] = useState(false);

	const openModal = () => setModal(true);

	const closeModal = () => setModal(false);

	return (
		<ModalContext.Provider value={{ modal, openModal, closeModal }}>
			{children}
		</ModalContext.Provider>
	);
};
