const axios = require("axios");

const BASE_URL = "http://localhost:3000";

// Get all books
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        if (response.status === 200) {
            return response.data;
        } else {
            return "Unable to fetch books";
        }
    } catch (error) {
        return error.response ? error.response.data : error.message;
    }
}

// Get book by ISBN
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
        if (response.status === 200) {
            return response.data;
        } else {
            return "Book not found";
        }
    } catch (error) {
        return error.response ? error.response.data : error.message;
    }
}

// Get books by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/author/${author}`);
        if (response.status === 200) {
            return response.data;
        } else {
            return "Author not found";
        }
    } catch (error) {
        return error.response ? error.response.data : error.message;
    }
}

// Get books by Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/title/${title}`);
        if (response.status === 200) {
            return response.data;
        } else {
            return "Title not found";
        }
    } catch (error) {
        return error.response ? error.response.data : error.message;
    }
}

module.exports = {
    getAllBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
