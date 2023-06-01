# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It uses React.js for client-side application with Express.js and Node.js as the backend for defining APIs and routes.

### `INSTALLING DEPENDENCIES:`
To install the dependencies listed in the `package.json` file, you can follow these steps:

1. Make sure you have Node.js and npm (Node Package Manager) installed on your system. You can download and install Node.js from the official website: https://nodejs.org

2. Navigate to the directory containing the package.json file.

4. Open your terminal or command prompt and run the following command to install the dependencies:

```shell
npm install
```

This command will read the `package.json` file and install all the dependencies listed in the `dependencies` section.

5. After running the command, npm will download and install all the required dependencies. This may take a few moments depending on your internet speed.

6. Once the installation is complete, you should see a new folder called `node_modules` in your project directory. This folder contains all the installed dependencies.

Now, you have successfully installed the dependencies specified in the `package.json` file. You can start using these dependencies in your project.

### `Running the client and server applications`
1. Start a local development server to run the clent-side React application. Open your terminal or command prompt, navigate to the project directory, and run the following command:

  ### `npm start`

This command will start the development server and automatically open the application in your default web browser.\

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

2. Start another local server to run the server-side Node.js application. Open your terminal or command prompt, navigate to the project directory, and run the following command:

  ### `node server.js`

This command will set up the server and define the product API endpoints:

3. You should be able to see the product catalog application running in your browser. The application fetches product data from a local API running on http://localhost:3001/api/products.

### `FUTURE IMPROVEMENTS:`
1. Integrate with DB Service Provider, such as MongoDB.
2. Images for each of the shoes.
3. Disaggregate App.js components into individual React components broken down by functionality to make overall file leaner.

### `UI Screenshots & Video Recordings`

**Passing Test Cases**

<img width="441" alt="Screen Shot 2023-05-31 at 9 52 54 AM" src="https://github.com/ks20/Product-Catalog-Website/assets/22456739/b0406c4c-9ca5-44a0-9019-464dd9cecdb0">

**Viewing Products**
https://github.com/ks20/Product-Catalog-Website/assets/22456739/8267e587-fce3-447f-8c0e-61ad18d4c8a0

**Deleting a Product**
https://github.com/ks20/Product-Catalog-Website/assets/22456739/0c01f747-9b96-4318-b039-33afd63fa218

**Adding a Product**
https://github.com/ks20/Product-Catalog-Website/assets/22456739/3090f5fb-d476-4057-9e2d-a51d5da30cbc


## Extra Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
