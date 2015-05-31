-- phpMyAdmin SQL Dump
-- version 4.0.6deb1
-- http://www.phpmyadmin.net
--
-- Хост: localhost
-- Время создания: Мар 09 2014 г., 12:44
-- Версия сервера: 5.5.35-0ubuntu0.13.10.2
-- Версия PHP: 5.5.3-1ubuntu2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `networks`
--

-- --------------------------------------------------------

--
-- Структура таблицы `main`
--

CREATE TABLE IF NOT EXISTS `album` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artist` varchar(100) COLLATE utf8_bin NOT NULL,
  `title` varchar(100) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=6 ;

--
-- Дамп данных таблицы `main`
--

INSERT INTO `album` (`id`, `artist`, `title`) VALUES
(1, 'The  Military  Wives', 'In  My  Dreams'),
(2, 'Adele', '21'),
(3, 'Bruce  Springsteen', 'Wrecking Ball (Deluxe)'),
(4, 'Lana  Del  Rey', 'Born  To  Die'),
(5, 'Gotye', 'Making  Mirrors');

-- --------------------------------------------------------

--
-- Структура таблицы `files`
--

CREATE TABLE IF NOT EXISTS `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(250) COLLATE utf8_bin NOT NULL,
  `file_title` varchar(250) COLLATE utf8_bin NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

--
-- Дамп данных таблицы `files`
--

INSERT INTO `files` (`id`, `file_name`, `file_title`, `user_id`) VALUES
(1, '/var/www/networks/octopus/public/userfiles/53158eaa98ce1461655-1920x1080.jpg', 'test', 36);

-- --------------------------------------------------------

--
-- Структура таблицы `friends`
--

CREATE TABLE IF NOT EXISTS `friends` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=3 ;

--
-- Дамп данных таблицы `friends`
--

INSERT INTO `friends` (`id`, `user_id`, `friend_id`, `status`) VALUES
(2, 36, 2, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `email_key` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `activated` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=37 ;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `login`, `email`, `password`, `email_key`, `activated`) VALUES
(2, 'ciro', 'ciro@yandex.ru', 'test', '21111', 1),
(36, 'test', 'banderas328@yandex.ru', '3e3bcb376e0f195d75acbb34a829b07e', 'gmYsWl1zQ9bPxLQvfqxrGhz8OBEnC9OzvA3Ecm4N', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `user_settings`
--

CREATE TABLE IF NOT EXISTS `user_settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `visibility` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=3 ;

--
-- Дамп данных таблицы `user_settings`
--

INSERT INTO `user_settings` (`id`, `user_id`, `avatar`, `sex`, `birthdate`, `first_name`, `second_name`, `job`, `country`, `city`, `about`, `skype`, `phone`, `site`, `visibility`) VALUES
(1, 36, '/img/avatars/530c78c1e38fb5d50c977add2b2b5c8d571671abafacb_full.jpg', 0, '01.01.1987', 'anton', 'zhavrid', 'web developer', 'belarus', 'minsk', 'project owner', 'anton.zhavrid', '+375447605695', '62.113.227.30', 0),
(2, 2, NULL, 1, '01.01.1987', 'sergey', 'ciro', NULL, 'belarus', 'minsk', NULL, NULL, NULL, NULL, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
