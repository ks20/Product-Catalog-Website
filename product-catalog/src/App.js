import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Fetch the list of products from the backend
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
      fetchProducts(); // Refresh the list of products
      setDeleteProduct(null); // Reset the deleteProduct state
      setModalIsOpen(false); // Close the modal
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Product Catalog</h1>
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img className="product-image" src={product.imageURL} alt={product.name} />
            <div className="product-details">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ${product.price}</p>
              <button className="delete-button" onClick={() => handleDeleteProduct(product)}>Delete</button>
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
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete {deleteProduct && deleteProduct.name}?</p>
        <div className="modal-buttons">
          <button onClick={confirmDeleteProduct}>Yes</button>
          <button onClick={() => setModalIsOpen(false)}>No</button>
        </div>
      </Modal>
    </div>
  );
  
  // const deleteProduct = async (id) => {
  //   try {
  //     await fetch(`http://localhost:3001/api/products/${id}`, {
  //       method: 'DELETE',
  //     });
  //     fetchProducts(); // Refresh the list of products
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // return (
  //   <div className="container">
  //     <h1 className="title">Product Catalog</h1>
  //     <div className="product-list">
  //       {products.map((product) => (
  //         <div className="product-card" key={product.id}>
  //           <img className="product-image" src={product.imageURL} alt={product.name} />
  //           <div className="product-details">
  //             <h2 className="product-name">{product.name}</h2>
  //             <p className="product-description">{product.description}</p>
  //             <p className="product-price">Price: ${product.price}</p>
  //             <button className="delete-button" onClick={() => deleteProduct(product.id)}>Delete</button>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default App;
