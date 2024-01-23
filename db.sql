CREATE TABLE product(
product_id VARCHAR primary key,
product_name VARCHAR not null,
product_price INT not null,
product_image VARCHAR not null
);

INSERT INTO product(product_id,product_name,product_price,product_image) VALUES ('da98s7d9as8d7as98d7','tas', 12000,'https://s0.bukalapak.com/img/57080234251/large/data.png')

CREATE TABLE cart(
cart_id VARCHAR primary key not null,
product_id VARCHAR
);

INSERT INTO cart(cart_id, product_id) 
VALUES 
('2ooi2oi1oiubiub', 'da98s7d9as8d7as98d7')

CREATE TABLE history(
history_id VARCHAR primary key not null,
product_id VARCHAR
);
INSERT INTO history(history_id, product_id) 
VALUES 
('1usaknknaskndials', 'da98s7d9as8d7as98d7')