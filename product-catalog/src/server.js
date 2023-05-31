const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

// Sample list of products (basketball shoes)
let products = [
  {
    id: 1,
    name: 'Nike Air Zoom Pegasus',
    description: 'The Nike Air Zoom Pegasus is a versatile running shoe designed for all-day comfort and support.',
    price: 129.99,
    imageURL: 'https://example.com/nike_pegasus.jpg',
  },
  {
    id: 2,
    name: 'Adidas Harden Vol. 5',
    description: 'The Adidas Harden Vol. 5 is a signature basketball shoe built for speed and agility on the court.',
    price: 149.99,
    imageURL: 'https://example.com/adidas_harden.jpg',
  },
  {
    id: 3,
    name: 'Under Armour Curry 8',
    description: 'The Under Armour Curry 8 is the latest edition of Stephen Curry\'s signature basketball shoe, offering superior traction and stability.',
    price: 169.99,
    imageURL: 'https://example.com/ua_curry.jpg',
  },
  {
    id: 4,
    name: 'Jordan Why Not Zer0.4',
    description: 'The Jordan Why Not Zer0.4 is Russell Westbrook\'s latest basketball shoe with a unique design and responsive cushioning.',
    price: 159.99,
    imageURL: 'https://example.com/jordan_zer0.4.jpg',
  },
  {
    id: 5,
    name: 'Puma Clyde Court',
    description: 'The Puma Clyde Court is a classic basketball shoe that combines style and performance for the modern game.',
    price: 119.99,
    imageURL: 'https://example.com/puma_clyde.jpg',
  },
  {
    id: 6,
    name: 'Reebok Shaq Attaq',
    description: 'The Reebok Shaq Attaq is a retro basketball shoe made famous by Shaquille O\'Neal in the 90s.',
    price: 139.99,
    imageURL: 'https://example.com/reebok_shaq.jpg',
  },
  {
    id: 7,
    name: 'New Balance Kawhi Leonard',
    description: 'The New Balance Kawhi Leonard is a signature basketball shoe with a focus on stability and support.',
    price: 149.99,
    imageURL: 'https://example.com/nb_kawhi.jpg',
  },
  {
    id: 8,
    name: 'Converse Chuck 70',
    description: 'The Converse Chuck 70 is a timeless basketball shoe known for its iconic design and durable construction.',
    price: 89.99,
    imageURL: 'https://example.com/converse_chuck.jpg',
  },
  {
    id: 9,
    name: 'Anta KT5',
    description: 'The Anta KT5 is Klay Thompson\'s signature basketball shoe, offering lightweight performance and responsiveness.',
    price: 129.99,
    imageURL: 'https://example.com/anta_kt5.jpg',
  },
  {
    id: 10,
    name: 'Li-Ning Way of Wade 9',
    description: 'The Li-Ning Way of Wade 9 is Dwyane Wade\'s latest basketball shoe, featuring innovative cushioning and support technologies.',
    price: 169.99,
    imageURL: 'https://example.com/lining_wow9.jpg',
  },
  // Add 10 more basketball shoes
  {
    id: 11,
    name: 'Nike LeBron 18',
    description: 'The Nike LeBron 18 is LeBron James\'s latest signature basketball shoe, combining style and performance for elite players.',
    price: 199.99,
    imageURL: 'https://example.com/nike_lebron18.jpg',
  },
  {
    id: 12,
    name: 'Adidas Dame 7',
    description: 'The Adidas Dame 7 is Damian Lillard\'s basketball shoe designed for explosive speed and quickness on the court.',
    price: 139.99,
    imageURL: 'https://example.com/adidas_dame7.jpg',
  },
  {
    id: 13,
    name: 'Under Armour HOVR Havoc 3',
    description: 'The Under Armour HOVR Havoc 3 is a versatile basketball shoe with exceptional cushioning and traction.',
    price: 149.99,
    imageURL: 'https://example.com/ua_hovr_havoc3.jpg',
  },
  {
    id: 14,
    name: 'Jordan Jumpman Diamond Mid',
    description: 'The Jordan Jumpman Diamond Mid is a mid-top basketball shoe that provides excellent support and stability.',
    price: 129.99,
    imageURL: 'https://example.com/jordan_diamond_mid.jpg',
  },
  {
    id: 15,
    name: 'Puma Uproar',
    description: 'The Puma Uproar is a modern basketball shoe designed for dynamic play and style on and off the court.',
    price: 109.99,
    imageURL: 'https://example.com/puma_uproar.jpg',
  },
  {
    id: 16,
    name: 'Reebok Kamikaze II',
    description: 'The Reebok Kamikaze II is a retro basketball shoe inspired by Shawn Kemp\'s explosive playing style.',
    price: 129.99,
    imageURL: 'https://example.com/reebok_kamikaze2.jpg',
  },
  {
    id: 17,
    name: 'New Balance OMN1S',
    description: 'The New Balance OMN1S is a high-performance basketball shoe worn by NBA star Kawhi Leonard.',
    price: 159.99,
    imageURL: 'https://example.com/nb_omn1s.jpg',
  },
  {
    id: 18,
    name: 'Converse Pro Leather',
    description: 'The Converse Pro Leather is a classic basketball shoe with a timeless design and premium materials.',
    price: 99.99,
    imageURL: 'https://example.com/converse_proleather.jpg',
  },
  {
    id: 19,
    name: 'Anta RR5',
    description: 'The Anta RR5 is Rajon Rondo\'s signature basketball shoe, offering exceptional stability and control.',
    price: 129.99,
    imageURL: 'https://example.com/anta_rr5.jpg',
  },
  {
    id: 20,
    name: 'Li-Ning YuShuai 13',
    description: 'The Li-Ning YuShuai 13 is a lightweight basketball shoe with responsive cushioning and excellent traction.',
    price: 149.99,
    imageURL: 'https://example.com/lining_yushuai13.jpg',
  },
];

// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Delete a product by ID
app.delete('/api/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((product) => product.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    res.sendStatus(204); // Success with no content
  } else {
    res.sendStatus(404); // Product not found
  }
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
