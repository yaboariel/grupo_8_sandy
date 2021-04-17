CREATE TABLE `Product` (
   `id` INT AUTO_INCREMENT,
   `title` VARCHAR(255),
   `model` VARCHAR(255),
   `brand_id` VARCHAR(255),
   `material_id` VARCHAR(255),
   `category_id` VARCHAR(255),
   `foto_id` INT AUTO_INCREMENT,
   `descuento` int,
   `descripcion` VARCHAR(255),
   `destacado` TINYINT,
   `genero` TINYINT,
   `adulto` TINYINT,
   `color_id` TINYINT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Size` (
   `id` INT,
   `number` int,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Prod_size` (
   `id` INT AUTO_INCREMENT,
   `prodid` int,
   `sizeid` INT,
   `stock` int,
   `price` int,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Prod_color` (
   `id` int,
   `prod_id` int,
   `color_id` int,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Prod_cart` (
   `id` INT,
   `prodid` INT,
   `cartid` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Color` (
   `id` INT AUTO_INCREMENT,
   `name` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `Cart` (
   `id` INT,
   `prodid` INT,
   `qty` int,
   `sizeid` int,
   `userid` int,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Brand` (
   `id` INT,
   `nombre` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `Material` (
   `id` INT AUTO_INCREMENT,
   `nombre` INT AUTO_INCREMENT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Category` (
   `id` INT AUTO_INCREMENT,
   `nombre` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `User` (
   `id` INT,
   `nombre` VARCHAR(255),
   `apellido` VARCHAR(255),
   `address` VARCHAR(255),
   `email` VARCHAR(255),
   `password` VARCHAR(255),
   `username` VARCHAR(255),
   `role` TINYINT,
   `image` VARCHAR(255),
   `cartid` INT,
   PRIMARY KEY (`id`)
);

CREATE TABLE `Foto` (
   `id` INT AUTO_INCREMENT,
   `filename` VARCHAR(255),
   PRIMARY KEY (`id`)
);


ALTER TABLE `Product` ADD CONSTRAINT `FK_4d58f8d8-c6e7-4ca9-8534-002331756e14` FOREIGN KEY (`brand_id`) REFERENCES `Brand`(`id`);

ALTER TABLE `Product` ADD CONSTRAINT `FK_fa67bf4c-1d5e-4a68-b60c-f3bc55fcb517` FOREIGN KEY (`material_id`) REFERENCES `Material`(`id`);

ALTER TABLE `Product` ADD CONSTRAINT `FK_e2a3accb-cd36-4478-ac31-93935d8d4901` FOREIGN KEY (`category_id`) REFERENCES `Category`(`id`);

ALTER TABLE `Prod_size` ADD CONSTRAINT `FK_3882a1be-3718-4ca2-adef-4a6643f6b9e2` FOREIGN KEY (`prodid`) REFERENCES `Product`(`id`);

ALTER TABLE `Prod_size` ADD CONSTRAINT `FK_11175114-bd12-439e-8693-6ee2b8fbb013` FOREIGN KEY (`sizeid`) REFERENCES `Size`(`id`);

ALTER TABLE `Prod_color` ADD CONSTRAINT `FK_2abd7455-6d34-4347-988b-37cc69341486` FOREIGN KEY (`color_id`) REFERENCES `Color`(`id`);

ALTER TABLE `Prod_cart` ADD CONSTRAINT `FK_90d51bec-9ddc-4ec1-abba-05882b3077e0` FOREIGN KEY (`prodid`) REFERENCES `Product`(`id`);

ALTER TABLE `Prod_cart` ADD CONSTRAINT `FK_d71abdaa-9b8a-4496-97ce-13b7ca5121d1` FOREIGN KEY (`cartid`) REFERENCES `Cart`(`id`);

ALTER TABLE `Cart` ADD CONSTRAINT `FK_c09d1337-e02e-4234-a00c-31c0a5d2876f` FOREIGN KEY (`prodid`) REFERENCES `Product`(`id`);

ALTER TABLE `Cart` ADD CONSTRAINT `FK_f3805bb3-334a-4d59-98a1-1150017c4b00` FOREIGN KEY (`sizeid`) REFERENCES `Size`(`id`);

ALTER TABLE `Cart` ADD CONSTRAINT `FK_f310d5e8-89c5-4f29-b80d-0fa6707c4b93` FOREIGN KEY (`userid`) REFERENCES `User`(`id`);

ALTER TABLE `User` ADD CONSTRAINT `FK_1f7b1bf0-d8e2-447d-a632-bd50c27f9da4` FOREIGN KEY (`cartid`) REFERENCES `Cart`(`id`);
