import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './App.css';

Modal.setAppElement('#root');

const App = () => {
  const [products, setProducts] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteProduct = (product) => {
    setDeleteProduct(product);
    setModalIsOpen(true);
  };

  const confirmDeleteProduct = async () => {
    try {
      await fetch(`http://localhost:3001/api/products/${deleteProduct.id}`, {
        method: 'DELETE',
      });
      fetchProducts();
      setDeleteProduct(null);
      setModalIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddProduct = () => {
    setAddModalOpen(true);
  };

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
      await fetch('http://localhost:3001/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img className="product-image" src={product.imageURL} alt={product.name} />
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ${product.price}</p>
              <button className="delete-button" onClick={() => handleDeleteProduct(product)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2 className="modal-title">Confirm Delete</h2>
          <p className="modal-message">
            Are you sure you want to delete {deleteProduct && deleteProduct.name}?
          </p>
          <div className="modal-buttons">
            <button className="modal-button confirm-button" onClick={confirmDeleteProduct}>
              Yes
            </button>
            <button className="modal-button cancel-button" onClick={() => setModalIsOpen(false)}>
              No
            </button>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={isAddModalOpen}
        onRequestClose={() => setAddModalOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2 className="modal-title">Add a New Product</h2>
          <form className="add-form" onSubmit={handleAddFormSubmit}>
            <input className="form-input" type="text" name="name" placeholder="Product Name" required />
            <input className="form-input" type="text" name="description" placeholder="Description" required />
            <input className="form-input" type="number" name="price" placeholder="Price" step="0.01" required />
            <input className="form-input" type="text" name="imageURL" placeholder="Image URL" required />
            <div className="modal-buttons">
              <button className="modal-button confirm-button" type="submit">Add Product</button>
              <button className="modal-button cancel-button" onClick={() => setAddModalOpen(false)}>Cancel</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default App;