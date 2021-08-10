-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 10 2021 г., 22:09
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `networks`
--

-- --------------------------------------------------------

--
-- Структура таблицы `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `blog_content` text COLLATE utf8_bin NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` varchar(50) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `blogs`
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
(21, '\r\n    alenka', 43, '1425815303'),
(22, '\n    test', 48, '1605026445'),
(23, '\n    test', 48, '1605026614'),
(24, '\n    anton', 48, '1605026694'),
(25, '\n    test', 47, '1606986285');

-- --------------------------------------------------------

--
-- Структура таблицы `blog_attachment`
--

CREATE TABLE `blog_attachment` (
  `id` int(11) NOT NULL,
  `file_name` varchar(250) COLLATE utf8_bin NOT NULL,
  `blog_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `blog_attachment`
--

INSERT INTO `blog_attachment` (`id`, `file_name`, `blog_id`) VALUES
(8, '/img/blog_images/54fc36a96b4d4abstract-space-wallpaper-space-picture-space-wallpaper.jpg', 20),
(9, '/img/blog_images/54fc37071698c20150303_220127.jpg', 21),
(10, '/img/blog_images/5faac3366711e1404294077_2111914196.jpg', 23),
(11, '/img/blog_images/5faac386513441404294077_2111914196.jpg', 24),
(12, '/img/blog_images/5fc8aa2d2c1dbphoto_2018-12-21_14-43-27.jpg', 25);

-- --------------------------------------------------------

--
-- Структура таблицы `boards`
--

CREATE TABLE `boards` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `project_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `boards`
--

INSERT INTO `boards` (`id`, `name`, `project_id`) VALUES
(1, 'tesrt', 1),
(2, 'tesrt', 1),
(3, 'test', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `board_users`
--

CREATE TABLE `board_users` (
  `id` int(11) NOT NULL,
  `board_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `board_users`
--

INSERT INTO `board_users` (`id`, `board_id`, `user_id`) VALUES
(1, 2, 47),
(2, 3, 47);

-- --------------------------------------------------------

--
-- Структура таблицы `chanels`
--

CREATE TABLE `chanels` (
  `id` int(11) NOT NULL,
  `chanel_name` varchar(45) DEFAULT NULL,
  `private` tinyint(4) DEFAULT 0,
  `password` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `chanels`
--

INSERT INTO `chanels` (`id`, `chanel_name`, `private`, `password`) VALUES
(12, 'public', 0, NULL),
(13, 'private', 1, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `chanels_admins`
--

CREATE TABLE `chanels_admins` (
  `id` int(11) NOT NULL,
  `admins` int(10) DEFAULT NULL,
  `chanel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `chanels_admins`
--

INSERT INTO `chanels_admins` (`id`, `admins`, `chanel_id`) VALUES
(6, 47, 12),
(7, 47, 13);

-- --------------------------------------------------------

--
-- Структура таблицы `chanels_deliver_messages`
--

CREATE TABLE `chanels_deliver_messages` (
  `id` int(11) NOT NULL,
  `message_id` varchar(250) DEFAULT NULL,
  `delivered` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `chanels_deliver_messages`
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
(39, '39', NULL),
(40, '40', NULL),
(41, '41', NULL),
(42, '42', NULL),
(43, '43', NULL),
(44, '44', NULL),
(45, '45', NULL),
(46, '46', NULL),
(47, '47', NULL),
(48, '48', NULL),
(49, '49', NULL),
(50, '50', NULL),
(51, '51', NULL),
(52, '52', NULL),
(53, '53', NULL),
(54, '54', NULL),
(55, '55', NULL),
(56, '56', NULL),
(57, '57', NULL),
(58, '58', NULL),
(59, '59', NULL),
(60, '60', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `chanels_messages`
--

CREATE TABLE `chanels_messages` (
  `id` int(11) NOT NULL,
  `message` varchar(45) DEFAULT NULL,
  `from_user` int(11) DEFAULT NULL,
  `to_chanel` int(11) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `chanels_messages`
--

INSERT INTO `chanels_messages` (`id`, `message`, `from_user`, `to_chanel`, `date`) VALUES
(47, 'privet\n', 48, 12, '1605986221'),
(48, 'i tebe privet\n', 47, 12, '1605986246'),
(49, 'test', 47, 10, '1605987657'),
(50, 'test', 48, 10, '1605987679'),
(51, 'anton', 47, 10, '1605987702'),
(52, 'test', 47, 10, '1605988345'),
(53, 'test', 48, 13, '1605988378'),
(54, 'private', 48, 13, '1605988396'),
(55, 'test]\n\n', 47, 13, '1605988565'),
(56, 'test', 47, 13, '1605988704'),
(57, 'test', 48, 13, '1605988837'),
(58, 'test', 47, 13, '1605989418'),
(59, 'test', 47, 12, '1614074172'),
(60, 'WERWER', 47, 12, '1616851857');

-- --------------------------------------------------------

--
-- Структура таблицы `deliver_messages`
--

CREATE TABLE `deliver_messages` (
  `id` int(11) NOT NULL,
  `message_id` int(11) DEFAULT NULL,
  `dilivered` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `deliver_messages`
--

INSERT INTO `deliver_messages` (`id`, `message_id`, `dilivered`) VALUES
(157, 157, NULL),
(158, 158, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `file_name` varchar(250) COLLATE utf8_bin NOT NULL,
  `file_title` varchar(250) COLLATE utf8_bin NOT NULL,
  `user_id` int(11) NOT NULL,
  `directory` int(11) NOT NULL,
  `type` varchar(50) COLLATE utf8_bin NOT NULL,
  `shared` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `files`
--

INSERT INTO `files` (`id`, `file_name`, `file_title`, `user_id`, `directory`, `type`, `shared`) VALUES
(1, '/userfiles/435560bebab301c30Z4-UNBvYc.jpg', '30Z4-UNBvYc.jpg', 43, 19, 'image/jpeg', 0),
(2, '/userfiles/435564a2fdbc22230Z4-UNBvYc.jpg', '30Z4-UNBvYc.jpg', 43, 20, 'image/jpeg', 0),
(3, '/userfiles/435565f11d30e7830Z4-UNBvYc.jpg', '30Z4-UNBvYc.jpg', 43, 21, 'image/jpeg', 0),
(4, '/userfiles/445738c9b764558Ð ÐµÐ·ÑŽÐ¼Ðµ.docx', 'Ð ÐµÐ·ÑŽÐ¼Ðµ.docx', 44, 18, 'application/octet-stream', 0),
(9, '/userfiles/465f8f28cd7071aAntonZhauryd_CV (1).pdf', 'AntonZhauryd_CV (1).pdf', 46, 22, 'application/pdf', 0),
(16, '/userfiles/485fb3c01260bebcsv.txt', 'csv.txt', 48, 29, 'text/plain', 0),
(17, '/userfiles/48/485fb3c6b02d004servers.txt', 'servers.txt', 48, 0, 'text/plain', 0),
(18, '/userfiles/48/485fb56e1ac1df8csv.txt', 'csv.txt', 48, 29, 'text/plain', 0),
(21, 'userfiles/47/4760354c6fbede3Magento 2 Cookbook - Ray Bogman .pdf', 'Magento 2 Cookbook - Ray Bogman .pdf', 47, 34, 'application/pdf', 0),
(22, 'userfiles/47/4760354c7f1a7f2Magento 2 Cookbook - Ray Bogman .pdf', 'Magento 2 Cookbook - Ray Bogman .pdf', 47, 0, 'application/pdf', 0),
(28, 'userfiles/47/476035f4749106e7EZ0WQq3_LE.jpg', '7EZ0WQq3_LE.jpg', 47, 0, 'image/jpeg', 0),
(34, 'userfiles/47/47603a31d61a9687EZ0WQq3_LE.jpg', '7EZ0WQq3_LE.jpg', 47, 33, 'image/jpeg', 0),
(38, 'userfiles/49/496053686d3f987fallout.png', 'fallout.png', 49, 37, 'image/png', 0),
(40, 'userfiles/49/4960536a7a4f4541597217354565.jpg', '1597217354565.jpg', 49, 39, 'image/jpeg', 0),
(41, 'userfiles/47/47605f3329d30a9160663518_2162321953900423_274022596220222711_n.jpg', '160663518_2162321953900423_274022596220222711_n.jpg', 47, 34, 'image/jpeg', 0),
(42, 'userfiles/47/47608987a755376fallout.png', 'fallout.png', 47, 33, 'image/png', 0),
(44, 'userfiles/47/47610a6f7f8e919a4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 'a4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 47, 0, 'image/jpeg', 0),
(45, 'userfiles/47/47610ae1e957e40a4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 'a4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 47, 0, 'image/jpeg', 0),
(46, 'userfiles/47/47610ae24b2409f142198006_225097792595003_8967202187628227784_n.jpg', '142198006_225097792595003_8967202187628227784_n.jpg', 47, 0, 'image/jpeg', 0),
(47, 'userfiles/47/47610bf97cc660fa4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 'a4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 47, 0, 'image/jpeg', 0),
(48, 'userfiles/47/47610bf9eee6e0da4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 'a4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 47, 0, 'image/jpeg', 0),
(49, 'userfiles/47/47610bfa3ab1249142198006_225097792595003_8967202187628227784_n.jpg', '142198006_225097792595003_8967202187628227784_n.jpg', 47, 0, 'image/jpeg', 0),
(50, 'userfiles/47/47610bfaa2efddea4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 'a4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 47, 0, 'image/jpeg', 0),
(51, 'userfiles/47/47610bfaefe3124a4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 'a4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 47, 0, 'image/jpeg', 0),
(52, 'userfiles/47/47610bfb49c80d5a4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 'a4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 47, 0, 'image/jpeg', 0),
(53, 'userfiles/47/47610bfba8c6fca142198006_225097792595003_8967202187628227784_n.jpg', '142198006_225097792595003_8967202187628227784_n.jpg', 47, 0, 'image/jpeg', 0),
(54, 'userfiles/47/47610bfcf3130e0142198006_225097792595003_8967202187628227784_n.jpg', '142198006_225097792595003_8967202187628227784_n.jpg', 47, 0, 'image/jpeg', 0),
(55, 'userfiles/47/47610bfe46bbe9fa4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 'a4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 47, 0, 'image/jpeg', 0),
(56, 'userfiles/47/47610bffb73bdd1142198006_225097792595003_8967202187628227784_n.jpg', '142198006_225097792595003_8967202187628227784_n.jpg', 47, 0, 'image/jpeg', 0),
(57, 'userfiles/47/47610c0078de6f0a4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 'a4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 47, 0, 'image/jpeg', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `files_to_tags`
--

CREATE TABLE `files_to_tags` (
  `id` int(11) NOT NULL,
  `file_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `files_to_tags`
--

INSERT INTO `files_to_tags` (`id`, `file_id`, `tag_id`) VALUES
(1, 3, 0),
(2, 3, 0),
(11, 4, 2),
(12, 4, 3),
(13, 2, 4),
(14, 2, 5);

-- --------------------------------------------------------

--
-- Структура таблицы `friends`
--

CREATE TABLE `friends` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `friends`
--

INSERT INTO `friends` (`id`, `user_id`, `friend_id`, `status`) VALUES
(1, 48, 47, 1),
(2, 47, 49, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `from_user` int(11) DEFAULT NULL,
  `to_user` int(11) DEFAULT NULL,
  `text` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `date` varchar(10) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `messages`
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
(148, 44, 43, '0', '1425836264'),
(149, 47, 48, 'test\n', '1605964049'),
(150, 48, 47, 'test\n', '1605964072'),
(151, 47, 48, 'etst', '1605964130'),
(152, 47, 48, 'test', '1605964154'),
(153, 47, 48, 'test', '1605964296'),
(154, 47, 48, 'test', '1605964308'),
(155, 48, 47, 'anton', '1605964327'),
(156, 47, 48, 'chto ?\n', '1605964338'),
(157, 47, 48, 'test\n\n\n', '1606985919'),
(158, 47, 48, 'tyest', '1606986084');

-- --------------------------------------------------------

--
-- Структура таблицы `network`
--

CREATE TABLE `network` (
  `id` int(11) NOT NULL,
  `path_id` int(11) NOT NULL,
  `is_public` int(11) NOT NULL,
  `is_password` int(11) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `network`
--

INSERT INTO `network` (`id`, `path_id`, `is_public`, `is_password`, `password`) VALUES
(1, 2, 0, 1, '123'),
(2, 1, 0, 1, '123'),
(3, 14, 0, 1, '123'),
(4, 16, 0, 1, '123'),
(5, 17, 1, 0, NULL),
(7, 26, 0, 1, '12345678'),
(8, 27, 1, 0, NULL),
(9, 23, 0, 1, '12345678'),
(10, 28, 1, 0, NULL),
(11, 37, 0, 1, '12345678'),
(12, 38, 0, 1, '12345678'),
(13, 39, 1, 0, NULL),
(14, 42, 1, 0, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `payed_files`
--

CREATE TABLE `payed_files` (
  `id` int(11) NOT NULL,
  `file_id` int(10) NOT NULL,
  `cost` int(11) NOT NULL,
  `description` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `payed_files`
--

INSERT INTO `payed_files` (`id`, `file_id`, `cost`, `description`) VALUES
(1, 3, 10, 0),
(2, 4, 100, 0),
(3, 2, 500, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `payed_files_to_tags`
--

CREATE TABLE `payed_files_to_tags` (
  `id` int(11) NOT NULL,
  `tag_id` int(10) NOT NULL,
  `file_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `paypal`
--

CREATE TABLE `paypal` (
  `id` int(11) NOT NULL,
  `payment_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `payment_status` varchar(250) DEFAULT '0',
  `user_id` int(11) NOT NULL,
  `total` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `paypal`
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
-- Структура таблицы `private_chanels_requests`
--

CREATE TABLE `private_chanels_requests` (
  `id` int(11) NOT NULL,
  `chanel_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `confirmed` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `private_chanels_requests`
--

INSERT INTO `private_chanels_requests` (`id`, `chanel_id`, `user_id`, `confirmed`) VALUES
(5, 0, 48, NULL),
(6, 0, 48, NULL),
(7, 0, 48, NULL),
(8, 0, 48, NULL),
(9, 0, 48, NULL),
(10, 13, 48, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `project_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `project_description` text COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `projects`
--

INSERT INTO `projects` (`id`, `project_name`, `project_description`) VALUES
(1, 'test project', 'test project description'),
(2, 'gggg', 'gfdfsgsg'),
(3, 'asdasda', 'sgrghteht'),
(4, 'asdasddasda', 'sgrghteht'),
(5, 'asdasddasda', 'sgrghteht'),
(6, 'asdasddasda', 'sgrghteht'),
(7, 'asdasddasda', 'sgrghteht'),
(8, 'asdasddasda', 'sgrghteht'),
(9, 'asdasddasda', 'sgrghteht'),
(10, 'asdasddasda', 'sgrghteht'),
(11, 'asdasddasda', 'sgrghteht'),
(12, 'asdasddasda', 'sgrghteht'),
(13, 'asdasddasda', 'sgrghteht'),
(14, 'asdasddasda', 'sgrghteht'),
(15, 'asdasddasda', 'sgrghteht'),
(16, 'grregteh', 'thrthtrhtr'),
(17, 'gwgr', 'ge'),
(18, 'ytjt', 'jtyjy'),
(19, 'gerg', 'e'),
(20, 'fwf', 'fwefee'),
(21, 'fwer', 'wer'),
(22, 'sdf', 'sfdfsdf'),
(23, 'fwef', 'fwefewfew'),
(24, 'yh5h', 'h65h6'),
(25, 'yh5h', 'h65h6'),
(26, 'asdasd', 'asdas'),
(27, 'hrth', 'trhtrhh'),
(28, 'anton', 'ffefef');

-- --------------------------------------------------------

--
-- Структура таблицы `project_members`
--

CREATE TABLE `project_members` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `project_members`
--

INSERT INTO `project_members` (`id`, `user_id`, `project_id`) VALUES
(1, 47, 1),
(3, 48, 15),
(4, 49, 15),
(5, 47, 15),
(6, 48, 16),
(7, 47, 16),
(8, 48, 17),
(9, 47, 17),
(10, 47, 18),
(11, 49, 19),
(12, 47, 19),
(13, 49, 20),
(14, 47, 20),
(15, 49, 21),
(16, 47, 21),
(17, 49, 22),
(18, 48, 22),
(19, 47, 22),
(20, 48, 23),
(21, 49, 23),
(22, 47, 23),
(23, 49, 24),
(24, 48, 24),
(25, 47, 24),
(26, 49, 25),
(27, 48, 25),
(28, 47, 25),
(29, 49, 26),
(30, 47, 26),
(31, 47, 27),
(32, 48, 28),
(33, 47, 28);

-- --------------------------------------------------------

--
-- Структура таблицы `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `tags`
--

INSERT INTO `tags` (`id`, `name`) VALUES
(1, 'test'),
(2, '123'),
(3, 'tst'),
(4, 'anton'),
(5, 'alyona');

-- --------------------------------------------------------

--
-- Структура таблицы `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `board_id` int(11) NOT NULL DEFAULT 0,
  `task_name` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT 'task name',
  `description` text COLLATE utf8_bin DEFAULT NULL,
  `status` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `parent_task` int(11) DEFAULT 0,
  `is_archive` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `board_id`, `task_name`, `description`, `status`, `name`, `parent_task`, `is_archive`) VALUES
(1, 0, 'task name', 'twfff', 'new', 'tet', 0, 0),
(2, 0, 'task name', 'hhh', 'new', 'ghhhh', 0, 0),
(3, 0, 'task name', 'asdasd', 'new', 'ffcasf', 0, 0),
(4, 0, 'task name', 'gggg', 'new', 'vvggg', 0, 0),
(5, 0, 'task name', 'jjj', 'new', 'jjj', 0, 0),
(6, 0, 'task name', 'ggg', 'new', 'ggg', 0, 0),
(7, 0, 'task name', 'fff', 'new', 'ffff', 0, 0),
(8, 0, 'task name', 'fff', 'new', 'ff', 0, 0),
(9, 0, 'task name', 'vsdvsdv', 'new', 'vsdvsdv', 0, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `tasks_files`
--

CREATE TABLE `tasks_files` (
  `id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `file_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `tasks_files`
--

INSERT INTO `tasks_files` (`id`, `task_id`, `file_id`) VALUES
(1, 3, 52),
(2, 4, 53),
(3, 6, 54),
(4, 7, 55),
(5, 8, 56),
(6, 9, 57);

-- --------------------------------------------------------

--
-- Структура таблицы `tasks_users`
--

CREATE TABLE `tasks_users` (
  `id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `tasks_users`
--

INSERT INTO `tasks_users` (`id`, `task_id`, `user_id`) VALUES
(1, 7, 48),
(2, 7, 49),
(3, 8, 48),
(4, 8, 49),
(5, 9, 48);

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `email_key` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `activated` tinyint(1) DEFAULT 0,
  `lang` varchar(2) COLLATE utf8_bin DEFAULT 'en'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `login`, `email`, `password`, `email_key`, `activated`, `lang`) VALUES
(46, 'barnaki', 'banderas328@tut.com', '50009c349b89056fffa4adca4187dc2a', 'b1VXsNwpKgCwbZHcvMswuf7WzH2Nxxda1o44IEg6', 0, 'en'),
(47, 'anton', 'test@test.com', '50009c349b89056fffa4adca4187dc2a', 'oD8yFD82h1uOifyvKoSBHUI5jfG1xzNMnMlQO432', 0, 'en'),
(48, 'olga', 'anton@anton.com', '50009c349b89056fffa4adca4187dc2a', 'bkMIw4BQuwgMayiWH8tZu6eHlF0gLXr7bnOIoRQr', 0, 'en'),
(49, 'test1', 'test1@test1.com', '50009c349b89056fffa4adca4187dc2a', 'rcDYlrhtQsJEHQIKMosMEpGCclgSD16t6iJ9LmBL', 0, 'en');

-- --------------------------------------------------------

--
-- Структура таблицы `users_filesystem`
--

CREATE TABLE `users_filesystem` (
  `id` int(11) NOT NULL,
  `path` varchar(45) DEFAULT NULL,
  `parent_path` varchar(45) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users_filesystem`
--

INSERT INTO `users_filesystem` (`id`, `path`, `parent_path`, `user_id`) VALUES
(15, 'test', '0', 44),
(16, 'testpassword', '15', 44),
(17, 'testsimple', '15', 44),
(18, 'hidden', '15', 44),
(19, 'test', '0', 43),
(20, 'test2', '0', 43),
(21, 'slava', '0', 43),
(22, 'market', '0', 46),
(26, 'market', '0', 48),
(29, 'test', '26', 48),
(33, 'test', '0', 47),
(34, 'ssss', '0', 47),
(35, 'zhenia', '0', 47),
(37, 'shared_with_password', '0', 49),
(39, 'just_shared', '0', 49),
(41, 'opaopa', '0', 47),
(42, 'vvvvvvvvv', '0', 47);

-- --------------------------------------------------------

--
-- Структура таблицы `user_settings`
--

CREATE TABLE `user_settings` (
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
  `about` text COLLATE utf8_bin DEFAULT NULL,
  `skype` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `site` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `visibility` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `user_settings`
--

INSERT INTO `user_settings` (`id`, `user_id`, `avatar`, `sex`, `birthdate`, `first_name`, `second_name`, `job`, `country`, `city`, `about`, `skype`, `phone`, `site`, `visibility`) VALUES
(5, 43, '/img/avatars/55608982745a18kvYeDqR-Vs.jpg', NULL, NULL, 'anton', 'zhavrid', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(6, 44, '/img/avatars/555cc639090a28kvYeDqR-Vs.jpg', NULL, NULL, 'sergey', 'ola', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(7, 45, '/img/avatars/545bc9b02f2046mE1Pi6VDKM.jpg', 0, '0', 'uyra', 'samarichev', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(8, 48, NULL, 0, '01.01.1987', 'Olga', 'Met', 'dev', 'Belarus', '', '', '', '', '', 0),
(9, 47, '/img/avatars/604795720ffc3142198006_225097792595003_8967202187628227784_n.jpg', 0, '', 'Anton', 'Zhauryd', '', '', '', '', '', '', '', 0),
(10, 49, NULL, 0, '', 'Sasha', '', '', '', '', '', '', '', '', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `wallet`
--

CREATE TABLE `wallet` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `balance` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Дамп данных таблицы `wallet`
--

INSERT INTO `wallet` (`id`, `user_id`, `balance`) VALUES
(3, 43, '7611');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `blog_attachment`
--
ALTER TABLE `blog_attachment`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `boards`
--
ALTER TABLE `boards`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `board_users`
--
ALTER TABLE `board_users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `chanels`
--
ALTER TABLE `chanels`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `chanels_admins`
--
ALTER TABLE `chanels_admins`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `chanels_deliver_messages`
--
ALTER TABLE `chanels_deliver_messages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `chanels_messages`
--
ALTER TABLE `chanels_messages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `deliver_messages`
--
ALTER TABLE `deliver_messages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `files_to_tags`
--
ALTER TABLE `files_to_tags`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `network`
--
ALTER TABLE `network`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `payed_files`
--
ALTER TABLE `payed_files`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `payed_files_to_tags`
--
ALTER TABLE `payed_files_to_tags`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `paypal`
--
ALTER TABLE `paypal`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `private_chanels_requests`
--
ALTER TABLE `private_chanels_requests`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `project_members`
--
ALTER TABLE `project_members`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tasks_files`
--
ALTER TABLE `tasks_files`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tasks_users`
--
ALTER TABLE `tasks_users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users_filesystem`
--
ALTER TABLE `users_filesystem`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `user_settings`
--
ALTER TABLE `user_settings`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `wallet`
--
ALTER TABLE `wallet`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT для таблицы `blog_attachment`
--
ALTER TABLE `blog_attachment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `boards`
--
ALTER TABLE `boards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `board_users`
--
ALTER TABLE `board_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `chanels`
--
ALTER TABLE `chanels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `chanels_admins`
--
ALTER TABLE `chanels_admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `chanels_deliver_messages`
--
ALTER TABLE `chanels_deliver_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT для таблицы `chanels_messages`
--
ALTER TABLE `chanels_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT для таблицы `deliver_messages`
--
ALTER TABLE `deliver_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;

--
-- AUTO_INCREMENT для таблицы `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;

--
-- AUTO_INCREMENT для таблицы `files_to_tags`
--
ALTER TABLE `files_to_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT для таблицы `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=159;

--
-- AUTO_INCREMENT для таблицы `network`
--
ALTER TABLE `network`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT для таблицы `payed_files`
--
ALTER TABLE `payed_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `payed_files_to_tags`
--
ALTER TABLE `payed_files_to_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `paypal`
--
ALTER TABLE `paypal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `private_chanels_requests`
--
ALTER TABLE `private_chanels_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT для таблицы `project_members`
--
ALTER TABLE `project_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT для таблицы `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT для таблицы `tasks_files`
--
ALTER TABLE `tasks_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT для таблицы `tasks_users`
--
ALTER TABLE `tasks_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT для таблицы `users_filesystem`
--
ALTER TABLE `users_filesystem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT для таблицы `user_settings`
--
ALTER TABLE `user_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `wallet`
--
ALTER TABLE `wallet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
