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
        {
          id: 1,
          name: "Nike Air Zoom Pegasus",
          description:
            "The Nike Air Zoom Pegasus is a versatile running shoe designed for all-day comfort and support.",
          price: 129.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 2,
          name: "Adidas Harden Vol. 5",
          description:
            "The Adidas Harden Vol. 5 is a signature basketball shoe built for speed and agility on the court.",
          price: 149.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 3,
          name: "Under Armour Curry 8",
          description:
            "The Under Armour Curry 8 is the latest edition of Stephen Curry's signature basketball shoe, offering superior traction and stability.",
          price: 169.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 4,
          name: "Jordan Why Not Zer0.4",
          description:
            "The Jordan Why Not Zer0.4 is Russell Westbrook's latest basketball shoe with a unique design and responsive cushioning.",
          price: 159.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 5,
          name: "Puma Clyde Court",
          description:
            "The Puma Clyde Court is a classic basketball shoe that combines style and performance for the modern game.",
          price: 119.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 6,
          name: "Reebok Shaq Attaq",
          description:
            "The Reebok Shaq Attaq is a retro basketball shoe made famous by Shaquille O'Neal in the 90s.",
          price: 139.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 7,
          name: "New Balance Kawhi Leonard",
          description:
            "The New Balance Kawhi Leonard is a signature basketball shoe with a focus on stability and support.",
          price: 149.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 8,
          name: "Converse Chuck 70",
          description:
            "The Converse Chuck 70 is a timeless basketball shoe known for its iconic design and durable construction.",
          price: 89.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 9,
          name: "Anta KT5",
          description:
            "The Anta KT5 is Klay Thompson's signature basketball shoe, offering lightweight performance and responsiveness.",
          price: 129.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 10,
          name: "Li-Ning Way of Wade 9",
          description:
            "The Li-Ning Way of Wade 9 is Dwyane Wade's latest basketball shoe, featuring innovative cushioning and support technologies.",
          price: 169.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        // Add 10 more basketball shoes
        {
          id: 11,
          name: "Nike LeBron 18",
          description:
            "The Nike LeBron 18 is LeBron James's latest signature basketball shoe, combining style and performance for elite players.",
          price: 199.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 12,
          name: "Adidas Dame 7",
          description:
            "The Adidas Dame 7 is Damian Lillard's basketball shoe designed for explosive speed and quickness on the court.",
          price: 139.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 13,
          name: "Under Armour HOVR Havoc 3",
          description:
            "The Under Armour HOVR Havoc 3 is a versatile basketball shoe with exceptional cushioning and traction.",
          price: 149.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 14,
          name: "Jordan Jumpman Diamond Mid",
          description:
            "The Jordan Jumpman Diamond Mid is a mid-top basketball shoe that provides excellent support and stability.",
          price: 129.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 15,
          name: "Puma Uproar",
          description:
            "The Puma Uproar is a modern basketball shoe designed for dynamic play and style on and off the court.",
          price: 109.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 16,
          name: "Reebok Kamikaze II",
          description:
            "The Reebok Kamikaze II is a retro basketball shoe inspired by Shawn Kemp's explosive playing style.",
          price: 129.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 17,
          name: "New Balance OMN1S",
          description:
            "The New Balance OMN1S is a high-performance basketball shoe worn by NBA star Kawhi Leonard.",
          price: 159.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 18,
          name: "Converse Pro Leather",
          description:
            "The Converse Pro Leather is a classic basketball shoe with a timeless design and premium materials.",
          price: 99.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 19,
          name: "Anta RR5",
          description:
            "The Anta RR5 is Rajon Rondo's signature basketball shoe, offering exceptional stability and control.",
          price: 129.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
        {
          id: 20,
          name: "Li-Ning YuShuai 13",
          description:
            "The Li-Ning YuShuai 13 is a lightweight basketball shoe with responsive cushioning and excellent traction.",
          price: 149.99,
          imageURL: "https://i.ibb.co/2FWgMj8/Pegasus.png",
        },
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
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("array");
          expect(res.body).to.have.lengthOf(20); // Assuming 20 products are present
          done();
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
          expect(res).to.have.status(204);
          done();
        });
    });

    it("should return 404 if product ID is invalid", (done) => {
      const invalidProductId = 100; // Assuming product with ID 100 does not exist
      chai
        .request(app)
        .delete(`/api/products/${invalidProductId}`)
        .end((err, res) => {
          expect(res).to.have.status(404);
          done();
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
          expect(res).to.have.status(201);
          expect(res.body).to.be.an("object");
          expect(res.body.name).to.equal(newProduct.name);
          expect(res.body.description).to.equal(newProduct.description);
          expect(res.body.price).to.equal(newProduct.price);
          expect(res.body.imageURL).to.equal(newProduct.imageURL);
          done();
        });
    });
  });
});
