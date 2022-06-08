-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июн 08 2022 г., 09:39
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
  `date` varchar(50) COLLATE utf8_bin NOT NULL,
  `blog_title` varchar(250) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `blogs`
--

INSERT INTO `blogs` (`id`, `blog_content`, `user_id`, `date`, `blog_title`) VALUES
(4, '\n    test blog', 44, '1425666479', NULL),
(5, '\n    testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestvvvvv', 44, '1425667276', NULL),
(6, '\n    banderas328@yandex.ru ÑÐ´ÐµÐ»Ð°Ð» ÑÑ‚Ð¾', 44, '1425667573', NULL),
(7, '\r\n    ban', 43, '1425748984', NULL),
(8, '\r\n    babn', 43, '1425750122', NULL),
(9, '\r\n    aaa', 43, '1425750216', NULL),
(10, '\r\n    test', 43, '1425750257', NULL),
(11, '\r\n    test', 43, '1425750289', NULL),
(12, '\r\n    test', 43, '1425750308', NULL),
(13, '\r\n    test', 43, '1425750338', NULL),
(14, '\r\n    test', 43, '1425750374', NULL),
(15, '\r\n    Ñ„Ñ„Ñ„', 44, '1425750880', NULL),
(16, '\r\n    Ñ„Ñ„Ñ„', 44, '1425750959', NULL),
(17, '\r\n    Ñ„Ñ„Ñ„', 44, '1425751007', NULL),
(18, '\r\n    test', 44, '1425754151', NULL),
(19, '\r\n    test', 44, '1425754167', NULL),
(20, '\r\n    banderas ', 44, '1425815209', NULL),
(21, '\r\n    alenka', 43, '1425815303', NULL),
(22, '\n    test', 48, '1605026445', NULL),
(23, '\n    test', 48, '1605026614', NULL),
(24, '\n    anton', 48, '1605026694', NULL),
(25, '\n    test', 47, '1606986285', NULL),
(26, '\n    4yyyyy', 47, '1637691817', NULL),
(27, 'test blog text  test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text ', 47, '1638463663', NULL),
(28, 'test2', 47, '1639426601', 'test1'),
(29, 'this is first post ', 52, '1645038392', 'first post'),
(30, 'test1', 52, '1653507523', 'test1');

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
(12, '/img/blog_images/5fc8aa2d2c1dbphoto_2018-12-21_14-43-27.jpg', 25),
(13, '/img/blog_images/619d31a962eadphoto_2021-09-14_23-09-02.jpg', 26),
(14, '/img/blog_images/61a8f8af7441846eb1ffe-0b06-4a9e-b2d6-0a6e55ed7763.jpg', 27),
(15, '/img/blog_images/61b7aa29de3cb2021-07-18 17-34-32.JPG', 28),
(16, '/img/blog_images/620d4b387768b300px-Хороший_Космонавт.jpg', 29),
(17, '/img/blog_images/628e85c30b96f2563.jpg', 30);

-- --------------------------------------------------------

--
-- Структура таблицы `blog_comment`
--

CREATE TABLE `blog_comment` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment` text COLLATE utf8_bin NOT NULL,
  `blog_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `blog_comment`
--

INSERT INTO `blog_comment` (`id`, `user_id`, `comment`, `blog_id`) VALUES
(1, 47, 'tgtgtgt', 25),
(2, 47, 'tgtgtgt', 25),
(3, 47, 'tgtgtgt', 25),
(4, 47, 'tgtgtgt', 25),
(5, 47, 'test', 25),
(6, 47, 'gfgggszx', 25),
(7, 47, 'gfgggszx', 25),
(8, 47, 'nnmmm', 25),
(9, 47, 'kkkkkk', 25),
(10, 47, 'aaaaazzz', 25),
(11, 47, 'ghghggxx', 25),
(12, 47, 'llll', 25),
(13, 47, 'test', 25),
(14, 47, 'anton', 25),
(15, 52, 'this is first comment', 29);

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
(1, 'todo', 1),
(2, 'todo', 2),
(3, 'in progres', 2),
(4, 'done', 2),
(16, 'todo', 4),
(17, 'in progress', 4),
(18, 'todo', 3),
(21, 'in progres', 3),
(22, 'done', 3),
(23, 'todo', 7),
(24, 'done', 7),
(25, 'todo', 10),
(29, 'in progress', 10),
(30, 'todo ', 11),
(33, 'in progress', 11);

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
(35, 'test_private', 1, NULL),
(36, 'public chanel', 0, NULL);

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
(26, 47, 32),
(27, 47, 33),
(28, 47, 34),
(29, 47, 35),
(30, 52, 36);

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
(74, '74', NULL);

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
(74, 'test', 52, 36, '1654327491');

