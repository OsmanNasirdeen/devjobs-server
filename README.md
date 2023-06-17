# Devjobs web app server

> A back-end server to provide data of vacancies (developers jobs) to clients. Users can request and filter data to match opportunities in their area and profession.
>
> #### Visit live site [_here_](https://server-devjobs.onrender.com/).

---

# Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup](#setup)
- [How To Use](#how-to-use)
- [License](#license)
- [Author](#author)

---

# Description

developer jobs(Devjobs) app server/API providing endpoints for clients to request and get up-to-date data of vacancies in the developer community. Clients can request for general data or filtered data which match opportunities in a specific field.

---

# Technologies Used

The Project is created with:

- node: ">=6.0.0"
- express js: "^4.18.2"
- json data

---

# Features

- provides up-to-date data of current vacancies
- provides data that matches clients requirements

---

# Setup

To clone and run this application, you'll need to first have Git and Node.js (npm) installed on your computer. From your command line type the following:

## Clone this repository

$ git clone https://github.com/OsmanNasirdeen/devjobs-server.git

## Go into the repository

$ cd ./devjobs-server

## Install dependencies

$ npm install

## Run the app

$ npm start

```
$ cd ./devjobs-server
$ npm install
$ npm start
```

---

# How To Use

## References

---

` server/API URL`:

```javascript
const serverUrl = https://server-devjobs.onrender.com
```

The server is hosted on this [SERVER](https://server-devjobs.onrender.com). Users can only filter data from the API by job position title, job location and whether a post is full-time.

[Back To The Top](#devjobs-web-app-server)

## API Reference

```javascript
// get all data from API
const getAllData = fetch(`https://server-devjobs.onrender.com/`);

// get all data which match specific location from API
const specificLocationData = fetch(
  `https://server-devjobs.onrender.com/locations/locationName`
);
// get all data of a particular category(title) from API
const certainCategoryData = fetch(
  `https://server-devjobs.onrender.com/category/categoryName`
);
// get specific data from API by passing multiple strings(search values)
const filterByQueryStrings = fetch(
  `https://server-devjobs.onrender.com/positions?position=position-title&location=location-name&contract=(full-time/part-time)`
);
```

### API Demo

---

#### ` (1) This will return an array of all available vacancies from The server`;

```javascript
const getAllData = fetch(`https://server-devjobs.onrender.com/`);
```

#### ` (2) This will return an array of all data whose location is Ghana from The server`;

```javascript
const specificLocationData = fetch(
  `https://server-devjobs.onrender.com/locations/Ghana`
);
```

#### `(3) This will return an array of all data whose position name contains the keyword "software engineer" from The sever`

```javascript
const certainCategoryData = fetch(
  `https://server-devjobs.onrender.com/category/software engineer`
);
```

#### `(4) This will return an array of all data which position name contains software  enginner and location name is Ghana`

```javascript
const filterByQueryStrings = fetch(
  `https://server-devjobs.onrender.com/positions?position=software engineer&location=Ghana
);
```

[Back To The Top](#devjobs-web-app-server)

---

# License

MIT License

Copyright (c) [2023] Osman Nasirdeen

---

# Author

- LinkedIn - [Osman Nasirdeen](https://www.linkedin.com/in/osman-nasirdeen/)
- Github - [OsmanNasirdeen](https://github.com/OsmanNasirdeen)

[Back To The Top](#devjobs-web-app-server)
