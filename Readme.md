you have to add that  server.js file into your package.json file 


📌 API Endpoints
🔓 Public

POST /users/register → Register new user

POST /users/login → Login & get JWT token

🔒 Protected (Need JWT Token in Authorization: Bearer <token>)

GET /users/profile → Get logged-in user profile (verify token example)

GET /users → Get all users

PUT /users/:id → Update user

DELETE /users/:id → Delete user
