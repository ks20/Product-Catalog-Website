const express = require("express");
const cors = require("cors");
// const mongoose = require("mongoose");

const app = express();
app.use(
  cors({ origin: "http://localhost:3000", methods: ["GET", "POST", "DELETE"] })
);

app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/product_catalog", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.log("Failed to connect to MongoDB", error));

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   imageURL: { type: String, required: true },
// });

// const Product = mongoose.model('Product', productSchema);

// Sample list of products (basketball shoes)
let products = [
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

// Get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Delete a product by ID
app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    res.sendStatus(204); // Success with no content
  } else {
    res.sendStatus(404); // Product not found
  }
});

// Add a new product
app.post("/api/products", (req, res) => {
  const { name, description, price, imageURL } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    description,
    price,
    imageURL,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// app.get('/api/products', async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.post('/api/products', async (req, res) => {
//   try {
//     const { name, description, price, imageURL } = req.body;
//     const newProduct = new Product({ name, description, price, imageURL });
//     await newProduct.save();
//     res.status(201).json(newProduct);
//   } catch (error) {
//     res.status(400).json({ error: 'Bad request' });
//   }
// });

// app.delete('/api/products/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedProduct = await Product.findByIdAndDelete(id);
//     if (!deletedProduct) {
//       return res.status(404).json({ error: 'Product not found' });
//     }
//     res.sendStatus(204);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;