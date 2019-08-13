-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2019-08-12 22:11:17
-- 服务器版本： 5.7.17-log
-- PHP Version: 7.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `energy_device`
--

--
-- 转存表中的数据 `locations`
--

INSERT INTO `locations` (`id`, `name`, `manager_name`, `manager_phone`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, '1楼203东', '张三', '15811111111', NULL, '2019-07-21 14:20:01', '2019-07-23 01:18:32'),
(2, '1楼204西', '张三', '15811111111', NULL, '2019-07-23 01:18:53', '2019-07-23 01:18:53'),
(3, '1楼207东', '李四', '15822222222', NULL, '2019-07-23 01:19:18', '2019-07-23 01:19:18'),
(4, '1楼209西', '李四', '15822222222', NULL, '2019-07-23 01:19:32', '2019-07-23 01:19:32');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
