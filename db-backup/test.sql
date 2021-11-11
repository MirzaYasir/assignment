-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 11, 2021 at 10:24 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `title`, `description`, `price`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'adsfasdf', 'upddate value of adsfasdf again', 100, '2021-11-10 23:57:48', '2021-11-11 09:05:03', NULL),
(2, 'item 2', 'soem description yasir', 100, '2021-11-11 05:03:31', '2021-11-11 09:05:09', NULL),
(3, 'item 3', 'some description', 1100, '2021-11-11 05:03:31', NULL, NULL),
(4, 'asdf', 'asdfasdf', 342, '2021-11-11 02:47:22', NULL, NULL),
(5, 'asdf', 'asdfasdf', 342, '2021-11-11 02:48:13', NULL, NULL),
(6, 'new item', 'asdfasd', 343, '2021-11-11 02:51:25', NULL, NULL),
(7, 'another', 'some description of another', 434, '2021-11-11 02:56:33', NULL, NULL),
(8, 'asdf', NULL, 343, '2021-11-11 02:57:19', NULL, NULL),
(9, 'asdf', 'some description', 343, '2021-11-11 03:18:48', NULL, NULL),
(10, 'asdf', 'some another description', 343, '2021-11-11 03:19:03', NULL, NULL),
(11, 'new item 342', 'asdfasdf', 232, '2021-11-11 03:22:58', NULL, NULL),
(12, 'Product 1', 'This is our product number 1 updated.', 100, '2021-11-11 04:13:46', NULL, NULL),
(13, 'Product 2', 'This is our product 2.', 1200, '2021-11-11 04:14:45', NULL, NULL),
(14, 'Product 2', 'Some description updated', 100, '2021-11-11 08:53:34', NULL, NULL),
(15, 'new item again', 'new item again description', 1240, '2021-11-11 09:06:08', '2021-11-11 09:06:17', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
