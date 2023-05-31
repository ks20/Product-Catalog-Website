const chai = require("chai");
const chaiHttp = require("chai-http");
const { describe, before, after, it } = require("mocha");

const app = require("./server"); // Assuming your code is in a file named app.js

chai.use(chaiHttp);
const expect = chai.expect;

describe("Basketball Shoe APIs", () => {
  let productsList;

  // Define the productsList variable as an array of products. You can add more products to the list if needed.
  before(() => {
    productsList = [
      // Array of products
      // Each product is an object with properties like id, name, description, price, and imageURL
      // You can add more products to the list if needed
      {
        id: 1,
        name: "Nike Air Zoom Pegasus",
        description:
          "The Nike Air Zoom Pegasus is a versatile running shoe designed for all-day comfort and support.",
        price: 129.99,
        imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
      },
      // Add more products...
    ];
  });

  after(() => {
    // Reset the productsList to an empty array, ensuring that the tests start with a clean slate for each run.
    productsList = [];
  });

  describe("GET /api/products", () => {
    it("should get all products", (done) => {
      chai
        .request(app)
        .get("/api/products")
        .end((err, res) => {
          // Assertions for the response
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          expect(res.body).to.have.lengthOf(20); // Assuming 20 products are present
          done(); // Call done() to indicate the test is complete
        });
    });
  });

  describe("DELETE /api/products/:id", () => {
    it("should delete a product by ID", (done) => {
      const productId = 1; // Assuming product with ID 1 exists
      chai
        .request(app)
        .delete(`/api/products/${productId}`)
        .end((err, res) => {
          // Assertions for the response
          expect(res).to.have.status(204);
          done(); // Call done() to indicate the test is complete
        });
    });

    it("should return 404 if product ID is invalid", (done) => {
      const invalidProductId = 100; // Assuming product with ID 100 does not exist
      chai
        .request(app)
        .delete(`/api/products/${invalidProductId}`)
        .end((err, res) => {
          // Assertions for the response
          expect(res).to.have.status(404);
          done(); // Call done() to indicate the test is complete
        });
    });
  });

  describe("POST /api/products", () => {
    it("should add a new product", (done) => {
      const newProduct = {
        name: "Test Shoe",
        description: "This is a test shoe",
        price: 99.99,
        imageURL: "https://example.com/test-shoe.png",
      };

      chai
        .request(app)
        .post("/api/products")
        .send(newProduct)
        .end((err, res) => {
          // Assertions for the response
          expect(res).to.have.status(201);
          expect(res.body).to.be.an("object");
          expect(res.body.name).to.equal(newProduct.name);
          expect(res.body.description).to.equal(newProduct.description);
          expect(res.body.price).to.equal(newProduct.price);
          expect(res.body.imageURL).to.equal(newProduct.imageURL);
          done(); // Call done() to indicate the test is complete
        });
    });
  });
});
