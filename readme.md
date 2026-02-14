# Create transaction

curl -X POST http://localhost:3000/transactions ^
-H "Content-Type: application/json" ^
-d "{ \"email\": \"john@gmail.com\", \"name\": \"John\", \"package_id\": \"super\"}"

# Get all users

curl http://localhost:3000/users
