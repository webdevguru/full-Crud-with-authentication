const jwt = require("jsonwebtoken");

// ✅ Verify Token Middleware
const auth = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // "Bearer token"
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, "secretkey"); // verify token
    req.user = decoded.userId; // attach userId with request
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = auth;
