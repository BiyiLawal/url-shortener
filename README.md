---

# URL Shortener Service

## Overview

This project is a **Node.js-based URL shortening service** that provides functionality to create shortened URLs, retrieve original URLs, and track usage statistics. The service offers both a backend RESTful API and a frontend interface that users can interact with. 
I got the idea from [roadmap](roadmap.sh) and you can see more details of the project [here](https://roadmap.sh/projects/url-shortening-service)

## Features

### 1. URL Shortening
- **Feature:** Shorten any valid URL into a smaller, custom-generated link.
- **How it works:** Users send a request to the API with the original URL, and a short code is generated and stored alongside the original URL in the database.
- **API Endpoint:** `/api/shorten`
- **Method:** POST
- **Request Body:**
    ```json
    {
      "originalUrl": "https://example.com/very/long/url"
    }
    ```

### 2. URL Redirection
- **Feature:** Redirect users to the original URL using the shortened URL.
- **How it works:** When the short URL is accessed, the service looks up the original URL in the database and redirects the user to it.
- **API Endpoint:** `/api/:shortCode`
- **Method:** GET
- **Response:** Redirects the user to the original URL.

### 3. Usage Statistics
- **Feature:** Track the number of times each short URL is accessed.
- **How it works:** Each time a short URL is accessed, a counter associated with the short URL is incremented.
- **API Endpoint:** `/api/:shortCode/stats`
- **Method:** GET
- **Response Example:**
    ```json
    {
      "shortCode": "abc123",
      "originalUrl": "https://example.com",
      "clickCount": 10
    }
    ```

### 4. Frontend Interface
- **Feature:** A simple, user-friendly frontend for users to interact with the service.
- **How it works:** Users can input URLs to shorten and are provided with a shortened link. They can also see the usage statistics of their shortened links.
- **Stack:** HTML, CSS, JavaScript (Fetch API).

### 5. Error Handling
- **Feature:** Error responses for invalid URLs or missing parameters.
- **How it works:** Proper error messages are returned if users try to shorten an invalid URL or if required data is missing.

## Setup Instructions

### Prerequisites
- **Node.js** installed on your local machine
- **MongoDB** installed and running locally or using a cloud service (e.g., MongoDB Atlas)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/url-shortener.git
    cd url-shortener
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:
    ```
    MONGO_URI=mongodb://localhost:27017/urlshortener
    PORT=5000
    BASE_URL=http://localhost:5000
    ```

4. Run the server:
    ```bash
    npm run dev
    ```

5. Access the frontend by opening `index.html` in your browser.

## API Documentation

### 1. Shorten URL
- **Endpoint:** `/api/shorten`
- **Method:** POST
- **Request Body:**
    ```json
    {
      "originalUrl": "https://example.com"
    }
    ```
- **Response:**
    ```json
    {
      "shortUrl": "http://localhost:5000/abc123"
    }
    ```

### 2. Redirect to Original URL
- **Endpoint:** `/api/:shortCode`
- **Method:** GET
- **Response:** Redirects to the original URL.

### 3. Get Usage Statistics
- **Endpoint:** `/api/:shortCode/stats`
- **Method:** GET
- **Response:**
    ```json
    {
      "shortCode": "abc123",
      "originalUrl": "https://example.com",
      "clickCount": 10
    }
    ```

## Testing

To run tests:
```bash
npm test
```

## Future Improvements

- **Custom URL:** Allow users to specify custom short codes.
- **Expiration:** Enable URLs to have an expiration date.

---
