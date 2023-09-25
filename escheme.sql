CREATE database products_app;

USE products_app;

CREATE TABLE `brand` (
  `id` INT AUTO_INCREMENT, PRIMARY KEY (id),
  `brand_name` varchar(255) NOT NULL,
  reateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);


CREATE TABLE `product` (
  `id` INT AUTO_INCREMENT, PRIMARY KEY (id),
  `product_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `price` integer,
  `stock` integer,
  `brand_id` integer,
  reateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);


ALTER TABLE `product` ADD FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`);


INSERT into brand(brand_name)
VALUES("Sony"), ("Samsung"), ("LG"), ("Toshiba"), ("Acer"), ("HP");

-- Productos para Sony
INSERT INTO product (product_name, description, price, stock, brand_id)
VALUES
  ('Sony Xperia 1 III', 'Teléfono inteligente con pantalla 4K y cámara Zeiss', 999.99, 15, 1),
  ('Sony Bravia XR A90J', 'Televisor OLED 4K con procesador Cognitive XR', 2499.99, 10, 1),
  ('Sony WH-1000XM4', 'Auriculares con cancelación de ruido líderes en la industria', 349.99, 20, 1),
  ('Sony PlayStation 5 Pro', 'Consola de videojuegos de alta potencia y rendimiento', 599.99, 8, 1),
  ('Sony Alpha 7 IV', 'Cámara sin espejo de fotograma completo con 33 MP', 2299.99, 5, 1);

-- Productos para Samsung
INSERT INTO product (product_name, description, price, stock, brand_id)
VALUES
  ('Samsung Galaxy Z Fold 3', 'Teléfono plegable con pantalla flexible', 1499.99, 12, 2),
  ('Samsung Neo QLED QN900A', 'Televisor 8K con Mini LED y Quantum HDR', 3499.99, 6, 2),
  ('Samsung Galaxy Buds Pro', 'Auriculares inalámbricos con sonido envolvente', 199.99, 30, 2),
  ('Samsung Odyssey G9', 'Monitor curvo de juegos ultrapanorámico de 49 pulgadas', 1499.99, 8, 2),
  ('Samsung Portable SSD X5', 'Disco SSD portátil Thunderbolt 3 para alta velocidad', 399.99, 20, 2);

-- Productos para LG
INSERT INTO product (product_name, description, price, stock, brand_id)
VALUES
  ('LG Velvet 2 Pro', 'Teléfono 5G con pantalla OLED y cámara de 48 MP', 799.99, 18, 3),
  ('LG OLED G1 Gallery', 'Televisor OLED 4K delgadamente montado en la pared', 2999.99, 10, 3),
  ('LG TONE Free FN7', 'Auriculares inalámbricos con cancelación de ruido Meridian', 249.99, 25, 3),
  ('LG UltraGear 27GN950-B', 'Monitor 4K UHD para juegos con NVIDIA G-SYNC', 699.99, 15, 3),
  ('LG UltraSlim Portable DVD Writer', 'Unidad de DVD externa para computadoras', 49.99, 40, 3);

-- Productos para Toshiba
INSERT INTO product (product_name, description, price, stock, brand_id)
VALUES
  ('Toshiba Tecra X50', 'Laptop empresarial ultradelgada con CPU Intel', 999.99, 10, 4),
  ('Toshiba Fire TV', 'Televisor inteligente Fire TV 4K HDR', 499.99, 15, 4),
  ('Toshiba Canvio Basics', 'Disco duro externo portátil de 2 TB', 79.99, 30, 4),
  ('Toshiba Satellite Pro', 'Laptop para uso profesional y tareas diarias', 699.99, 12, 4),
  ('Toshiba Dynabook Portégé', 'Laptop de alta gama para negocios y productividad', 1199.99, 8, 4);

-- Productos para Acer
INSERT INTO product (product_name, description, price, stock, brand_id)
VALUES
  ('Acer Predator Helios 300', 'Laptop para juegos con GPU NVIDIA RTX', 1299.99, 8, 5),
  ('Acer Nitro VG271U', 'Monitor de juegos IPS 1440p con frecuencia de actualización rápida', 399.99, 20, 5),
  ('Acer Aspire 5', 'Laptop para tareas cotidianas y multitarea', 599.99, 15, 5),
  ('Acer Chromebook Spin 713', 'Chromebook 2 en 1 con pantalla táctil QHD', 699.99, 10, 5),
  ('Acer Predator Orion 9000', 'PC de escritorio para juegos con CPU Intel Core i9', 2999.99, 5, 5);

-- Productos para HP
INSERT INTO product (product_name, description, price, stock, brand_id)
VALUES
  ('HP Spectre x360', 'Laptop convertible premium con pantalla OLED', 1499.99, 12, 6),
  ('HP ENVY Photo 7155', 'Impresora fotográfica todo en uno con Wi-Fi', 199.99, 30, 6),
  ('HP Omen 30L', 'PC de escritorio para juegos con GPU NVIDIA RTX', 1699.99, 8, 6),
  ('HP 27er', 'Monitor de pantalla ancha Full HD con diseño sin bordes', 249.99, 20, 6),
  ('HP LaserJet Pro MFP M281fdw', 'Impresora láser multifunción inalámbrica', 349.99, 15, 6);

