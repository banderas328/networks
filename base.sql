-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 11 2021 г., 21:10
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

-- --------------------------------------------------------

--
-- Структура таблицы `blog_attachment`
--

CREATE TABLE `blog_attachment` (
  `id` int(11) NOT NULL,
  `file_name` varchar(250) COLLATE utf8_bin NOT NULL,
  `blog_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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

-- --------------------------------------------------------

--
-- Структура таблицы `boards`
--

CREATE TABLE `boards` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `project_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

-- --------------------------------------------------------

--
-- Структура таблицы `chanels_admins`
--

CREATE TABLE `chanels_admins` (
  `id` int(11) NOT NULL,
  `admins` int(10) DEFAULT NULL,
  `chanel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `chanels_deliver_messages`
--

CREATE TABLE `chanels_deliver_messages` (
  `id` int(11) NOT NULL,
  `message_id` varchar(250) DEFAULT NULL,
  `delivered` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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

-- --------------------------------------------------------

--
-- Структура таблицы `files_to_tags`
--

CREATE TABLE `files_to_tags` (
  `id` int(11) NOT NULL,
  `file_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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

-- --------------------------------------------------------

--
-- Структура таблицы `projects_members`
--

CREATE TABLE `projects_members` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Структура таблицы `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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

-- --------------------------------------------------------

--
-- Структура таблицы `tasks_files`
--

CREATE TABLE `tasks_files` (
  `id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `file_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Структура таблицы `tasks_users`
--

CREATE TABLE `tasks_users` (
  `id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `blog_attachment`
--
ALTER TABLE `blog_attachment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `blog_comment`
--
ALTER TABLE `blog_comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `boards`
--
ALTER TABLE `boards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `chanels`
--
ALTER TABLE `chanels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `chanels_admins`
--
ALTER TABLE `chanels_admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `chanels_deliver_messages`
--
ALTER TABLE `chanels_deliver_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `chanels_messages`
--
ALTER TABLE `chanels_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `deliver_messages`
--
ALTER TABLE `deliver_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `files_to_tags`
--
ALTER TABLE `files_to_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `network`
--
ALTER TABLE `network`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `payed_files`
--
ALTER TABLE `payed_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `payed_files_to_tags`
--
ALTER TABLE `payed_files_to_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `paypal`
--
ALTER TABLE `paypal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `private_chanels_requests`
--
ALTER TABLE `private_chanels_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `projects_members`
--
ALTER TABLE `projects_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `tasks_files`
--
ALTER TABLE `tasks_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `tasks_users`
--
ALTER TABLE `tasks_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `users_filesystem`
--
ALTER TABLE `users_filesystem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `user_settings`
--
ALTER TABLE `user_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `wallet`
--
ALTER TABLE `wallet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
