The controllers folder houses the logic that handles requests and responses. Each controller file should focus on a specific resource or functionality. For instance:

// controllers/userController.js
const getUser = (req, res) => {
    // Logic to fetch user data
};


module.exports = {
    getUser,
};