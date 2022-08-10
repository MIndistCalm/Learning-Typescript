import React from "react";
import { useContext, useState } from "react";
import { CreateProduct } from "../components/CreateProduct";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loader } from "../components/Loader";
import { Modal } from "../components/Modal";
import { Product } from "../components/Product";
import { ModalContext } from "../context/ModalContext";
import { useProducts } from "../hooks/products";
import { IProduct } from "../models";

export const ProductsPage = () => {
	const { products, error, loading, addProduct } = useProducts();
	const { modal, openModal, closeModal } = useContext(ModalContext);

	const createHandler = (product: IProduct) => {
		closeModal();
		addProduct(product);
	};

	return (
		<div className="container mx-auto max-w-2xl pt-1">
			{loading && <Loader />}
			{error && <ErrorMessage error={error} />}
			{products.map((product) => (
				<Product product={product} key={product.id} />
			))}
			{modal && (
				<Modal title="Create new product" onClose={closeModal}>
					<CreateProduct onCreate={createHandler} />
				</Modal>
			)}
			<button
				className="fixed bottom-5 right-5 rounded-full bg-blue-700 text-white text-2xl py-2 px-4"
				onClick={openModal}
			>
				+
			</button>
		</div>
	);
};
