const User = require('../models/user');
const jwt = require('jsonwebtoken');  // Correct import for jsonwebtoken

const dashboardData = async (req, res) => {
    const { tokenMail } = req.body;
    console.log(tokenMail);

    try {
        // Verify and decode the token using the secret key
        const decodeTokenMail = jwt.verify(tokenMail, process.env.SECRET_JWT);
        const email = decodeTokenMail.email;
        console.log(email);

        // Fetch user data from the database based on the decoded email
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: 'User not found', status: 'error' });
        }

        // Prepare user data
        const userData = {
            name: user.name,
            role: user.role,
            bio:user.bio,
            avatar: user.avatar,
            handle: user.handle,
            links: user.links.length,
        };

        console.log(userData);
        return res.json({ message: 'Success for backend', userData, status: '200' });
        
    } catch (error) {
        console.log(error);
        return res.json({ status: 'error', error: error.message });
    }
};

module.exports = { dashboardData };
