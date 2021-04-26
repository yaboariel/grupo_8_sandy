CREATE TABLE `products` (
   `id` INT AUTO_INCREMENT,
   `title` VARCHAR(255),
   `model` VARCHAR(255),
   `brandId` INT,
   `materialId` INT,
   `categoryId` INT,
   `fotoId` INT,
   `descuento` INT,
   `descripcion` VARCHAR(255),
   `destacado` TINYINT,
   `genero` TINYINT,
   `adulto` TINYINT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `sizes` (
   `id` INT,
   `number` int,
   PRIMARY KEY (`id`)
);

CREATE TABLE `ProdSize` (
   `id` INT AUTO_INCREMENT,
   `prodId` int,
   `sizeId` INT,
   `stock` int,
   `price` int,
   `colorID` int,
   PRIMARY KEY (`id`)
);

CREATE TABLE `ProdCart` (
   `id` INT,
   `prodId` INT,
   `cartId` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `colors` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `carts` (
   `id` INT,
   `prodId` INT,
   `qty` int,
   `sizeId` int,
   `userId` int,
   PRIMARY KEY (`id`)
);

CREATE TABLE `brands` (
   `id` INT,
   `nombre` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `materials` (
   `id` INT AUTO_INCREMENT,
   `nombre` VARCHAR(100),
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
   `id` INT AUTO_INCREMENT,
   `nombre` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT,
   `nombre` VARCHAR(255),
   `apellido` VARCHAR(255),
   `address` VARCHAR(255),
   `email` VARCHAR(255),
   `password` VARCHAR(255),
   `userName` VARCHAR(255),
   `role` TINYINT,
   `image` VARCHAR(255),
   `cartId` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `fotos` (
   `id` INT AUTO_INCREMENT,
   `filename` VARCHAR(255),
   PRIMARY KEY (`id`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_4d58f8d8-c6e7-4ca9-8534-002331756e14` FOREIGN KEY (`brandId`) REFERENCES `brands`(`id`);

ALTER TABLE `products` ADD CONSTRAINT `FK_fa67bf4c-1d5e-4a68-b60c-f3bc55fcb517` FOREIGN KEY (`materialId`) REFERENCES `materials`(`id`);

ALTER TABLE `products` ADD CONSTRAINT `FK_e2a3accb-cd36-4478-ac31-93935d8d4901` FOREIGN KEY (`categoryId`) REFERENCES `categories`(`id`);

ALTER TABLE `ProdSize` ADD CONSTRAINT `FK_3882a1be-3718-4ca2-adef-4a6643f6b9e2` FOREIGN KEY (`prodId`) REFERENCES `products`(`id`);

ALTER TABLE `ProdSize` ADD CONSTRAINT `FK_11175114-bd12-439e-8693-6ee2b8fbb013` FOREIGN KEY (`sizeId`) REFERENCES `sizes`(`id`);

ALTER TABLE `ProdSize` ADD CONSTRAINT `FK_f49606a5-80b4-4a85-959f-81b20d7044e6` FOREIGN KEY (`colorID`) REFERENCES `colors`(`id`);

ALTER TABLE `ProdCart` ADD CONSTRAINT `FK_90d51bec-9ddc-4ec1-abba-05882b3077e0` FOREIGN KEY (`prodId`) REFERENCES `products`(`id`);

ALTER TABLE `ProdCart` ADD CONSTRAINT `FK_d71abdaa-9b8a-4496-97ce-13b7ca5121d1` FOREIGN KEY (`cartId`) REFERENCES `carts`(`id`);

ALTER TABLE `carts` ADD CONSTRAINT `FK_c09d1337-e02e-4234-a00c-31c0a5d2876f` FOREIGN KEY (`prodId`) REFERENCES `products`(`id`);

ALTER TABLE `carts` ADD CONSTRAINT `FK_f3805bb3-334a-4d59-98a1-1150017c4b00` FOREIGN KEY (`sizeId`) REFERENCES `sizes`(`id`);

ALTER TABLE `carts` ADD CONSTRAINT `FK_f310d5e8-89c5-4f29-b80d-0fa6707c4b93` FOREIGN KEY (`userId`) REFERENCES `users`(`id`);

ALTER TABLE `users` ADD CONSTRAINT `FK_1f7b1bf0-d8e2-447d-a632-bd50c27f9da4` FOREIGN KEY (`cartId`) REFERENCES `carts`(`id`);


