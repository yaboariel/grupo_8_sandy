-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-05-2021 a las 00:20:07
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sandy`
--
CREATE DATABASE IF NOT EXISTS `sandy` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `sandy`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`id`, `nombre`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(0, 'Havaianas', NULL, NULL, NULL),
(1, 'Crocs', NULL, NULL, NULL),
(2, 'Sea Walk ', NULL, NULL, NULL),
(3, 'Grimoldi', NULL, NULL, NULL),
(4, 'Nike', NULL, NULL, NULL),
(5, 'Adidas', NULL, NULL, NULL),
(6, 'Puma', NULL, NULL, NULL),
(7, 'Zara', NULL, NULL, NULL),
(8, 'Paruolo', NULL, NULL, NULL),
(9, 'jaguar', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `prodId` int(11) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `sizeId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `colorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `nombre`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(4, 'Suecos', '2021-05-20 19:18:14', '2021-05-20 19:18:14', '2021-05-20 19:18:14'),
(5, 'Sandalia', '2021-05-20 19:23:06', '2021-05-20 19:23:06', '2021-05-20 19:23:06'),
(8, 'Ojotas', '2021-05-20 19:23:29', '2021-05-20 19:23:29', '2021-05-20 19:23:29'),
(10, 'Zapatos', '2021-05-20 19:23:52', '2021-05-20 19:23:52', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

CREATE TABLE `colors` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `name`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Negro', NULL, NULL, NULL),
(2, 'Blanco', NULL, NULL, NULL),
(3, 'Rojo', NULL, NULL, NULL),
(4, 'Verde', NULL, NULL, NULL),
(5, 'Azul', NULL, NULL, NULL),
(6, 'Amarillo', NULL, NULL, NULL),
(7, 'Marron', NULL, NULL, NULL),
(8, 'Fucsia', NULL, NULL, NULL),
(9, 'Rosa', NULL, NULL, NULL),
(10, 'Violeta', NULL, NULL, NULL),
(11, 'Gris', NULL, NULL, NULL),
(12, 'Naranja', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fotos`
--

CREATE TABLE `fotos` (
  `id` int(11) NOT NULL,
  `filename` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materials`
--

CREATE TABLE `materials` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `materials`
--

INSERT INTO `materials` (`id`, `nombre`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Goma Eva', NULL, NULL, NULL),
(2, 'Cuero', NULL, NULL, NULL),
(3, 'Corcho', NULL, NULL, NULL),
(4, 'Plastico', NULL, NULL, NULL),
(5, 'Cuerina', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prodcart`
--

CREATE TABLE `prodcart` (
  `id` int(11) NOT NULL,
  `prodId` int(11) DEFAULT NULL,
  `cartId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prodsizes`
--

CREATE TABLE `prodsizes` (
  `id` int(11) NOT NULL,
  `prodId` int(11) DEFAULT NULL,
  `sizeId` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `colorId` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prodsizes`
--

INSERT INTO `prodsizes` (`id`, `prodId`, `sizeId`, `stock`, `price`, `colorId`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(8, 4, 4, 30, 1300, 4, NULL, NULL, NULL),
(9, 4, 5, 40, 1650, 5, NULL, NULL, NULL),
(10, 4, 6, 10, 2000, 7, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `brandId` int(11) DEFAULT NULL,
  `materialId` int(11) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `fotoId` int(11) DEFAULT NULL,
  `descuento` int(11) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `destacado` tinyint(4) DEFAULT NULL,
  `genero` tinyint(4) DEFAULT NULL,
  `adulto` tinyint(4) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL,
  `imagen` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `title`, `model`, `brandId`, `materialId`, `categoryId`, `fotoId`, `descuento`, `descripcion`, `destacado`, `genero`, `adulto`, `createdAt`, `updatedAt`, `deletedAt`, `imagen`) VALUES
(3, 'Crocs', 'Crocsband', 0, 1, 4, 0, 50, NULL, 1, 0, 1, '2021-05-22 23:34:04', '2021-05-22 23:34:04', NULL, 'calzados-1621725305287.jpg'),
(4, 'Crocs Clasica para Adultos', 'Crocs Classic', 0, 1, 4, NULL, 15, 'Crocs lisa clasica ', 1, 0, 1, '2021-05-22 23:40:48', '2021-05-25 04:26:53', NULL, 'calzados-1621726848624.jpg'),
(5, 'Havaianas : High End de Dama', 'High', 0, 1, 8, NULL, 30, 'High Con plataforma alta', 1, 1, 1, '2021-05-24 20:08:48', '2021-05-24 20:08:48', NULL, 'calzados-1621886928915.webp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prod_color`
--

CREATE TABLE `prod_color` (
  `id` int(11) NOT NULL,
  `prodId` int(11) DEFAULT NULL,
  `colorId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `prod_color`
--

INSERT INTO `prod_color` (`id`, `prodId`, `colorId`) VALUES
(1, 4, 1),
(2, 4, 2),
(3, 4, 3),
(4, 4, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

CREATE TABLE `sizes` (
  `id` int(11) NOT NULL,
  `number` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`id`, `number`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(0, 35, NULL, NULL, NULL),
(1, 36, NULL, NULL, NULL),
(2, 37, NULL, NULL, NULL),
(3, 38, NULL, NULL, NULL),
(4, 39, NULL, NULL, NULL),
(5, 40, NULL, NULL, NULL),
(6, 41, NULL, NULL, NULL),
(7, 42, NULL, NULL, NULL),
(8, 43, NULL, NULL, NULL),
(9, 44, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `userName` varchar(100) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `cartId` int(11) DEFAULT NULL,
  `usercol` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `deletedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombre`, `apellido`, `address`, `email`, `password`, `userName`, `role`, `image`, `cartId`, `usercol`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'tobias', 'yabo', NULL, 'tobi@gmail.com', '$2a$10$u8A05oo2FtlJq20LfWqbdeOHjodmWg21UzLRiysGv7tH.qpnaSHJG', 'tobiasyabo', 1, 'foto-1621981400647.jpg', NULL, NULL, '2021-05-25 22:23:20', '2021-05-25 22:23:20', NULL),
(2, 'ariel', 'yabo', NULL, 'yaboariel@gmail.com', '$2a$10$zWiaMHtmIhtHpwswRmF7l.ThCUN.aIEkqSmwSCvRlol1cGjXicvr6', 'ariel@gmail.com', 9, 'foto-1621981422473.jpg', NULL, NULL, '2021-05-25 22:23:42', '2021-05-25 22:23:42', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `fotos`
--
ALTER TABLE `fotos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `materials`
--
ALTER TABLE `materials`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `prodcart`
--
ALTER TABLE `prodcart`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `prodsizes`
--
ALTER TABLE `prodsizes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `prod_color`
--
ALTER TABLE `prod_color`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `fotos`
--
ALTER TABLE `fotos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `materials`
--
ALTER TABLE `materials`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `prodcart`
--
ALTER TABLE `prodcart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `prodsizes`
--
ALTER TABLE `prodsizes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `prod_color`
--
ALTER TABLE `prod_color`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_4d58f8d8-c6e7-4ca9-8534-002331756e14` FOREIGN KEY (`brandId`) REFERENCES `brands` (`id`),
  ADD CONSTRAINT `FK_e2a3accb-cd36-4478-ac31-93935d8d4901` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `FK_fa67bf4c-1d5e-4a68-b60c-f3bc55fcb517` FOREIGN KEY (`materialId`) REFERENCES `materials` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;