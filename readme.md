# Add an user

curl -X POST http://localhost:3000/users ^
-H "Content-Type: application/json" ^
-d "{ \"email\": \"john@gmail.com\", \"password\": \"qwerty\", \"fullname\": \"John Doe\"}"

# Get all users

curl http://localhost:3000/users