-- --------------------------------------------------------

--
-- Структура таблицы `deliver_messages`
--

CREATE TABLE `deliver_messages` (
  `id` int(11) NOT NULL,
  `message_id` int(11) DEFAULT NULL,
  `dilivered` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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
(17, '/userfiles/48/485fb3c6b02d004servers.txt', 'servers.txt', 48, 0, 'text/plain', 0),
(21, 'userfiles/47/4760354c6fbede3Magento 2 Cookbook - Ray Bogman .pdf', 'Magento 2 Cookbook - Ray Bogman .pdf', 52, 0, 'application/pdf', 0),
(22, 'userfiles/47/4760354c7f1a7f2Magento 2 Cookbook - Ray Bogman .pdf', 'Magento 2 Cookbook - Ray Bogman .pdf', 52, 0, 'application/pdf', 0),
(34, 'userfiles/47/47603a31d61a9687EZ0WQq3_LE.jpg', '7EZ0WQq3_LE.jpg', 47, 33, 'image/jpeg', 0),
(38, 'userfiles/49/496053686d3f987fallout.png', 'fallout.png', 49, 37, 'image/png', 0),
(40, 'userfiles/49/4960536a7a4f4541597217354565.jpg', '1597217354565.jpg', 49, 39, 'image/jpeg', 0),
(42, 'userfiles/47/47608987a755376fallout.png', 'fallout.png', 47, 33, 'image/png', 0),
(53, 'userfiles/47/47610bfba8c6fca142198006_225097792595003_8967202187628227784_n.jpg', '142198006_225097792595003_8967202187628227784_n.jpg', 47, 34, 'image/jpeg', 0),
(65, 'userfiles/47/47613b6ca31d038AntonZhauryd_CV.pdf', 'AntonZhauryd_CV.pdf', 47, 0, 'application/pdf', 0),
(66, 'userfiles/47/47613b6d3ca6ba6AntonZhauryd_CV.pdf', 'AntonZhauryd_CV.pdf', 47, 0, 'application/pdf', 0),
(67, 'userfiles/47/47613b6dcc7dee6AntonZhauryd_CV.pdf', 'AntonZhauryd_CV.pdf', 47, 0, 'application/pdf', 0),
(68, 'userfiles/47/47613b6e0b1d566AntonZhauryd_CV.pdf', 'AntonZhauryd_CV.pdf', 47, 34, 'application/pdf', 0),
(69, 'userfiles/47/47613b6ef05fbfbAntonZhauryd_CV.pdf', 'AntonZhauryd_CV.pdf', 47, 0, 'application/pdf', 0),
(70, 'userfiles/47/47613b6f711a8c4AntonZhauryd_CV.pdf', 'AntonZhauryd_CV.pdf', 47, 0, 'application/pdf', 0),
(71, 'userfiles/47/47613b6fcd60056AntonZhauryd_CV.pdf', 'AntonZhauryd_CV.pdf', 47, 0, 'application/pdf', 0),
(72, 'userfiles/47/47613bb72abe92anetworks (3).sql', 'networks (3).sql', 47, 0, 'application/octet-stream', 0),
(75, 'userfiles/47/47613bbab7e7a69networks (3).sql', 'networks (3).sql', 47, 0, 'application/octet-stream', 0),
(76, 'userfiles/47/47613bbacd5dc60networks (3).sql', 'networks (3).sql', 47, 0, 'application/octet-stream', 0),
(77, 'userfiles/47/47613bbafcdff2bnetworks (3).sql', 'networks (3).sql', 47, 0, 'application/octet-stream', 0),
(78, 'userfiles/47/47613bbce9a63b5AntonZhauryd_CV.pdf', 'AntonZhauryd_CV.pdf', 47, 0, 'application/pdf', 0),
(79, 'userfiles/47/47613bbd3e0e097networks (3).sql', 'networks (3).sql', 47, 0, 'application/octet-stream', 0),
(80, 'userfiles/47/47613bc06863f9fAntonZhauryd_CV.pdf', 'AntonZhauryd_CV.pdf', 47, 0, 'application/pdf', 0),
(81, 'userfiles/47/47613bc081c6b00networks (3).sql', 'networks (3).sql', 47, 0, 'application/octet-stream', 0),
(82, 'userfiles/47/47613bc4c638debAntonZhauryd_CV.pdf', 'AntonZhauryd_CV.pdf', 47, 0, 'application/pdf', 0),
(83, 'userfiles/47/47613c3a7d6e03fAntonZhauryd_CV.pdf', 'AntonZhauryd_CV.pdf', 47, 0, 'application/pdf', 0),
(84, 'userfiles/47/47613c3bd11ea95AntonZhauryd_CV.pdf', 'AntonZhauryd_CV.pdf', 47, 0, 'application/pdf', 0),
(85, 'userfiles/47/47613c3cd7d0299AntonZhauryd_CV.pdf', 'AntonZhauryd_CV.pdf', 47, 0, 'application/pdf', 0),
(89, 'userfiles/47/47613e28ac316a7AntonZhauryd_CV.pdf', 'AntonZhauryd_CV.pdf', 47, 41, 'application/pdf', 0),
(97, 'userfiles/48/486192aeaeb519c1597217354565.jpg', '1597217354565.jpg', 48, 29, 'image/jpeg', 0),
(98, '/userfiles/49/4960536a7a4f4541597217354565.jpg', '1597217354565.jpg', 47, 41, 'image/jpeg', 0),
(99, '/userfiles/49/4960536a7a4f4541597217354565.jpg', '1597217354565.jpg', 47, 41, 'image/jpeg', 0),
(100, '/userfiles/49/4960536a7a4f4541597217354565.jpg', '1597217354565.jpg', 47, 41, 'image/jpeg', 0),
(101, '/userfiles/49/4960536a7a4f4541597217354565.jpg', '1597217354565.jpg', 47, 41, 'image/jpeg', 0),
(102, '/userfiles/49/4960536a7a4f4541597217354565.jpg', '1597217354565.jpg', 47, 0, 'image/jpeg', 0),
(103, '/userfiles/49/4960536a7a4f4541597217354565.jpg', '1597217354565.jpg', 47, 33, 'image/jpeg', 0),
(104, '/userfiles/48/486192aeaeb519c1597217354565.jpg', '1597217354565.jpg', 47, 0, 'image/jpeg', 0),
(105, '/userfiles/47/47613e28ac316a7AntonZhauryd_CV.pdf', 'AntonZhauryd_CV.pdf', 52, 45, 'application/pdf', 0),
(106, 'userfiles/52/526239b1519b322photo_2022-03-20_06-02-09.jpg', 'photo_2022-03-20_06-02-09.jpg', 52, 0, 'image/jpeg', 0),
(107, 'userfiles/52/52623c361764064ego-vorseyshestvo-kover.jpg', 'ego-vorseyshestvo-kover.jpg', 52, 0, 'image/jpeg', 0),
(113, '/userfiles/47/4960536a7a4f4541597217354565.jpg', '1597217354565.jpg', 52, 46, 'image/jpeg', 0),
(116, 'userfiles/52/526274c45a2a613BRSM_party (1).jpg', 'BRSM_party (1).jpg', 52, 0, 'image/jpeg', 0),
(118, '/userfiles/47/4960536a7a4f4541597217354565.jpg', '1597217354565.jpg', 52, 0, 'image/jpeg', 0),
(119, 'userfiles/52/52628de30421401J5yFZomtNp_2Pt-nAZezqw.png', 'J5yFZomtNp_2Pt-nAZezqw.png', 52, 0, 'image/png', 0),
(120, 'userfiles/52/52628e2fd1b9fd12563.jpg', '2563.jpg', 52, 0, 'image/jpeg', 0),
(121, '/userfiles/47/', 'AntonZhauryd_CV.pdf', 52, 0, 'application/pdf', 0),
(122, '/userfiles/47/4960536a7a4f4541597217354565.jpg', '1597217354565.jpg', 52, 0, 'image/jpeg', 0),
(123, '/userfiles/47/4960536a7a4f4541597217354565.jpg', '1597217354565.jpg', 52, 0, 'image/jpeg', 0);

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
-- Структура таблицы `frames`
--

CREATE TABLE `frames` (
  `id` int(11) NOT NULL,
  `url` varchar(255) COLLATE utf8_bin NOT NULL,
  `image` varchar(255) COLLATE utf8_bin NOT NULL,
  `name` varchar(255) COLLATE utf8_bin NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `frames`
--

INSERT INTO `frames` (`id`, `url`, `image`, `name`, `user_id`) VALUES
(5, 'https://www.starfederation.ru/', 'userfiles/52/52629d1c0527c57300px-Хороший_Космонавт.jpg', 'https://www.starfederation.ru/', 52),
(6, 'https://combats-club.com/', 'userfiles/52/52629da208dd262images.jpg', 'https://combats-club.com/', 52),
(7, 'https://combats-club.com/', 'userfiles/52/52629da20dc3dc6images.jpg', 'https://combats-club.com/', 52);

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
(2, 47, 49, 1),
(3, 47, 52, 1),
(4, 47, 47, 0),
(5, 50, 52, 1);

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
(183, 47, 48, '1', '1636860809'),
(184, 48, 47, '2', '1636860815'),
(185, 48, 47, '3', '1636861337'),
(186, 47, 48, '4', '1636861345'),
(187, 48, 47, '5', '1636871203'),
(188, 48, 47, '6', '1636872492'),
(189, 48, 47, '7', '1636872515'),
(190, 47, 48, '8', '1636872643'),
(191, 47, 48, '9', '1636873591'),
(192, 47, 48, 'antoha\n', '1636873804');

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
(14, 42, 1, 0, NULL),
(16, 41, 1, 0, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `text` varchar(255) COLLATE utf8_bin NOT NULL,
  `html_id` varchar(255) COLLATE utf8_bin NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `notifications`
--

INSERT INTO `notifications` (`id`, `text`, `html_id`, `user_id`) VALUES
(1, 'you have new message fromAntonnn zHavriddd', 'test', 47),
(2, 'you have new message from Antonnn zHavriddd', 'test', 48),
(3, 'test', 'test', 47),
(4, 'hhhhh', 'hhhh', 47),
(5, 'you have new message from Olga Met', 'test', 47),
(6, 'you have new message from Olga Met', 'test', 47),
(7, 'you have new message from Olga Met', 'test', 47),
(8, 'you have new message from Antonnn zHavriddd', 'test', 48),
(9, 'you have new message from Olga Met', 'test', 47),
(10, 'you have new message from Antonnn zHavriddd', 'test', 48),
(11, 'you have new message from Antonnn zHavriddd', 'test', 48),
(12, 'you have new message from Olga Met', 'test', 47),
(13, 'you have new message from Antonnn zHavriddd', 'test', 48),
(14, 'you have new message from Olga Met', 'test', 47),
(15, 'you have new message from Antonnn zHavriddd', 'test', 48),
(16, 'you have new message from Antonnn zHavriddd', 'test', 48),
(17, 'you have new message from Olga Met', 'test', 47),
(18, 'you have new message from Antonnn zHavriddd', 'test', 48),
(19, 'you have new message from Olga Met', 'test', 47),
(20, 'you have new message from Olga Met', 'test', 47),
(21, 'you have new message from Antonnn zHavriddd', 'test', 48),
(22, 'you have new message from Olga Met', 'test', 47),
(23, 'you have new message from Olga Met', 'test', 47),
(24, 'you have new message from Olga Met', 'test', 47),
(25, 'you have new message from Antonnn zHavriddd', 'test', 48),
(26, 'you have new message from Antonnn zHavriddd', 'test', 48),
(27, 'you have new message from Antonnn zHavriddd', 'test', 48),
(28, 'you have new task :  test task', 'test', 47),
(29, 'you have new task :  test task', 'test', 48),
(30, 'you have new task: dd in project :test project', 'test', 47),
(31, 'you have new task: dd in project :test project', 'test', 48),
(32, 'you have new project:  second project', 'test', 47),
(33, 'you have new project:  second project', 'test', 48),
(34, 'you have new task: test 1 in project :test project', 'test', 48),
(35, 'you have new task: test 1 in project :test project', 'test', 47),
(36, 'you have new project:  test', 'test', 52),
(37, 'you have new task: first tasjk in project :test', 'test', 47),
(38, 'you have new task: first tasjk in project :test', 'test', 52),
(39, 'you have new project:  test', 'test', 47),
(40, 'you have new project:  test', 'test', 52),
(41, 'you have new project:  test', 'test', 47),
(42, 'you have new project:  test', 'test', 50),
(43, 'you have new project:  test', 'test', 52),
(44, 'you have new project:  test', 'test', 47),
(45, 'you have new project:  test', 'test', 50),
(46, 'you have new project:  test', 'test', 52),
(47, 'you have new task: test task in project :test', 'test', 47),
(48, 'you have new task: test task in project :test', 'test', 50),
(49, 'you have new task: test task in project :test', 'test', 52),
(50, 'you have new project:  first project', 'test', 47),
(51, 'you have new project:  first project', 'test', 52),
(52, 'you have new task: first task in project :first project', 'test', 47),
(53, 'you have new task: first task in project :first project', 'test', 52),
(54, 'you have new task: first task in project :first project', 'test', 47),
(55, 'you have new task: first task in project :first project', 'test', 50),
(56, 'you have new task: first task in project :first project', 'test', 52);

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
  `is_confirmed` tinyint(1) DEFAULT NULL,
  `pending_response` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `private_chanels_requests`
--

INSERT INTO `private_chanels_requests` (`id`, `chanel_id`, `user_id`, `is_confirmed`, `pending_response`) VALUES
(45, 35, 47, 1, 0),
(46, 35, 52, NULL, 1),
(47, 36, 52, 1, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `project_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `project_description` text COLLATE utf8_bin NOT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `is_archive` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `projects`
--

INSERT INTO `projects` (`id`, `project_name`, `project_description`, `sort_order`, `is_archive`) VALUES
(10, 'test', 'test', 0, 1),
(11, 'first project', 'first project description', 0, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `projects_members`
--

CREATE TABLE `projects_members` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `projects_members`
--

INSERT INTO `projects_members` (`id`, `user_id`, `project_id`) VALUES
(6, 47, 3),
(7, 48, 4),
(8, 47, 5),
(9, 48, 5),
(10, 47, 6),
(11, 48, 6),
(12, 52, 7),
(13, 47, 8),
(14, 52, 8),
(15, 47, 9),
(16, 50, 9),
(17, 52, 9),
(18, 47, 10),
(19, 50, 10),
(20, 52, 10),
(21, 47, 11),
(22, 52, 11);

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
  `description` text COLLATE utf8_bin DEFAULT NULL,
  `status` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `parent_task` int(11) DEFAULT 0,
  `is_archive` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `board_id`, `description`, `status`, `name`, `parent_task`, `is_archive`, `sort_order`) VALUES
(1, 1, 'test task description just testing', 'new', 'olga', 0, 1, 1),
(2, 1, 'first task description', 'new', 'anton', 0, 1, 1),
(18, 0, NULL, NULL, NULL, 0, 0, 1),
(19, 0, NULL, NULL, NULL, 0, 0, 1),
(20, 0, NULL, NULL, NULL, 0, 0, 1),
(22, 5, 'task description', 'new', 'test task', 0, 1, 0),
(23, 5, 'new task description', 'new', 'new task', 0, 0, 0),
(24, 16, 'test task description', 'new', 'test task', 0, 0, 1),
(25, 18, 'teasj ffff', 'new', 'test task', 0, 0, 0),
(26, 16, 'testtt', 'new', 'testaaa', 0, 0, 1),
(27, 16, 'ggg', 'new', 'ggg', 0, 0, 1),
(28, 16, 'aaa', 'new', 'aaa', 0, 0, 1),
(29, 16, 'asdasd', 'new', 'fafasfd', 0, 0, 1),
(30, 16, 'test', 'new', 'test task', 0, 0, 1),
(31, 16, 'eee', 'new', 'yeee', 0, 0, 1),
(32, 16, 'dd', 'new', 'ddd', 0, 0, 1),
(33, 16, 'ddd', 'new', 'dd', 0, 0, 1),
(34, 22, 'test 1', 'new', 'test 1', 0, 0, 0),
(35, 24, 'first tasjk', 'new', 'first tasjk', 0, 0, 0),
(36, 29, 'test task description', 'new', 'test task', 0, 0, 0),
(37, 30, 'first task description first task descriptionfirst task description first task descriptionfirst task description first task descriptionfirst task description first task descriptionfirst task description first task descriptionfirst task description first task description', 'new', 'first task', 0, 1, 0),
(38, 33, 'second task description second task descriptionsecond task descriptionsecond task descriptionsecond task descriptionsecond task descriptionsecond task description', 'new', 'second task name', 0, 0, 0),
(39, 0, '', 'edit', NULL, 37, 0, 1),
(40, 30, 'first task description first task descriptionfirst task descriptionfirst task descriptionfirst task descriptionfirst task descriptionfirst task descriptionfirst task descriptionfirst task descriptionfirst task descriptionfirst task descriptionfirst task description', 'new', 'first task', 0, 0, 0),
(41, 0, 'test', 'edit', NULL, 40, 0, 1),
(42, 0, 'test', 'edit', NULL, 40, 0, 1),
(43, 0, 'test', 'edit', NULL, 40, 0, 1),
(44, 0, 'update', 'new', NULL, 40, 0, 1),
(45, 0, 'update', 'new', NULL, 40, 0, 1),
(46, 0, 'harry up', 'urgent', NULL, 40, 0, 1),
(47, 0, 'done', 'hold', NULL, 40, 0, 1),
(48, 0, 'right now', 'hold', NULL, 40, 0, 1);

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
(1, 1, 88),
(2, 2, 89),
(9, 22, 96),
(10, 36, 114),
(11, 37, 116),
(12, 38, 119),
(13, 40, 120);

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
(1, 1, 49),
(2, 1, 48),
(3, 1, 47),
(4, 2, 0),
(5, 2, 47),
(8, 8, 48),
(9, 8, 49),
(10, 8, 47),
(11, 11, 48),
(12, 11, 49),
(13, 11, 47),
(16, 22, 48),
(17, 22, 47),
(18, 23, 0),
(19, 23, 47),
(20, 24, 47),
(21, 24, 48),
(22, 25, 48),
(23, 26, 47),
(24, 27, 47),
(25, 28, 47),
(26, 29, 47),
(27, 30, 0),
(28, 31, 0),
(29, 32, 0),
(30, 33, 47),
(31, 33, 48),
(32, 34, 48),
(33, 34, 47),
(34, 35, 47),
(35, 35, 52),
(36, 36, 47),
(37, 36, 50),
(38, 36, 52),
(39, 37, 47),
(40, 37, 52),
(41, 38, 0),
(42, 40, 47),
(43, 40, 50),
(44, 40, 52);

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
(47, 'anton', 'test@test.com', 'caa12df9e355fdf3f73b13ad185b64ec', 'oD8yFD82h1uOifyvKoSBHUI5jfG1xzNMnMlQO432', 0, 'en'),
(48, 'olga', 'anton@anton.com', '50009c349b89056fffa4adca4187dc2a', 'bkMIw4BQuwgMayiWH8tZu6eHlF0gLXr7bnOIoRQr', 0, 'en'),
(50, 'banderas328@ayandexx.ru', 'banderas328@yandexx.ru', 'caa12df9e355fdf3f73b13ad185b64ec', 'i3e00lTmj7LWjJGvgkwsxferfLp2xvARPfxZcXb4', 0, 'en'),
(52, 'test1@test1.com', 'test1@test1.com', 'caa12df9e355fdf3f73b13ad185b64ec', '30VGE2BE66PTGExvpAvnPxgrXplVbT4RTzjiZUGS', 0, 'en');

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
(42, 'vvvvvvvvv', '0', 47),
(43, 'market', '0', 50),
(44, 'market', '0', 51),
(45, 'market', '0', 52),
(46, 'test', '0', 52),
(47, 'test2', '0', NULL),
(48, 'aaa', '0', NULL),
(49, 'test2', '0', NULL),
(50, 'test2', '0', 52);

-- --------------------------------------------------------

--
-- Структура таблицы `user_settings`
--

CREATE TABLE `user_settings` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `avatar` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `first_name` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `second_name` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `job` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `country` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `city` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `about` text COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `visibility` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `user_settings`
--

INSERT INTO `user_settings` (`id`, `user_id`, `avatar`, `first_name`, `second_name`, `job`, `country`, `city`, `about`, `phone`, `visibility`) VALUES
(5, 43, '/img/avatars/612b43c8ba57aa4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg', 'anton', 'zhavrid', NULL, NULL, NULL, NULL, NULL, NULL),
(6, 44, '/img/avatars/6165d272a923f1597217354565.jpg', 'sergey', 'ola', NULL, NULL, NULL, NULL, NULL, NULL),
(7, 45, '/img/avatars/6165d272a923f1597217354565.jpg', 'uyra', 'samarichev', NULL, NULL, NULL, NULL, NULL, 1),
(8, 48, '/img/avatars/6165d272a923f1597217354565.jpg', 'Olga', 'Met', 'dev', 'Belarus', '', '', '', 0),
(9, 47, '/img/avatars/61b7a76d06a3846eb1ffe-0b06-4a9e-b2d6-0a6e55ed7763.jpg', 'Anton', 'zHavrid', 'developer', 'Belarus', 'Minsk', 'test', '57197002', 0),
(10, 49, '/img/avatars/6165d272a923f1597217354565.jpg', 'Sasha', '', '', '', '', '', '', 0),
(11, 52, '/img/avatars/61d6e0e6375ccim.jpg', 'zhenia', 'ivanov', '', '', '', '', '', 1),
(12, 50, '/img/avatars/620d4d2daa25dimages.jpg', 'Evgeniy', 'Onegin', '', '', '', '', '', 1);

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
-- Индексы таблицы `blog_comment`
--
ALTER TABLE `blog_comment`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `boards`
--
ALTER TABLE `boards`
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
-- Индексы таблицы `frames`
--
ALTER TABLE `frames`
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
-- Индексы таблицы `notifications`
--
ALTER TABLE `notifications`
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
-- Индексы таблицы `projects_members`
--
ALTER TABLE `projects_members`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT для таблицы `blog_attachment`
--
ALTER TABLE `blog_attachment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT для таблицы `blog_comment`
--
ALTER TABLE `blog_comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `boards`
--
ALTER TABLE `boards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT для таблицы `chanels`
--
ALTER TABLE `chanels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT для таблицы `chanels_admins`
--
ALTER TABLE `chanels_admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT для таблицы `chanels_deliver_messages`
--
ALTER TABLE `chanels_deliver_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT для таблицы `chanels_messages`
--
ALTER TABLE `chanels_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT для таблицы `deliver_messages`
--
ALTER TABLE `deliver_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT для таблицы `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=124;

--
-- AUTO_INCREMENT для таблицы `files_to_tags`
--
ALTER TABLE `files_to_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT для таблицы `frames`
--
ALTER TABLE `frames`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT для таблицы `network`
--
ALTER TABLE `network`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT для таблицы `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT для таблицы `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT для таблицы `projects_members`
--
ALTER TABLE `projects_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT для таблицы `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT для таблицы `tasks_files`
--
ALTER TABLE `tasks_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `tasks_users`
--
ALTER TABLE `tasks_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT для таблицы `users_filesystem`
--
ALTER TABLE `users_filesystem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT для таблицы `user_settings`
--
ALTER TABLE `user_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `wallet`
--
ALTER TABLE `wallet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
