
## Example SQL Table Creation Queries

```sql
-- Create users table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(100),
  email VARCHAR(100),
  city VARCHAR(100)
);

-- Create address table
CREATE TABLE address (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  street VARCHAR(200),
  city VARCHAR(100),
  zipcode VARCHAR(20)
);
```

## Example SQL Insert Queries

```sql
-- Insert into users table
INSERT INTO users (username, email, city)
VALUES ('umashankar', 'umashankr@gmail.com', ',); drop table users;');

-- Insert into address table
INSERT INTO address (user_id, street, city, zipcode)
VALUES (1, '123 Main St', 'Delhi', '110001');
```
