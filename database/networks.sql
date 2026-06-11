-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Хост: db
-- Время создания: Янв 03 2026 г., 14:41
-- Версия сервера: 10.6.24-MariaDB-ubu2204
-- Версия PHP: 8.3.26

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
-- Структура таблицы `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `blog_content` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` varchar(50) NOT NULL,
  `blog_title` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

--
-- Дамп данных таблицы `blogs`
--

INSERT INTO `blogs` (`id`, `blog_content`, `user_id`, `date`, `blog_title`) VALUES
(1, '<p>First BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst BlogFirst Blog</p>\r\n\r\n<div class=\"host-lopnbnfpjmgpbppclhclehhgafnifija\" style=\"position: relative; z-index: 2147483647;\">&nbsp;</div>\r\n', 1, '1767451232', 'First Blog'),
(2, '<p>hhhhhhhhh</p>\r\n', 1, '1767451264', 'hhhh');

-- --------------------------------------------------------

--
-- Структура таблицы `blog_attachment`
--

CREATE TABLE `blog_attachment` (
  `id` int(11) NOT NULL,
  `file_name` varchar(250) NOT NULL,
  `blog_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

--
-- Дамп данных таблицы `blog_attachment`
--

INSERT INTO `blog_attachment` (`id`, `file_name`, `blog_id`) VALUES
(1, '/img/blog_images/69592a8099cf42298145318_preview_Сохраненное изображение 2020-11-23_15-10-36.394.jpg', 2);

-- --------------------------------------------------------

--
-- Структура таблицы `blog_comment`
--

CREATE TABLE `blog_comment` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment` text NOT NULL,
  `blog_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

--
-- Дамп данных таблицы `blog_comment`
--

INSERT INTO `blog_comment` (`id`, `user_id`, `comment`, `blog_id`) VALUES
(1, 1, 'ggg', 1),
(2, 1, '', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `boards`
--

CREATE TABLE `boards` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `project_id` int(11) NOT NULL,
  `is_deleted` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `boards`
--

INSERT INTO `boards` (`id`, `name`, `project_id`, `is_deleted`) VALUES
(1, 'todo', 1, NULL),
(2, 'in progress', 1, NULL),
(3, 'done', 1, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `chanels`
--

CREATE TABLE `chanels` (
  `id` int(11) NOT NULL,
  `chanel_name` varchar(45) DEFAULT NULL,
  `private` tinyint(4) DEFAULT 0,
  `password` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Дамп данных таблицы `chanels`
--

INSERT INTO `chanels` (`id`, `chanel_name`, `private`, `password`) VALUES
(1, 'main', 0, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `chanels_admins`
--

CREATE TABLE `chanels_admins` (
  `id` int(11) NOT NULL,
  `admins` int(11) DEFAULT NULL,
  `chanel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Дамп данных таблицы `chanels_admins`
--

INSERT INTO `chanels_admins` (`id`, `admins`, `chanel_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `chanels_deliver_messages`
--

CREATE TABLE `chanels_deliver_messages` (
  `id` int(11) NOT NULL,
  `message_id` varchar(250) DEFAULT NULL,
  `delivered` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Дамп данных таблицы `chanels_deliver_messages`
--

INSERT INTO `chanels_deliver_messages` (`id`, `message_id`, `delivered`) VALUES
(1, '1', NULL);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Дамп данных таблицы `chanels_messages`
--

INSERT INTO `chanels_messages` (`id`, `message`, `from_user`, `to_chanel`, `date`) VALUES
(1, '<p>test</p>\n', 1, 1, '1767451129');

-- --------------------------------------------------------

--
-- Структура таблицы `deliver_messages`
--

CREATE TABLE `deliver_messages` (
  `id` int(11) NOT NULL,
  `message_id` int(11) DEFAULT NULL,
  `dilivered` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

-- --------------------------------------------------------

--
-- Структура таблицы `files`
--

CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `file_name` varchar(250) NOT NULL,
  `file_title` varchar(250) NOT NULL,
  `user_id` int(11) NOT NULL,
  `directory` int(11) NOT NULL,
  `type` varchar(50) NOT NULL,
  `shared` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

--
-- Дамп данных таблицы `files`
--

INSERT INTO `files` (`id`, `file_name`, `file_title`, `user_id`, `directory`, `type`, `shared`) VALUES
(1, 'userfiles/1/1695923bdc04b3text file.html', 'text file', 1, 2, 'text_file', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `files_to_tags`
--

CREATE TABLE `files_to_tags` (
  `id` int(11) NOT NULL,
  `file_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

-- --------------------------------------------------------

--
-- Структура таблицы `frames`
--

CREATE TABLE `frames` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

-- --------------------------------------------------------

--
-- Структура таблицы `friends`
--

CREATE TABLE `friends` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

-- --------------------------------------------------------

--
-- Структура таблицы `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `from_user` int(11) DEFAULT NULL,
  `to_user` int(11) DEFAULT NULL,
  `text` varchar(250) DEFAULT NULL,
  `date` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `html_id` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

--
-- Дамп данных таблицы `notifications`
--

INSERT INTO `notifications` (`id`, `text`, `html_id`, `user_id`) VALUES
(1, 'you have new project:  octopus', 'test', 1),
(2, 'you have new task: Docker in project :octopus', 'test', 1),
(3, 'you have new task: Docker in project :octopus', 'test', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `payed_files`
--

CREATE TABLE `payed_files` (
  `id` int(11) NOT NULL,
  `file_id` int(11) NOT NULL,
  `cost` int(11) NOT NULL,
  `description` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `payed_files_to_tags`
--

CREATE TABLE `payed_files_to_tags` (
  `id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  `file_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `paypal`
--

CREATE TABLE `paypal` (
  `id` int(11) NOT NULL,
  `payment_id` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin NOT NULL,
  `payment_status` varchar(250) DEFAULT '0',
  `user_id` int(11) NOT NULL,
  `total` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `private_chanels_requests`
--

CREATE TABLE `private_chanels_requests` (
  `id` int(11) NOT NULL,
  `chanel_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `is_confirmed` tinyint(1) DEFAULT 0,
  `pending_response` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Дамп данных таблицы `private_chanels_requests`
--

INSERT INTO `private_chanels_requests` (`id`, `chanel_id`, `user_id`, `is_confirmed`, `pending_response`) VALUES
(1, 1, 1, 1, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `project_name` varchar(255) NOT NULL,
  `project_description` text NOT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `is_archive` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

--
-- Дамп данных таблицы `projects`
--

INSERT INTO `projects` (`id`, `project_name`, `project_description`, `sort_order`, `is_archive`) VALUES
(1, 'octopus', '', 0, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `projects_members`
--

CREATE TABLE `projects_members` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

--
-- Дамп данных таблицы `projects_members`
--

INSERT INTO `projects_members` (`id`, `user_id`, `project_id`) VALUES
(1, 1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `name` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `board_id` int(11) NOT NULL DEFAULT 0,
  `description` text DEFAULT NULL,
  `status` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `parent_task` int(11) DEFAULT 0,
  `is_archive` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 1,
  `estimate` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `board_id`, `description`, `status`, `name`, `parent_task`, `is_archive`, `sort_order`, `estimate`) VALUES
(1, 1, '<p>add docker to project</p>\r\n\r\n<div class=\"host-lopnbnfpjmgpbppclhclehhgafnifija\" style=\"position: relative; z-index: 2147483647;\">&nbsp;</div>\r\n', 'new', 'Docker', 0, 0, 1, 8);

-- --------------------------------------------------------

--
-- Структура таблицы `tasks_files`
--

CREATE TABLE `tasks_files` (
  `id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `file_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

-- --------------------------------------------------------

--
-- Структура таблицы `tasks_users`
--

CREATE TABLE `tasks_users` (
  `id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

--
-- Дамп данных таблицы `tasks_users`
--

INSERT INTO `tasks_users` (`id`, `task_id`, `user_id`) VALUES
(1, 1, 0),
(2, 1, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `task_time`
--

CREATE TABLE `task_time` (
  `id` int(11) NOT NULL,
  `task_id` int(11) NOT NULL,
  `hours` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login` varchar(250) DEFAULT NULL,
  `email` varchar(250) DEFAULT NULL,
  `password` varchar(250) DEFAULT NULL,
  `email_key` varchar(250) DEFAULT NULL,
  `activated` tinyint(1) DEFAULT 0,
  `lang` varchar(2) DEFAULT 'en'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `login`, `email`, `password`, `email_key`, `activated`, `lang`) VALUES
(1, 'banderas', 'banderas328@yandex.ru', '50009c349b89056fffa4adca4187dc2a', 'JS4DpxACLVvfkNNnLnn6CbVvzOFPc4yBVZwy4AAb', 1, 'en');

-- --------------------------------------------------------

--
-- Структура таблицы `users_filesystem`
--

CREATE TABLE `users_filesystem` (
  `id` int(11) NOT NULL,
  `path` varchar(45) DEFAULT NULL,
  `parent_path` varchar(45) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Дамп данных таблицы `users_filesystem`
--

INSERT INTO `users_filesystem` (`id`, `path`, `parent_path`, `user_id`) VALUES
(1, 'docs', '0', 1),
(2, 'test', '0', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `user_settings`
--

CREATE TABLE `user_settings` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `avatar` varchar(250) DEFAULT NULL,
  `first_name` varchar(250) DEFAULT NULL,
  `second_name` varchar(250) DEFAULT NULL,
  `job` varchar(250) DEFAULT NULL,
  `country` varchar(250) DEFAULT NULL,
  `city` varchar(250) DEFAULT NULL,
  `about` text DEFAULT NULL,
  `phone` varchar(250) DEFAULT NULL,
  `visibility` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;

--
-- Дамп данных таблицы `user_settings`
--

INSERT INTO `user_settings` (`id`, `user_id`, `avatar`, `first_name`, `second_name`, `job`, `country`, `city`, `about`, `phone`, `visibility`) VALUES
(1, 1, 'img/avatars/69592a263da1eglobal-connectivity-network-concept-fsk3ka0hcs2233io.jpg', ' Anton', 'Zhavrid', '', '', '', '', '', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `wallet`
--

CREATE TABLE `wallet` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `balance` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

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
-- Индексы таблицы `task_time`
--
ALTER TABLE `task_time`
  ADD KEY `task_time_id_IDX` (`id`) USING BTREE;

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
-- AUTO_INCREMENT для таблицы `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `blog_attachment`
--
ALTER TABLE `blog_attachment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `blog_comment`
--
ALTER TABLE `blog_comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `boards`
--
ALTER TABLE `boards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `chanels`
--
ALTER TABLE `chanels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `chanels_admins`
--
ALTER TABLE `chanels_admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `chanels_deliver_messages`
--
ALTER TABLE `chanels_deliver_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `chanels_messages`
--
ALTER TABLE `chanels_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `deliver_messages`
--
ALTER TABLE `deliver_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `files_to_tags`
--
ALTER TABLE `files_to_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `frames`
--
ALTER TABLE `frames`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `projects_members`
--
ALTER TABLE `projects_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `tasks_files`
--
ALTER TABLE `tasks_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `tasks_users`
--
ALTER TABLE `tasks_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `task_time`
--
ALTER TABLE `task_time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `users_filesystem`
--
ALTER TABLE `users_filesystem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `user_settings`
--
ALTER TABLE `user_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `wallet`
--
ALTER TABLE `wallet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
