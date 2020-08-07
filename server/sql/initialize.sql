-- CREATE database if not exists skate_data;

-- USE skate_data;

DROP TABLE IF EXISTS spots, social, users;

CREATE TABLE users (
  User_ID INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(50) NOT NULL,
  user_password VARCHAR(100) NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  state VARCHAR(2) NOT NULL,
  PRIMARY KEY (User_ID)
);

CREATE TABLE spots (
  spot_id INT NOT NULL AUTO_INCREMENT,
  spot_name VARCHAR(45) NOT NULL,
  spot_address VARCHAR(60) NOT NULL,
  photo_1 VARCHAR(200) NOT NULL, 
  PRIMARY KEY (spot_id)
);

CREATE TABLE social (
  id INT NOT NULL AUTO_INCREMENT,
  User_id INT NOT NULL,
  comments VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (User_id)
  REFERENCES users (User_ID)
    ON DELETE CASCADE
);

INSERT INTO users
  (user_name, user_password, first_name, last_name, email, city, state)
VALUES
  ("skateguy123", "$2y$10$DlPOLxMgk8mzzS3SnWg8g.LPQsdmTBArv8OeX/7Zo60j57N.MSl1e", "John", "Doe", "help@gmail.com", "Austin", "TX");

INSERT INTO spots
  (spot_name, spot_address, photo_1)
VALUES
  ('Red Rail', "301 W 2nd St, Austin, TX 78701", 'https://www.skatedeluxe.com/blog/wp-content/uploads/2018/09/obsctacle-guide-handrail.jpg'),
  ('Amli Rail', '5350 Burnet Rd, Austin, TX 78756', 'http://www.skatespots.co/imageBank/f72b2084-2088-4485-98a1-9732854ce4e5.jpg?width=900&height=900&bgcolor=white'),
  ('14 Stair', '904 San Antonio St, Austin, TX 78701', 'http://www.skatespots.co/imageBank/f55475a2-bf7a-4aa1-af0f-4715f6e33f6e.jpg?width=900&height=900&bgcolor=white'),
  ('Austin High Ditch', '2100 Stephen F. Austin Dr, Austin, TX 78703', 'http://www.skatespots.co/imageBank/190cc500-8171-41c8-ae07-7df1adc84505.jpg?width=900&height=900&bgcolor=white'),
  ('Blanton Metal Ledges', '200 E MLK Jr Blvd, Austin, TX 78712', 'http://www.skatespots.co/imageBank/49b09dcb-e4c8-42e6-8dd3-7161b496f619.jpg?width=900&height=900&bgcolor=white')


