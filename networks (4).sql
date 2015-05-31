-- phpMyAdmin SQL Dump
-- version 4.3.10
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 31, 2015 at 06:41 PM
-- Server version: 5.5.41-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `networks`
--

-- --------------------------------------------------------

--
-- Table structure for table `album`
--

CREATE TABLE IF NOT EXISTS `album` (
  `id` int(11) NOT NULL,
  `artist` varchar(100) COLLATE utf8_bin NOT NULL,
  `title` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `album`
--

INSERT INTO `album` (`id`, `artist`, `title`) VALUES
(1, 'The  Military  Wives', 'In  My  Dreams'),
(2, 'Adele', '21'),
(3, 'Bruce  Springsteen', 'Wrecking Ball (Deluxe)'),
(4, 'Lana  Del  Rey', 'Born  To  Die'),
(5, 'Gotye', 'Making  Mirrors');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE IF NOT EXISTS `blogs` (
  `id` int(11) NOT NULL,
  `blog_content` text COLLATE utf8_bin NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `blog_content`, `user_id`, `date`) VALUES
(4, '\n    test blog', 44, '1425666479'),
(5, '\n    testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestvvvvv', 44, '1425667276'),
(6, '\n    banderas328@yandex.ru ÑÐ´ÐµÐ»Ð°Ð» ÑÑ‚Ð¾', 44, '1425667573'),
(7, '\r\n    ban', 43, '1425748984'),
(8, '\r\n    babn', 43, '1425750122'),
(9, '\r\n    aaa', 43, '1425750216'),
(10, '\r\n    test', 43, '1425750257'),
(11, '\r\n    test', 43, '1425750289'),
(12, '\r\n    test', 43, '1425750308'),
(13, '\r\n    test', 43, '1425750338'),
(14, '\r\n    test', 43, '1425750374'),
(15, '\r\n    Ñ„Ñ„Ñ„', 44, '1425750880'),
(16, '\r\n    Ñ„Ñ„Ñ„', 44, '1425750959'),
(17, '\r\n    Ñ„Ñ„Ñ„', 44, '1425751007'),
(18, '\r\n    test', 44, '1425754151'),
(19, '\r\n    test', 44, '1425754167'),
(20, '\r\n    banderas ', 44, '1425815209'),
(21, '\r\n    alenka', 43, '1425815303');

-- --------------------------------------------------------

--
-- Table structure for table `blog_attachment`
--

CREATE TABLE IF NOT EXISTS `blog_attachment` (
  `id` int(11) NOT NULL,
  `file_name` varchar(250) COLLATE utf8_bin NOT NULL,
  `blog_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `blog_attachment`
--

INSERT INTO `blog_attachment` (`id`, `file_name`, `blog_id`) VALUES
(8, '/img/blog_images/54fc36a96b4d4abstract-space-wallpaper-space-picture-space-wallpaper.jpg', 20),
(9, '/img/blog_images/54fc37071698c20150303_220127.jpg', 21);

-- --------------------------------------------------------

--
-- Table structure for table `chanels`
--

CREATE TABLE IF NOT EXISTS `chanels` (
  `id` int(11) NOT NULL,
  `chanel_name` varchar(45) DEFAULT NULL,
  `private` tinyint(4) DEFAULT '0',
  `password` varchar(45) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chanels`
--

INSERT INTO `chanels` (`id`, `chanel_name`, `private`, `password`) VALUES
(1, 'networks', 0, NULL),
(2, 'php', 0, NULL),
(3, 'private', 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `chanels_admins`
--

CREATE TABLE IF NOT EXISTS `chanels_admins` (
  `id` int(11) NOT NULL,
  `admins` int(10) DEFAULT NULL,
  `chanel_id` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chanels_admins`
--

INSERT INTO `chanels_admins` (`id`, `admins`, `chanel_id`) VALUES
(3, 43, 3);

-- --------------------------------------------------------

--
-- Table structure for table `chanels_deliver_messages`
--

CREATE TABLE IF NOT EXISTS `chanels_deliver_messages` (
  `id` int(11) NOT NULL,
  `message_id` varchar(250) DEFAULT NULL,
  `delivered` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chanels_deliver_messages`
--

INSERT INTO `chanels_deliver_messages` (`id`, `message_id`, `delivered`) VALUES
(1, '1', NULL),
(2, '2', NULL),
(3, '3', NULL),
(4, '4', NULL),
(5, '5', NULL),
(6, '6', NULL),
(7, '7', NULL),
(8, '8', NULL),
(9, '9', NULL),
(10, '10', NULL),
(11, '11', NULL),
(12, '12', NULL),
(13, '13', NULL),
(14, '14', NULL),
(15, '15', NULL),
(16, '16', NULL),
(17, '17', NULL),
(18, '18', NULL),
(19, '19', NULL),
(20, '20', NULL),
(21, '21', NULL),
(22, '22', NULL),
(23, '23', NULL),
(24, '24', NULL),
(25, '25', NULL),
(26, '26', NULL),
(27, '27', NULL),
(28, '28', NULL),
(29, '29', NULL),
(30, '30', NULL),
(31, '31', NULL),
(32, '32', NULL),
(33, '33', NULL),
(34, '34', NULL),
(35, '35', NULL),
(36, '36', NULL),
(37, '37', NULL),
(38, '38', NULL),
(39, '39', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `chanels_messages`
--

CREATE TABLE IF NOT EXISTS `chanels_messages` (
  `id` int(11) NOT NULL,
  `message` varchar(45) DEFAULT NULL,
  `from_user` int(11) DEFAULT NULL,
  `to_chanel` int(11) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chanels_messages`
--

INSERT INTO `chanels_messages` (`id`, `message`, `from_user`, `to_chanel`, `date`) VALUES
(1, 'banderas', 44, 1, '1417372925'),
(2, 'aaa', 44, 1, '1417372973'),
(3, 'hello', 44, 1, '1417631438'),
(4, 'aaaa', 44, 1, '1417631469'),
(5, 'aaa', 44, 1, '1417631484'),
(6, 'aaaa', 44, 1, '1417631499'),
(7, 'aaa', 44, 1, '1417631615'),
(8, 'Ð¿Ñ€Ð¸Ð²ÐµÑ‚', 44, 1, '1417634137'),
(9, 'ÐºÑ€ÑƒÑ‚Ð¾', 44, 1, '1417634145'),
(10, 'ghbdtn', 44, 1, '1417973592'),
(11, '11', 44, 1, '1417973638'),
(12, '1\n', 44, 1, '1417973644'),
(13, '1', 44, 1, '1417973645'),
(14, '1', 44, 1, '1417973646'),
(15, '1', 44, 1, '1417973648'),
(16, '1', 44, 1, '1417973649'),
(17, '1', 44, 1, '1417973650'),
(18, '1', 44, 1, '1417973651'),
(19, '1', 44, 1, '1417973652'),
(20, '1', 44, 1, '1417973654'),
(21, '1', 44, 1, '1417973655'),
(22, '1', 44, 1, '1417973656'),
(23, '1', 44, 1, '1417973657'),
(24, '1', 44, 1, '1417973658'),
(25, '11', 44, 1, '1417973660'),
(26, '1', 44, 1, '1417973661'),
(27, '1', 44, 1, '1417973666'),
(28, '2', 44, 1, '1417973668'),
(29, '3', 44, 1, '1417973669'),
(30, '4', 44, 1, '1417973670'),
(31, '1', 44, 1, '1417973672'),
(32, '2', 44, 1, '1417973674'),
(33, '3', 44, 1, '1417973675'),
(34, '1', 44, 1, '1417973676'),
(35, '2', 44, 1, '1417973677'),
(36, '1', 44, 1, '1417973678'),
(37, '1', 44, 1, '1417973680'),
(38, '111', 44, 1, '1417974313'),
(39, 'Ð¿Ñ€Ð¸Ð¼Ð°Ñ€Ñ€Ñ€', 44, 1, '1417981924');

-- --------------------------------------------------------

--
-- Table structure for table `deliver_messages`
--

CREATE TABLE IF NOT EXISTS `deliver_messages` (
  `id` int(11) NOT NULL,
  `message_id` int(11) DEFAULT NULL,
  `dilivered` int(1) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `deliver_messages`
--

INSERT INTO `deliver_messages` (`id`, `message_id`, `dilivered`) VALUES
(34, 34, 1),
(35, 35, 1),
(36, 36, 1),
(37, 37, 1),
(38, 38, 1),
(39, 39, 1),
(40, 40, 1),
(41, 41, 1),
(42, 42, 1),
(43, 43, 1),
(44, 44, 1),
(45, 45, 1),
(46, 46, 1),
(47, 47, 1),
(48, 48, 1),
(49, 49, 1),
(50, 50, 1),
(51, 51, 1),
(52, 52, 1),
(53, 53, 1),
(54, 54, 1),
(55, 55, 1),
(56, 56, 1),
(57, 57, 1),
(58, 58, 1),
(59, 59, 1),
(60, 60, 1),
(61, 61, 1),
(62, 62, 1),
(63, 63, 1),
(64, 64, 1),
(65, 65, 1),
(66, 66, 1),
(67, 67, 1),
(68, 68, 1),
(69, 69, 1),
(70, 70, 1),
(71, 71, 1),
(72, 72, 1),
(73, 73, 1),
(74, 74, 1),
(75, 75, 1),
(76, 76, 1),
(77, 77, 1),
(78, 78, 1),
(79, 79, 1),
(80, 80, 1),
(81, 81, 1),
(82, 82, 1),
(83, 83, 1),
(84, 84, 1),
(85, 85, 1),
(86, 86, 1),
(87, 87, 1),
(88, 88, 1),
(89, 89, 1),
(90, 90, 1),
(91, 91, 1),
(92, 92, 1),
(93, 93, 1),
(94, 94, 1),
(95, 95, 1),
(96, 96, 1),
(97, 97, 1),
(98, 98, 1),
(99, 99, 1),
(100, 100, 1),
(101, 101, 1),
(102, 102, 1),
(103, 103, 1),
(104, 104, 1),
(105, 105, 1),
(106, 106, 1),
(107, 107, 1),
(108, 108, 1),
(109, 109, 1),
(110, 110, 1),
(111, 111, 1),
(112, 112, 1),
(113, 113, 1),
(114, 114, 1),
(115, 115, 1),
(116, 116, 1),
(117, 117, 1),
(118, 118, 1),
(119, 119, 1),
(120, 120, 1),
(121, 121, 1),
(122, 122, 1),
(123, 123, 1),
(124, 124, 1),
(125, 125, 1),
(126, 126, 1),
(127, 127, 1),
(128, 128, 1),
(129, 129, 1),
(130, 130, 1),
(131, 131, 1),
(132, 132, 1),
(133, 133, 1),
(134, 134, 1),
(135, 135, 1),
(136, 136, 1),
(137, 137, 1),
(138, 138, 1),
(139, 139, 1),
(140, 140, 1),
(141, 141, 1),
(142, 142, 1),
(143, 143, 1),
(144, 144, 1),
(145, 145, 1),
(146, 146, 1),
(147, 147, 1),
(148, 148, 1);

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE IF NOT EXISTS `files` (
  `id` int(11) NOT NULL,
  `file_name` varchar(250) COLLATE utf8_bin NOT NULL,
  `file_title` varchar(250) COLLATE utf8_bin NOT NULL,
  `user_id` int(11) NOT NULL,
  `directory` int(11) NOT NULL,
  `type` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `files`
--

INSERT INTO `files` (`id`, `file_name`, `file_title`, `user_id`, `directory`, `type`) VALUES
(1, '/userfiles/435560bebab301c30Z4-UNBvYc.jpg', '30Z4-UNBvYc.jpg', 43, 19, 'image/jpeg'),
(2, '/userfiles/435564a2fdbc22230Z4-UNBvYc.jpg', '30Z4-UNBvYc.jpg', 43, 20, 'image/jpeg'),
(3, '/userfiles/435565f11d30e7830Z4-UNBvYc.jpg', '30Z4-UNBvYc.jpg', 43, 21, 'image/jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE IF NOT EXISTS `friends` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`id`, `user_id`, `friend_id`, `status`) VALUES
(6, 43, 44, 1);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE IF NOT EXISTS `messages` (
  `id` int(11) NOT NULL,
  `from_user` int(11) DEFAULT NULL,
  `to_user` int(11) DEFAULT NULL,
  `text` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `date` varchar(10) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=149 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `from_user`, `to_user`, `text`, `date`) VALUES
(34, 43, 44, 'Ð¿Ñ€Ð¸Ð²ÐµÑ‚', '1416850433'),
(35, 43, 44, 'Ð¿Ñ€Ð¸Ð²ÐµÑ‚ ÑÐ½Ð¾Ð²Ð°', '1416850497'),
(36, 44, 43, 'Ð¿Ñ€Ð¸Ð²ÐµÑ‚ Ð¸ Ñ‚ÐµÐ±Ðµ', '1416851008'),
(37, 43, 44, '1\n', '1416853497'),
(38, 43, 44, '1\n', '1416853530'),
(39, 43, 44, '1\n', '1416853530'),
(40, 43, 44, '1\n', '1416853531'),
(41, 43, 44, '1\n', '1416853531'),
(42, 43, 44, '1\n', '1416853531'),
(43, 43, 44, '1\n', '1416853531'),
(44, 43, 44, '1\n', '1416853531'),
(45, 43, 44, '1\n', '1416853532'),
(46, 43, 44, '1\n', '1416853532'),
(47, 43, 44, '1\n', '1416853532'),
(48, 43, 44, '1\n', '1416853532'),
(49, 43, 44, '1\n', '1416853532'),
(50, 43, 44, '1\n', '1416853533'),
(51, 43, 44, '1\n', '1416853533'),
(52, 43, 44, '1\n', '1416853533'),
(53, 43, 44, '1\n', '1416853533'),
(54, 43, 44, '1\n', '1416853533'),
(55, 43, 44, '1\n', '1416853533'),
(56, 43, 44, '1\n', '1416853534'),
(57, 43, 44, '1\n', '1416853534'),
(58, 43, 44, '1\n', '1416853534'),
(59, 43, 44, '1\n', '1416853534'),
(60, 43, 44, '1\n', '1416853535'),
(61, 43, 44, '1\n', '1416853535'),
(62, 43, 44, '1\n', '1416853535'),
(63, 43, 44, '1\n', '1416853535'),
(64, 43, 44, '1\n', '1416853535'),
(65, 43, 44, '1\n', '1416853535'),
(66, 43, 44, '1\n', '1416853536'),
(67, 43, 44, '1\n', '1416853536'),
(68, 43, 44, '1\n', '1416853536'),
(69, 43, 44, '1\n', '1416853536'),
(70, 43, 44, '1\n', '1416853536'),
(71, 43, 44, '1\n', '1416853537'),
(72, 43, 44, '1\n', '1416853537'),
(73, 43, 44, '1\n', '1416853537'),
(74, 43, 44, '1\n', '1416853537'),
(75, 43, 44, '1\n', '1416853537'),
(76, 43, 44, '1\n', '1416853538'),
(77, 43, 44, '1\n', '1416853538'),
(78, 43, 44, '1\n', '1416853538'),
(79, 43, 44, '1\n', '1416853538'),
(80, 43, 44, '1\n', '1416853538'),
(81, 43, 44, '1\n', '1416853538'),
(82, 43, 44, '1\n', '1416853539'),
(83, 43, 44, '1\n', '1416853539'),
(84, 43, 44, '1\n', '1416853539'),
(85, 43, 44, '1\n', '1416853539'),
(86, 43, 44, '1\n', '1416853539'),
(87, 43, 44, '1\n', '1416853540'),
(88, 43, 44, '1\n', '1416853540'),
(89, 43, 44, '1\n', '1416853540'),
(90, 43, 44, '1\n', '1416853540'),
(91, 43, 44, '1\n', '1416853540'),
(92, 44, 43, 'a', '1416853938'),
(93, 44, 43, '2a', '1416853978'),
(94, 44, 43, 'a', '1416854007'),
(95, 44, 43, 'a', '1416854051'),
(96, 44, 43, 'Ð¿Ñ€Ð¸Ð²ÐµÑ‚', '1416854404'),
(97, 43, 44, 'Ñ‚Ñ‹ Ñ‚ÑƒÑ‚ ?', '1416854992'),
(98, 44, 43, 'Ð¸ Ñ Ñ‚ÑƒÑ‚', '1416855164'),
(99, 44, 43, 'Ð¸Ð¸Ð¸Ð¸Ð¸Ð¸', '1416855174'),
(100, 44, 43, 'Ñ„', '1416855183'),
(101, 44, 43, 'Ñ„Ñ„Ñ„', '1416855210'),
(102, 44, 43, 'Ñ„Ñ„Ñ„', '1416855213'),
(103, 44, 43, 'ghbdtn', '1416856053'),
(104, 44, 43, 'ggg', '1416856065'),
(105, 44, 43, 'Ð¿Ñ€Ð¸Ð²ÐµÑ‚', '1416856073'),
(106, 43, 44, 'ghbdtn', '1416856138'),
(107, 43, 44, 'Ð¿Ñ€Ð¸Ð²ÐµÑ‚', '1416856143'),
(108, 44, 43, 'Ñ„Ñ„Ñ„', '1416856179'),
(109, 44, 43, 'Ñ„Ñ„Ñ„', '1416856184'),
(110, 44, 43, 'Ñ„Ñ„Ñ„', '1416856189'),
(111, 44, 43, 'aaa', '1416856315'),
(112, 44, 43, 'aaa', '1416856317'),
(113, 44, 43, 'aaa', '1416856319'),
(114, 44, 43, 'ghbdtn', '1416856363'),
(115, 43, 44, 'Ð¸ Ñ‚ÐµÐ±Ðµ Ð¿Ñ€Ð¸Ð²ÐµÑ‚', '1416856376'),
(116, 43, 44, 'Ð¸ ÑÐ½Ð¾Ð²Ð° Ð¿Ñ€Ð¸Ð²ÐµÑ‚', '1416856405'),
(117, 44, 43, 'Ð¿Ð¿Ð¿', '1416856434'),
(118, 43, 44, 'Ð¿Ð¿Ð¿', '1416856437'),
(119, 44, 43, 'Ð¿Ð¿Ð¿', '1416856465'),
(120, 43, 44, 'Ð¿Ð¿Ð¿', '1416856468'),
(121, 43, 44, 'Ð¿Ð¿Ð¿Ð¿', '1416856472'),
(122, 43, 44, 'Ð¿Ð¿Ð¿Ð¿', '1416856475'),
(123, 43, 44, 'Ð¿Ð¿Ð¿', '1416856479'),
(124, 43, 44, 'Ð¿Ð¿Ð¿', '1416856487'),
(125, 43, 44, 'aaaa', '1416856525'),
(126, 43, 44, 'Ñ€ÑƒÐ´Ð´Ñ‰', '1416856597'),
(127, 43, 44, 'ghbdtn', '1416856603'),
(128, 43, 44, 'hello', '1416856609'),
(129, 44, 43, 'Ð¿Ñ€Ð¸Ð²ÐµÑ‚ Ñ‚ÑƒÑ‚ ÐºÑ€ÑƒÑ‚Ð¾Ð¹', '1416857947'),
(130, 44, 43, 'Ð¿Ñ€Ð¸Ð²ÐµÑ‚ Ñ‚ÑƒÑ‚ ÐºÑ€ÑƒÑ‚Ð¾Ð¹', '1416857949'),
(131, 44, 43, 'Ð¸ Ñ‚ÑƒÑ‚ ÐºÑ€ÑƒÑ‚Ð¾Ð¹', '1417271303'),
(132, 44, 43, 'Ð¿Ñ€Ð¸Ð²ÐµÑ‚', '1417880554'),
(133, 44, 43, 'Ð¿Ñ€Ð¸Ð²ÐµÑ‚', '1417972249'),
(134, 44, 43, 'ÐµÑ‰Ðµ Ñ€Ð°Ð· Ð¿Ñ€Ð¸Ð²ÐµÑ‚\n', '1417972261'),
(135, 43, 44, 'Ð¸ Ñ‚ÐµÐ±Ðµ Ð¿Ñ€Ð¸Ð²ÐµÑ‚', '1417972268'),
(136, 44, 43, 'fff', '1417972999'),
(137, 44, 43, 'aaa', '1417973045'),
(138, 44, 43, 'fff', '1417973203'),
(139, 44, 43, 'aaa', '1417973234'),
(140, 44, 43, 'aaa', '1417973321'),
(141, 44, 43, 'zzz', '1417973333'),
(142, 44, 43, 'Ñ…Ð°Ð¹', '1417981773'),
(143, 43, 44, 'Ñ Ñ‚ÐµÐ±Ñ Ð¾Ð±Ð¾Ð¶Ð°ÑŽ\n', '1417981793'),
(144, 43, 44, 'Ð»ÑŽÐ±Ð»ÑŽ\n', '1417981827'),
(145, 44, 43, 'Ð¸Ñ\n', '1417981847'),
(146, 43, 44, 'Ð¸ Ñ‚ÑƒÑ‚ Ñ‚ÐµÐ±Ðµ Ð¿Ñ€Ð¸Ð²ÐµÑ‚', '1418577809'),
(147, 44, 43, 'Ð¸ ÑÐ½Ð¾Ð²Ð° Ñ‚ÑƒÑ‚ Ñ‚ÐµÐ±Ðµ Ð¿Ñ€Ð¸Ð²ÐµÑ‚', '1418577821'),
(148, 44, 43, '0', '1425836264');

-- --------------------------------------------------------

--
-- Table structure for table `network`
--

CREATE TABLE IF NOT EXISTS `network` (
  `id` int(11) NOT NULL,
  `path_id` int(11) NOT NULL,
  `is_public` int(11) NOT NULL,
  `is_password` int(11) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `network`
--

INSERT INTO `network` (`id`, `path_id`, `is_public`, `is_password`, `password`) VALUES
(1, 2, 0, 1, '123'),
(2, 1, 0, 1, '123'),
(3, 14, 0, 1, '123'),
(4, 16, 0, 1, '123'),
(5, 17, 1, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `payed_files`
--

CREATE TABLE IF NOT EXISTS `payed_files` (
  `id` int(11) NOT NULL,
  `file_id` int(10) NOT NULL,
  `cost` int(11) NOT NULL,
  `description` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `payed_files_to_tags`
--

CREATE TABLE IF NOT EXISTS `payed_files_to_tags` (
  `id` int(11) NOT NULL,
  `tag_id` int(10) NOT NULL,
  `file_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `paypal`
--

CREATE TABLE IF NOT EXISTS `paypal` (
  `id` int(11) NOT NULL,
  `payment_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `payment_status` varchar(250) DEFAULT '0',
  `user_id` int(11) NOT NULL,
  `total` varchar(255) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `paypal`
--

INSERT INTO `paypal` (`id`, `payment_id`, `payment_status`, `user_id`, `total`) VALUES
(0, 'PAY-6P0753883Y650992PKVD2W4A', 'approved', 43, '355.00'),
(2, 'PAY-3L236298RS1204424KVD3CCY', 'finished', 43, '100.00'),
(3, 'PAY-67774224FD4656405KVD3CVQ', 'finished', 43, '100.00'),
(4, 'PAY-5J958211X9366193FKVD3DOA', 'finished', 43, '100.00'),
(5, 'PAY-7WG38108YS4092422KVD3EBI', 'finished', 43, '100.00'),
(6, 'PAY-5R858423304639831KVD3F7Y', 'finished', 43, '100.00'),
(7, 'PAY-6TV15195RU284521LKVD37IQ', 'finished', 43, '75.00'),
(8, 'PAY-6PB78751DN310991HKVD37NQ', 'finished', 43, '75.00'),
(9, 'PAY-8B0969504Y181393MKVD4ALA', 'finished', 43, '100.00'),
(10, 'PAY-76A127138W970543SKVD4BKQ', 'approved', 43, '12.00'),
(11, 'PAY-69D4236660661781JKVD4CYI', 'finished', 43, '56.00'),
(12, 'PAY-9DM41449M1963474CKVD4DDI', 'finished', 43, '55.00'),
(13, 'PAY-4C8115880L110592SKVD4OMA', '0', 43, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `private_chanels_requests`
--

CREATE TABLE IF NOT EXISTS `private_chanels_requests` (
  `id` int(11) NOT NULL,
  `chanel_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `confirmed` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `private_chanels_requests`
--

INSERT INTO `private_chanels_requests` (`id`, `chanel_id`, `user_id`, `confirmed`) VALUES
(1, 3, 43, 1);

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE IF NOT EXISTS `tags` (
  `id` int(11) NOT NULL,
  `name` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL,
  `login` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `email_key` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `activated` tinyint(1) DEFAULT '0',
  `lang` varchar(2) COLLATE utf8_bin DEFAULT 'en'
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `login`, `email`, `password`, `email_key`, `activated`, `lang`) VALUES
(43, 'banderas', 'banderas328@yandex.ru', 'fcc391c6fe3eb0971e52985f20d371d1', '0zykO0O1vaqL2BVwla5CBH3hLh5AgEfMvahXBWXL', 1, 'ru'),
(44, 'alena', 'banderas328@gmail.com', 'fcc391c6fe3eb0971e52985f20d371d1', 'm5xyRzWfmakm4uQpvTRlyxjVexF7bdT7jDmpOfNw', 1, 'ru'),
(45, 'uyra', 'uyra@gmail.com', 'fcc391c6fe3eb0971e52985f20d371d1', '9KdNN2ohgJDrJMCDetGE04vliUP2w8z5RZmv9sty', 1, 'en');

-- --------------------------------------------------------

--
-- Table structure for table `users_filesystem`
--

CREATE TABLE IF NOT EXISTS `users_filesystem` (
  `id` int(11) NOT NULL,
  `path` varchar(45) DEFAULT NULL,
  `parent_path` varchar(45) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users_filesystem`
--

INSERT INTO `users_filesystem` (`id`, `path`, `parent_path`, `user_id`) VALUES
(15, 'test', '0', 44),
(16, 'testpassword', '15', 44),
(17, 'testsimple', '15', 44),
(18, 'hidden', '15', 44),
(19, 'test', '0', 43),
(20, 'test2', '0', 43),
(21, 'slava', '0', 43);

-- --------------------------------------------------------

--
-- Table structure for table `user_settings`
--

CREATE TABLE IF NOT EXISTS `user_settings` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `avatar` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `sex` tinyint(4) DEFAULT NULL,
  `birthdate` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `first_name` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `second_name` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `job` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `country` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `city` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `about` text COLLATE utf8_bin,
  `skype` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `site` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `visibility` tinyint(1) DEFAULT '1'
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `user_settings`
--

INSERT INTO `user_settings` (`id`, `user_id`, `avatar`, `sex`, `birthdate`, `first_name`, `second_name`, `job`, `country`, `city`, `about`, `skype`, `phone`, `site`, `visibility`) VALUES
(5, 43, '/img/avatars/55608982745a18kvYeDqR-Vs.jpg', NULL, NULL, 'anton', 'zhavrid', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 44, '/img/avatars/555cc639090a28kvYeDqR-Vs.jpg', NULL, NULL, 'alena ', 'krutova', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 45, '/img/avatars/545bc9b02f2046mE1Pi6VDKM.jpg', 0, '0', 'uyra', 'samarichev', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wallet`
--

CREATE TABLE IF NOT EXISTS `wallet` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `balance` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `wallet`
--

INSERT INTO `wallet` (`id`, `user_id`, `balance`) VALUES
(3, 43, '7611');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog_attachment`
--
ALTER TABLE `blog_attachment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chanels`
--
ALTER TABLE `chanels`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chanels_admins`
--
ALTER TABLE `chanels_admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chanels_deliver_messages`
--
ALTER TABLE `chanels_deliver_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chanels_messages`
--
ALTER TABLE `chanels_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deliver_messages`
--
ALTER TABLE `deliver_messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `network`
--
ALTER TABLE `network`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payed_files`
--
ALTER TABLE `payed_files`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `payed_files_to_tags`
--
ALTER TABLE `payed_files_to_tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paypal`
--
ALTER TABLE `paypal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `private_chanels_requests`
--
ALTER TABLE `private_chanels_requests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users_filesystem`
--
ALTER TABLE `users_filesystem`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_settings`
--
ALTER TABLE `user_settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallet`
--
ALTER TABLE `wallet`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `album`
--
ALTER TABLE `album`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `blog_attachment`
--
ALTER TABLE `blog_attachment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `chanels`
--
ALTER TABLE `chanels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `chanels_admins`
--
ALTER TABLE `chanels_admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `chanels_deliver_messages`
--
ALTER TABLE `chanels_deliver_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT for table `chanels_messages`
--
ALTER TABLE `chanels_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=40;
--
-- AUTO_INCREMENT for table `deliver_messages`
--
ALTER TABLE `deliver_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=149;
--
-- AUTO_INCREMENT for table `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=149;
--
-- AUTO_INCREMENT for table `network`
--
ALTER TABLE `network`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `payed_files`
--
ALTER TABLE `payed_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `payed_files_to_tags`
--
ALTER TABLE `payed_files_to_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `paypal`
--
ALTER TABLE `paypal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT for table `private_chanels_requests`
--
ALTER TABLE `private_chanels_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=46;
--
-- AUTO_INCREMENT for table `users_filesystem`
--
ALTER TABLE `users_filesystem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `user_settings`
--
ALTER TABLE `user_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `wallet`
--
ALTER TABLE `wallet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
