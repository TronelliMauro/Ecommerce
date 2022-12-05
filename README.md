# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Code Resume ##

In the following code you can find inside the SRC folder different parts that compose this project. 

Starting with the components folder where you can see the components created for the different sections of our site. Here you can find among others the components of:
- "navbar", our top navigation bar.
- "card", where we show the elements of our shop.
- "card-item", where we show the items added to the cart.
- "sidebar", sidebar containing the items added to the cart and the option to buy.
- "spinner", loading spiner graphic for the waiting rendering of the products.
- "Slideshow", component of visualization of images in carousel. 

Another of the parts that we can find has to do with a context made to be able to access the information of the cart in different parts of our project.

Inside the folder "pages" we will find the different sections of our page on which we will be able to navigate through our top navigation bar. Here we will find:
The "Home" where we can access the start of the project that shows us a pre-sale of a product and link to access the landing page of the same.
-We will also find the "products" option where we can see the available products, filter them by categories and select the items to add to the cart, taking into account the stock of the same. Once added to the cart we can access it from the top right of the navigation bar to finalize the purchase. 
-In the section about us, we tell you about the company and an institutional video is presented. 
-In Gallery, we will be able to observe a carousel of photos of the company.
-Finally in contacts we will see the information of the company. 

In the App.js, we can see the navigation paths between the different sections of the project and the rendering of the "Sidebar", which must be able to be used while positioned in any of the sections.

Finally in our index.js we will be able to see the wrapper of our CartProvider to App to access its information in a global way.

## ################ ##



## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
