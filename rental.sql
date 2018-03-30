-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2017-10-29 07:57:00
-- 服务器版本： 5.7.14
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rental`
--

-- --------------------------------------------------------

--
-- 表的结构 `rental_room`
--

CREATE TABLE `rental_room` (
  `id` int(11) NOT NULL,
  `floor` varchar(255) DEFAULT NULL COMMENT '楼栋号',
  `storey` varchar(255) DEFAULT NULL COMMENT '楼层',
  `room` varchar(255) NOT NULL COMMENT '房间号',
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `rental_room`
--

INSERT INTO `rental_room` (`id`, `floor`, `storey`, `room`, `created_at`, `updated_at`) VALUES
(1, '9', '4', '402', '2017-10-22 03:50:17', '2017-10-22 03:50:17');

-- --------------------------------------------------------

--
-- 表的结构 `rental_users`
--

CREATE TABLE `rental_users` (
  `id` int(255) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(100) NOT NULL,
  `access_token` varchar(100) DEFAULT NULL,
  `access_expire` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `rental_users`
--

INSERT INTO `rental_users` (`id`, `username`, `password`, `access_token`, `access_expire`, `created_at`, `updated_at`) VALUES
(1, 'zlz', '202cb962ac59075b964b07152d234b70', '8daa5c75a76e588a8bb9df42775b40fe', '1509265385', '2017-10-29 07:23:05', '2017-10-29 07:23:05');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rental_room`
--
ALTER TABLE `rental_room`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rental_users`
--
ALTER TABLE `rental_users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `rental_room`
--
ALTER TABLE `rental_room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- 使用表AUTO_INCREMENT `rental_users`
--
ALTER TABLE `rental_users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
