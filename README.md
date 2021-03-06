<h1>Inventory Manager</h1>

A MERN stack (MongoDB, Express, React, Node.js) application to keep track of a company's product inventory. Shows analytics of total product amounts and has a search function.

Frontend deployed using Netlify at: 
<https://law-inventory-manager.netlify.app/>

Backend API deployed using Heroku at:
<https://mern-inventory-manager.herokuapp.com/>

## Installation

Currently a development version. A MongoDB cloud database must first be created. Then create a config.env file and paste your atlas connection URI in it.

All following dependencies must be also installed.
```bash
npm install mongodb express cors axios dotenv bootstrap react-router-dom
npm install -g nodemon
```

Run this on the command prompt in the server folder.
```bash
nodemon server
```

Run this on the command prompt in the client folder. 

```bash
npm start
```
## Usage
Add item records using Create Item button on the top Navbar.

Use the left navigation buttons to access records for items in and out.

Individuals item records can be edited or deleted using the action buttons in the tables.

Items can also be searched for and deleted on the search page. 

If items totals in the home page are inaccurate, use the adjustment action button to add or subtract item total.

## Todo

Add additional analytics using the MongoDB aggregation pipeline.