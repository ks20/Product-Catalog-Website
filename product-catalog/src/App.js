/** 
 * The provided code is a React functional component (App.js) that renders a product catalog with the ability to:
  1. View products
  2. Add products
  3. Delete products.
 * 
*/

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./App.css";

Modal.setAppElement("#root");

const App = () => {
  // State variables -> important because they are handled under the hood by React, which tracks the history and lifecycle of state variables and their changes in value over time
  // This is React alternative to using normal variables such as `let products = [...]`
  // When application is initially rendered, React starts from the index.js file and starts executing all the React components (which are essentially functions that return jsx) up until there's no more components / jsx code to evaluate
  // useState() is React's way of saying that something changed and the component needs to be re-evaluated
  const [products, setProducts] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/products");
      const data = await response.json();

      // Calling this function does not just assign a new value to some variable, but that instead this is a special variable to begin with
      // It's managed by React somewhere in memory, and when we call this state updating function, this special variable will not just receive a new value,
      // but the component function in which you called this state updating function and in which you initialized your state with useState() will be executed again,
      // which will cause the .jsx code to be evaluated again.

      // We want to call this component function again, when this state changes
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Set the product to be deleted and open the delete confirmation modal
  const handleDeleteProduct = (product) => {
    setDeleteProduct(product);
    setModalIsOpen(true);
  };

  // Confirm and delete the selected product
  const confirmDeleteProduct = async () => {
    try {
      await fetch(`http://localhost:3001/api/products/${deleteProduct.id}`, {
        method: "DELETE",
      });
      fetchProducts();
      setDeleteProduct(null);
      setModalIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Open the add product modal
  const handleAddProduct = () => {
    setAddModalOpen(true);
  };

  // Handle form submission for adding a new product
  const handleAddFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.elements.name.value;
    const description = form.elements.description.value;
    const price = form.elements.price.value;
    const imageURL = form.elements.imageURL.value;

    const newProduct = {
      name,
      description,
      price,
      imageURL,
    };

    try {
      await fetch("http://localhost:3001/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      fetchProducts();
      setAddModalOpen(false);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Product Catalog</h1>
      <div className="button-container">
        <button className="add-button" onClick={handleAddProduct}>
          Add A New Product
        </button>
      </div>
      <div className="product-list">
        {/* Render the list of products */}
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img
              className="product-image"
              src={product.imageURL}
              alt={product.name}
            />
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ${product.price}</p>
              <button
                className="delete-button"
                onClick={() => handleDeleteProduct(product)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delete confirmation modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2 className="modal-title">Confirm Delete</h2>
          <p className="modal-message">
            Are you sure you want to delete{" "}
            {deleteProduct && deleteProduct.name}?
          </p>
          <div className="modal-buttons">
            <button
              className="modal-button confirm-button"
              onClick={confirmDeleteProduct}
            >
              Yes
            </button>
            <button
              className="modal-button cancel-button"
              onClick={() => setModalIsOpen(false)}
            >
              No
            </button>
          </div>
        </div>
      </Modal>

      {/* Add product modal */}
      <Modal
        isOpen={isAddModalOpen}
        onRequestClose={() => setAddModalOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2 className="modal-title">Add a New Product</h2>
          <form className="add-form" onSubmit={handleAddFormSubmit}>
            <input
              className="form-input"
              type="text"
              name="name"
              placeholder="Product Name"
              required
            />
            <input
              className="form-input"
              type="text"
              name="description"
              placeholder="Description"
              required
            />
            <input
              className="form-input"
              type="number"
              name="price"
              placeholder="Price"
              step="0.01"
              required
            />
            <input
              className="form-input"
              type="text"
              name="imageURL"
              placeholder="Image URL"
              required
            />
            <div className="modal-buttons">
              <button className="modal-button confirm-button" type="submit">
                Add Product
              </button>
              <button
                className="modal-button cancel-button"
                onClick={() => setAddModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default App;
