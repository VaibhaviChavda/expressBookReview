const axios = require("axios");

const BASE_URL = "http://localhost:3000";

// Task 10 - Get all books using async callback function
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        return response.data;
    } catch (err) {
        return err.message;
    }
}

// Task 11 - Get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
        return response.data;
    } catch (err) {
        return err.message;
    }
}

// Task 12 - Get books by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/author/${author}`);
        return response.data;
    } catch (err) {
        return err.message;
    }
}

// Task 13 - Get books by Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/title/${title}`);
        return response.data;
    } catch (err) {
        return err.message;
    }
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
