<h1>Inventory Manager</h1>

A MERN stack (MongoDB, Express, React, Node.js) application to keep track of a company's product inventory. Shows analytics of total product amounts and has a search function.

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
Add item records using Create Item button on the Navbar.

Edit or delete records by clicking the corresponding buttons on the table in the main page. 

Items can also be searched for and deleted on the search page. 

## Todo

Implement the search functionality.

Add additional analytics using the MongoDB aggregation pipeline.

Have homepage show 5 most recent inflow and outflow records and show inflow-outflow item total

Add item amount adjustment if inflow minus outflow doesn't match actual inventory