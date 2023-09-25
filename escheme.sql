CREATE database products_app;

USE products_app;

CREATE TABLE `brand` (
  `id` integer PRIMARY KEY,
  `brand_name` varchar(255)
);

CREATE TABLE `product` (
  `id` integer PRIMARY KEY,
  `product_name` varchar(255),
  `description` text COMMENT 'Content of the post',
  `price` integer,
  `stock` integer,
  `brand_id` integer
);

ALTER TABLE `product` ADD FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`);
