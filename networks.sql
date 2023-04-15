-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Апр 15 2023 г., 18:12
-- Версия сервера: 10.3.37-MariaDB-0ubuntu0.20.04.1
-- Версия PHP: 7.4.3

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
  `blog_content` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` varchar(50) NOT NULL,
  `blog_title` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `blogs`
--

INSERT INTO `blogs` (`id`, `blog_content`, `user_id`, `date`, `blog_title`) VALUES
(6, 'bug fixed - 1) &quot;minimized windows&quot;, user search problems.\r\nfor add yourself to searched users please fill your settings in Settings module', 2, '1657106144', 'tnahks for helping with alpha testing'),
(7, 'we added time estimates and reports', 2, '1662404283', 'task manager updated'),
(8, '&lt;div&gt;&lt;br&gt;&lt;/div&gt;', 26, '1670332125', 'Test');

-- --------------------------------------------------------

--
-- Структура таблицы `blog_attachment`
--

CREATE TABLE `blog_attachment` (
  `id` int(11) NOT NULL,
  `file_name` varchar(250) NOT NULL,
  `blog_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `blog_attachment`
--

INSERT INTO `blog_attachment` (`id`, `file_name`, `blog_id`) VALUES
(6, '/img/blog_images/62c56ee027c8edtQoYIIWA38.jpg', 6),
(7, '/img/blog_images/631646bb5b377u', 7),
(8, '/img/blog_images/638f3eddba523u', 8);

-- --------------------------------------------------------

--
-- Структура таблицы `blog_comment`
--

CREATE TABLE `blog_comment` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `comment` text NOT NULL,
  `blog_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `blog_comment`
--

INSERT INTO `blog_comment` (`id`, `user_id`, `comment`, `blog_id`) VALUES
(1, 7, 'я очень рад !!!', 6),
(2, 7, 'коментарий на \nдве строки', 6);

-- --------------------------------------------------------

--
-- Структура таблицы `boards`
--

CREATE TABLE `boards` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `project_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `boards`
--

INSERT INTO `boards` (`id`, `name`, `project_id`) VALUES
(1, 'dddddddddd', 2),
(2, 'sssssssss', 2),
(3, 'aaaaaaa', 2),
(4, 'sssssssssssasddasdsss', 2),
(5, 'aaaaaaaaaaaaadsad', 2),
(6, 'asdasdasdasd', 2),
(7, 'asdasdasd', 2),
(8, 'asdasdsasd', 2),
(9, 'asdasddddddddddd', 2),
(10, 'asdddddddddaaaaaaaaaaaa', 2),
(11, 'aaaaaaassssssssdddddddd', 2),
(12, 'board', 3),
(13, 'start', 3),
(14, 'end', 3),
(16, 'to do', 4),
(17, 'in progress', 4),
(18, 'done', 4),
(26, 'todo', 7),
(28, 'todo', 8),
(30, 'done', 6),
(31, 'later', 6),
(38, 'todo', 6),
(39, 'Pitch', 10),
(40, 'финмодель', 10),
(42, 'todo', 11),
(44, 'ИДЕИ', 12),
(45, 'ИНТЕРЕСНЫЕ ССЫЛКИ', 12),
(47, 'todo', 13),
(48, 'MUST HAVE', 12),
(49, 'in progres', 13),
(50, 'done', 13),
(51, 'in progres', 11),
(52, 'done', 11),
(53, 'первая колонка', 14),
(56, 'done', 6),
(59, 'thinking', 15),
(60, 'doing', 15),
(61, 'checking', 15),
(62, 'ready', 15),
(63, 'TEST', 6),
(64, 'done2', 6),
(65, '123123123', 17),
(66, '123123', 17),
(68, 'open', 18),
(69, 'in progress', 18),
(70, 'done', 18),
(76, 'Todo', 19),
(77, 'in progress', 19),
(78, 'done', 19),
(79, 'Archive', 19),
(80, 'asdasd', 20),
(81, 'asdasdasdasd', 20);

-- --------------------------------------------------------

--
-- Структура таблицы `chanels`
--

CREATE TABLE `chanels` (
  `id` int(11) NOT NULL,
  `chanel_name` varchar(45) DEFAULT NULL,
  `private` tinyint(4) DEFAULT 0,
  `password` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `chanels`
--

INSERT INTO `chanels` (`id`, `chanel_name`, `private`, `password`) VALUES
(1, 'Elya', 0, NULL),
(2, 'My kanal', 0, NULL),
(3, 'My kanal', 0, NULL),
(4, 'чат Ильи', 0, NULL),
(5, 'My chat', 0, NULL),
(6, 'My chat', 0, NULL),
(7, 'My chat', 1, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `chanels_admins`
--

CREATE TABLE `chanels_admins` (
  `id` int(11) NOT NULL,
  `admins` int(10) DEFAULT NULL,
  `chanel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `chanels_admins`
--

INSERT INTO `chanels_admins` (`id`, `admins`, `chanel_id`) VALUES
(1, 4, 1),
(2, 5, 2),
(3, 5, 3),
(4, 7, 4),
(5, 17, 5),
(6, 17, 6),
(7, 17, 7);

-- --------------------------------------------------------

--
-- Структура таблицы `chanels_deliver_messages`
--

CREATE TABLE `chanels_deliver_messages` (
  `id` int(11) NOT NULL,
  `message_id` varchar(250) DEFAULT NULL,
  `delivered` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

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
(60, '60', NULL),
(61, '61', NULL),
(62, '62', NULL),
(63, '63', NULL),
(64, '64', NULL),
(65, '65', NULL),
(66, '66', NULL),
(67, '67', NULL),
(68, '68', NULL),
(69, '69', NULL),
(70, '70', NULL),
(71, '71', NULL),
(72, '72', NULL),
(73, '73', NULL),
(74, '74', NULL),
(75, '75', NULL),
(76, '76', NULL),
(77, '77', NULL),
(78, '78', NULL),
(79, '79', NULL),
(80, '80', NULL),
(81, '81', NULL),
(82, '82', NULL),
(83, '83', NULL),
(84, '84', NULL),
(85, '85', NULL),
(86, '86', NULL),
(87, '87', NULL),
(88, '88', NULL),
(89, '89', NULL),
(90, '90', NULL),
(91, '91', NULL),
(92, '92', NULL),
(93, '93', NULL),
(94, '94', NULL),
(95, '95', NULL),
(96, '96', NULL),
(97, '97', NULL),
(98, '98', NULL),
(99, '99', NULL),
(100, '100', NULL),
(101, '101', NULL),
(102, '102', NULL),
(103, '103', NULL),
(104, '104', NULL),
(105, '105', NULL),
(106, '106', NULL),
(107, '107', NULL),
(108, '108', NULL),
(109, '109', NULL),
(110, '110', NULL),
(111, '111', NULL),
(112, '112', NULL),
(113, '113', NULL),
(114, '114', NULL),
(115, '115', NULL),
(116, '116', NULL),
(117, '117', NULL),
(118, '118', NULL),
(119, '119', NULL),
(120, '120', NULL),
(121, '121', NULL),
(122, '122', NULL),
(123, '123', NULL),
(124, '124', NULL),
(125, '125', NULL),
(126, '126', NULL),
(127, '127', NULL),
(128, '128', NULL),
(129, '129', NULL),
(130, '130', NULL),
(131, '131', NULL),
(132, '132', NULL),
(133, '133', NULL),
(134, '134', NULL),
(135, '135', NULL),
(136, '136', NULL),
(137, '137', NULL),
(138, '138', NULL),
(139, '139', NULL),
(140, '140', NULL),
(141, '141', NULL),
(142, '142', NULL),
(143, '143', NULL),
(144, '144', NULL),
(145, '145', NULL),
(146, '146', NULL),
(147, '147', NULL),
(148, '148', NULL),
(149, '149', NULL),
(150, '150', NULL),
(151, '151', NULL),
(152, '152', NULL),
(153, '153', NULL),
(154, '154', NULL),
(155, '155', NULL),
(156, '156', NULL),
(157, '157', NULL),
(158, '158', NULL),
(159, '159', NULL),
(160, '160', NULL),
(161, '161', NULL),
(162, '162', NULL),
(163, '163', NULL),
(164, '164', NULL),
(165, '165', NULL),
(166, '166', NULL),
(167, '167', NULL),
(168, '168', NULL),
(169, '169', NULL),
(170, '170', NULL),
(171, '171', NULL),
(172, '172', NULL),
(173, '173', NULL),
(174, '174', NULL),
(175, '175', NULL),
(176, '176', NULL),
(177, '177', NULL),
(178, '178', NULL),
(179, '179', NULL),
(180, '180', NULL),
(181, '181', NULL),
(182, '182', NULL),
(183, '183', NULL),
(184, '184', NULL),
(185, '185', NULL),
(186, '186', NULL),
(187, '187', NULL),
(188, '188', NULL),
(189, '189', NULL),
(190, '190', NULL),
(191, '191', NULL),
(192, '192', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `chanels_messages`
--

CREATE TABLE `chanels_messages` (
  `id` int(11) NOT NULL,
  `message` text DEFAULT NULL,
  `from_user` int(11) DEFAULT NULL,
  `to_chanel` int(11) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `chanels_messages`
--

INSERT INTO `chanels_messages` (`id`, `message`, `from_user`, `to_chanel`, `date`) VALUES
(1, 'privet\n', 2, 1, '1657110776'),
(2, 'test', 2, 2, '1657129777'),
(3, 'ey', 2, 3, '1657129786'),
(4, 'ay', 6, 3, '1657179413'),
(5, 'привет ВСЕМ!! ', 7, 1, '1657202125'),
(6, 'так, а почему меня не подписывает ?\n', 7, 1, '1657202204'),
(7, 'хм, сек', 7, 1, '1657202223'),
(8, 'нука попробуем', 7, 1, '1657202408'),
(9, 'привет, я в тот канал попал ?\n', 7, 3, '1657202674'),
(10, 'что то странное происходит\n', 7, 3, '1657202720'),
(11, 'так, интерестно', 7, 3, '1657202776'),
(12, 'а сейчас отобразит ?', 7, 3, '1657203033'),
(13, '', 7, 3, '1657203193'),
(14, '1', 7, 3, '1657203196'),
(15, 'ждем ...', 7, 3, '1657203303'),
(16, 'вопрос: есть ограничение по кол-ву символов ', 7, 3, '1657203328'),
(17, 'в сообщении ?', 7, 3, '1657203337'),
(18, 'есть ограничение по кол-ву символов ????', 7, 3, '1657203503'),
(19, 'походу, если сообщение не поме-', 7, 3, '1657203582'),
(20, 'щается в одну строчку, то оно ', 7, 3, '1657203603'),
(21, 'не отображается в чате :(', 7, 3, '1657203620'),
(22, 'привет\n', 6, 1, '1657216096'),
(23, 'тест тест', 6, 1, '1657216124'),
(24, 'прием\n', 2, 1, '1657216145'),
(25, '', 2, 1, '1657216148'),
(26, 'тест', 2, 1, '1657216178'),
(27, 'раз раз\n', 6, 1, '1657216207'),
(28, '\n', 6, 1, '1657216256'),
(29, '\n\n\n', 6, 1, '1657216265'),
(30, 'длинна поля видимо', 2, 1, '1657216277'),
(31, '1', 2, 1, '1657216281'),
(32, '2', 2, 1, '1657216284'),
(33, '22', 2, 1, '1657216287'),
(34, '333', 2, 1, '1657216290'),
(35, '4444', 2, 1, '1657216294'),
(36, '5555', 2, 1, '1657216297'),
(37, '', 2, 1, '1657216300'),
(38, '555555555555555', 2, 1, '1657216311'),
(39, '5555555555555555555555555', 2, 1, '1657216316'),
(40, '5555555555555555555555555555555555555555', 2, 1, '1657216326'),
(41, 'utf8 emoji не отправляются)', 6, 1, '1657216328'),
(42, '666666666666666666666666666666666666666666', 2, 1, '1657216345'),
(43, '66666666666666666666666666666666666666666666', 2, 1, '1657216363'),
(44, '!вот длинна максимального сообщения почему то', 2, 1, '1657216444'),
(45, 'ы', 6, 1, '1657216450'),
(46, 'вот так вот баг )\n', 2, 1, '1657216467'),
(47, 'sample text', 6, 1, '1657216489'),
(48, 'если сообщение больше то оно пропадает\n', 2, 1, '1657216493'),
(49, 'мда, но на то и есть тестирвание :)\n', 7, 1, '1657216495'),
(50, '大大大大大大大大大大大大', 6, 1, '1657216507'),
(51, 'я в третьем чате писал', 7, 1, '1657216521'),
(52, 'хуя се как можно\n', 2, 1, '1657216521'),
(53, '                                          ', 6, 1, '1657216523'),
(54, 'Руслан а как ты это сделал', 2, 1, '1657216544'),
(55, 'некоторые сообщения по 2 раза отображаются', 6, 1, '1657216551'),
(56, 'китайские символы скопипастил)', 6, 1, '1657216566'),
(57, 'если страницу обновить - все норм', 7, 1, '1657216577'),
(58, 'дубли пропадают', 7, 1, '1657216589'),
(59, 'изменил длинну максимального сообшщения\n', 2, 1, '1657216622'),
(60, 'было varchar 45 символов строка', 2, 1, '1657216634'),
(61, 'ща мы это проверим быстро :)ща мы это проверим быстро :)ща мы это проверим быстро :)ща мы это проверим быстро :)ща мы это проверим быстро :)ща ', 7, 1, '1657216655'),
(62, '              __\n    ..=====.. |==|\n    ||     || |= |\n _  ||     || |^*| _\n|=| o=,===,=o |__||=|\n|_|  _______)~`)  |_|\n    [=======]  ()       ldb', 2, 1, '1657216679'),
(63, 'хеллоу\n', 4, 1, '1657216690'),
(64, '&lt;pre&gt;\n              __\n    ..=====.. |==|\n    ||     || |= |\n _  ||     || |^*| _\n|=| o=,===,=o |__||=|\n|_|  _______)~`)  |_|\n    [=======]  ()       ldb\n&lt;/pre', 2, 1, '1657216697'),
(65, 'хеллоу', 2, 1, '1657216714'),
(66, 'привет', 7, 1, '1657216722'),
(67, 'Ffffffffffffffffffffffffffffffffffffffffffffffffffgffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfccffffffffffffffffffffgffggffgffffffffftffrtffttfff', 6, 1, '1657216737'),
(68, 'чтобы не быть null null. и попасть в поиск пользователей. надо настроить settings', 2, 1, '1657216739'),
(69, 'ёёё', 5, 1, '1657216744'),
(70, 'Имя Или Второе имя', 2, 1, '1657216755'),
(71, 'в настройках нету уведомления, что внесеннаяинформация по имени и прочему- сохранена :(\n', 7, 1, '1657216778'),
(72, 'добавлю какой нить алерт', 2, 1, '1657216814'),
(73, 'Null', 6, 1, '1657216828'),
(74, 'NULL', 6, 1, '1657216836'),
(75, '&lt;script&gt;alert(&quot;xss&quot;);&lt;/script&gt;', 2, 1, '1657216869'),
(76, 'test;show databases;', 2, 1, '1657216886'),
(77, 'ну вроде все норм. Руслан я принял твой приглос и всем кто заполнил настройки и появился в поиске отправил запросы в друзья. так можно буд', 2, 1, '1657216930'),
(78, 'вопрос: нельзя выделить текс в чате, это фича или баг ?', 7, 1, '1657216945'),
(79, 'дет попасть в файловую систему каждого из нас', 2, 1, '1657216947'),
(80, 'вообще нигде выделить нельзя', 2, 1, '1657216959'),
(81, 'я сделаю чтобы можно было', 2, 1, '1657216969'),
(82, 'когда мы добавимся в друзья мы сможем ходить друг другу в систему и добавлять друзей в проекты', 2, 1, '1657217008'),
(83, 'https://www.google.com/', 6, 1, '1657217031'),
(84, 'я пока один создам и всех кто ко мне добавиться и найдет туда добавлю', 2, 1, '1657217034'),
(85, 'всем спасибо. понятно что надо сделать даже не строку 255 а text длинну поля', 2, 1, '1657217061'),
(86, 'и подверстать и чтобы текст выделять ', 2, 1, '1657217080'),
(87, 'я не поняла про настройки\n', 4, 1, '1657217095'),
(88, 'спасибо всем огромное, вы лучшие я вас каждого люблю', 2, 1, '1657217102'),
(89, 'смотри', 2, 1, '1657217107'),
(90, 'отодвинь окно как в операционке и найди модуль settings', 2, 1, '1657217124'),
(91, 'и мы тебя\n', 4, 1, '1657217125'),
(92, 'заполни там данные о себе', 2, 1, '1657217138'),
(93, 'аватар там имя и тд', 2, 1, '1657217146'),
(94, 'тогда у тебя появиться имя в чате и ты появишься в модуле search', 2, 1, '1657217161'),
(95, 'в поиске пользователя', 2, 1, '1657217166'),
(96, 'и там мы сможем добавить тебя в друзья', 2, 1, '1657217184'),
(97, 'но сначала. чтобы стать видимой. надо заполнить настройки Settings', 2, 1, '1657217208'),
(98, 'всем говорю. что сверху слева есть Resets\nи там есть кнопка reset interface', 2, 1, '1657217238'),
(99, 'она служебная так то. для разработки. но я ее пока не убрал. она перезагружает интерфейс', 2, 1, '1657217284'),
(100, 'вставки из буфера нету', 7, 1, '1657217288'),
(101, 'думаю и уберат не нежно, просто переименовать в &quot;закрыть все окна&quot;. а что, удобно. бац и у тебя пустой рабочий стол ', 7, 1, '1657217376'),
(102, 'мы конкнкретно тут устроим свой закрытый клуб. а всем остальным я буду продавать копии :) а в нашу мы будем пускать только кого сами будем ', 2, 1, '1657217382'),
(103, 'Илья такая есть\nслева снизу', 2, 1, '1657217412'),
(104, 'она все закроет', 2, 1, '1657217430'),
(105, 'вопрос наиный , но все же, а как на нагрузку чат проверить ?\n', 7, 1, '1657217441'),
(106, 'ну вроде тянет', 2, 1, '1657217451'),
(107, 'это ж рабочая штука\nща погоди . я отпишу. пофлудим я нагрузку процессора процессами посмотрю. сколько пыха и проц отжирают', 2, 1, '1657217482'),
(108, 'неа, она сворачивает окна. сейчас проверил.', 7, 1, '1657217494'),
(109, 'истина в том что их нельзя закрыть. их можно только свернуть или спрятать :)', 2, 1, '1657217551'),
(110, 'пофлудите плиз', 2, 1, '1657217591'),
(111, '6', 2, 1, '1657217595'),
(112, '7', 2, 1, '1657217596'),
(113, '8', 2, 1, '1657217598'),
(114, '4', 2, 1, '1657217599'),
(115, 'не вопрос', 7, 1, '1657217600'),
(116, '2', 2, 1, '1657217602'),
(117, '5', 2, 1, '1657217605'),
(118, 'йцу', 7, 1, '1657217607'),
(119, 'йцу', 7, 1, '1657217609'),
(120, 'йу', 7, 1, '1657217610'),
(121, 'уйцу', 7, 1, '1657217612'),
(122, 'цуйцу', 7, 1, '1657217613'),
(123, 'йцуйцу', 7, 1, '1657217615'),
(124, '5', 2, 1, '1657217615'),
(125, 'йцу', 7, 1, '1657217616'),
(126, 'йцу', 7, 1, '1657217617'),
(127, 'йуцй', 7, 1, '1657217619'),
(128, 'йцу', 7, 1, '1657217620'),
(129, 'у', 7, 1, '1657217621'),
(130, 'все\n', 2, 1, '1657217622'),
(131, 'йцу', 7, 1, '1657217622'),
(132, 'йцу', 7, 1, '1657217624'),
(133, 'хватит\n', 2, 1, '1657217626'),
(134, 'короче при том что сейчас несколько человек в системе. сервер на 2ядра 8 гигов оператоса. тратит на все 1.5% своей максимальной загрузки', 2, 1, '1657217684'),
(135, '....................../´¯/)\n....................,/¯../\n.................../..../\n............./´¯/\'...\'/´¯¯`·¸\n........../\'/.../..../......./¨¯\\', 5, 1, '1657217714'),
(136, 'тоесть примерно 50$ сервер держит 150 пользователей в системе', 2, 1, '1657217732'),
(137, 'без проблем', 2, 1, '1657217744'),
(138, '', 7, 0, '1657217763'),
(139, '', 7, 0, '1657217765'),
(140, '', 7, 0, '1657217768'),
(141, 'на 3000 пользователей надо 1000$ мощностей в яндекс облаке', 2, 1, '1657217778'),
(142, '', 7, 0, '1657217779'),
(143, '', 7, 0, '1657217787'),
(144, '', 7, 0, '1657217795'),
(145, 'на своей стойке можно выдержать тысяч 10 000 без проблем', 2, 1, '1657217844'),
(146, 'я глук поймал. если попытаться сейчас при открытом чате создать еще один - этот ужу не работает. нужно сбрасывать интерфейс', 7, 1, '1657217878'),
(147, 'понял. по задумке можно открывать сразу 1. чат с человеком. 1 публичный. и один приватный. я посмотрю твой баг. \n', 2, 1, '1657217932'),
(148, 'спасибо всем', 2, 1, '1657217940'),
(149, 'наверное с точки зрения тестирования пока что все.', 2, 1, '1657217956'),
(150, 'кому интересно полазьте позадавайте вопросы', 2, 1, '1657217970'),
(151, 'как удалить уже созданный чат ?', 7, 1, '1657218010'),
(152, 'пока никак', 2, 1, '1657218106'),
(153, ':)', 2, 1, '1657218112'),
(154, 'меня попросить :)', 2, 1, '1657218117'),
(155, 'вопрос: интеграция облочных редакторов планируется ? просто как текста набирать и таблички всякие ? ', 7, 1, '1657218161'),
(156, 'да. будет officejs внедрен', 2, 1, '1657218225'),
(157, 'обработка офисных файлов прямо тут', 2, 1, '1657218234'),
(158, 'и модуль звонков', 2, 1, '1657218244'),
(159, 'и почта', 2, 1, '1657218249'),
(160, 'ооо, это огонь!', 7, 1, '1657218257'),
(161, 'но после стабилизации прототипа и выпуска альфы', 2, 1, '1657218261'),
(162, 'под это я и заказываю бизнес анализ. чтобы искать инвестиции а не просить денег', 2, 1, '1657218301'),
(163, 'Это я с телефона пишу', 7, 1, '1657218369'),
(164, 'прикольно', 2, 1, '1657218378'),
(165, 'но под телефон она не писалась и не тестировалась и просто на свой страх и риск :)', 2, 1, '1657218396'),
(166, 'так, одновременно две сессии работает и комп и телефон работает\n', 7, 1, '1657218413'),
(167, 'ну норм', 2, 1, '1657218428'),
(168, 'блокчейн . web 3.0', 2, 1, '1657218451'),
(169, 'шучу', 2, 1, '1657218456'),
(170, 'станый добрый аякс', 2, 1, '1657218464'),
(171, 'я уверяю, что половина будет с телефонов или планшетов сидеть  \n', 7, 1, '1657218466'),
(172, 'я писал десктопный софт. планшеты и телефоны даже не тестировал. но просто это браузер и бразер', 2, 1, '1657218506'),
(173, 'в телефоне есть возможность текст выделять', 7, 1, '1657218506'),
(174, 'в этом и суть терминальных систем. в 1960-1980 оно так и было', 2, 1, '1657218536'),
(175, 'брайзеры - вестчь !', 7, 1, '1657218555'),
(176, 'на верхнем этаже сервер. и все к нему терминалами подключены', 2, 1, '1657218558'),
(177, 'тот же принцип напрасно забытый. только вместо сервера. облако', 2, 1, '1657218577'),
(178, 'причем не только облако и свой собственный сервер в локальной сети', 2, 1, '1657218598'),
(179, 'никаких зависимостей от внешних сетей и сервисов :) только SMTP для почты. но его тоже можно свой поднять', 2, 1, '1657218636'),
(180, 'Антон, пришол к тебе запрос на добавление вдрузья от меня ?', 7, 1, '1657218760'),
(181, 'Да\nдобавил', 2, 1, '1657218791'),
(182, 'не могу отправить личное сообщение ', 7, 1, '1657218871'),
(183, 'зайди в чат в разеде с моим именем. оно отправляется наверное. надо просто чат со мной после этого открыть.\n', 2, 1, '1657219049'),
(184, 'привет', 7, 1, '1657452403'),
(185, 'http://51.250.48.184/main', 7, 1, '1657452989'),
(186, 'test', 2, 1, '1658094763'),
(187, 'ау! \n', 17, 6, '1660053172'),
(188, 'tedt', 2, 5, '1660056857'),
(189, ':)\n', 2, 1, '1662404101'),
(190, 'kjhkjh', 19, 1, '1666006334'),
(191, '<p><strong>Dot</strong></p>\n\n<pre>\n                         .mm\n                      .mMMM       .mmmm.\n                     /MMMMM    .mMMMMMM)\n                    /MMMMMM.  .mMMMMM&quot;&#39;\n                    MMMMMMM| ,MMMMMMM&#39;\n                    MMMMMMM| mMMMMM&#39;\n                    \\MMMMMMMSsMMM/&#39;\n                    `MMM.sSSSSsMsSs\n                   .. /SSSSSSSSsSSSs.\n                  (SSss.SSSSSS/SSSSSSs,\n                   `SSSSsSSS&#39;SS/sSSS&quot;S)\n                    SSSSSSSNNNNn.SSSss,\n                   (SSSSSSSsNNNNN)SSSSs,__\n                   `&quot;SSSsSSSSs~N~sSSSSS)MMMMmmm\n                      SSSSSSSSSS\\SSSS&quot;mMMMMMMMMMMm..        .mM|\n                  mmMMmSSSSSSS&quot;mMMMMMMMMMMMMMMMMMMMMMMmm.mmmMMMM)\n\\Mm..        mmMMMMMMMMMmmmmmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMmMM\n \\MMMmm.mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM/&quot;      &quot;`MMMMMMMMmMM/\n |MMMMMMmMMMMMMMMMMMMMMMMMM&quot;&quot;&quot;&quot;&quot;MMMMMMMMMMM|         \\MMMMMMMMMM&#39;\n  M\\MMMMMMMMMMMMMMMMMMM&quot;&#39;          `.MMMMM(           \\MMMMMMMM/\n  \\MmMMMMMMMMMMMMMMMM&quot;&#39;               `.MM/            \\MMMMMMM/\n   \\MMmMMMMMMMMMMMMM/                   `M|             )MMMMMM\n    \\MMMMMMMMMMMMMMM&#39;                    &quot;               MMMMM/\n    |MMMMMMMMMMMMMM/                                     MMMM/\n     \\MMMMMMMMMMMMM(                                     MMMM&#39;\n      \\MMMMMMMMMMMM|                         ...         MMM/\n       \\MMMMMMMMMMMM\\                  .o.   OOOo       )MMM&#39;\n       `MMMMMMMMMMMMM.                oOOO   OOOOo      /MM/\n        \\MMMMMMMMMMMMM\\              (OOOO   `OOOO     /MMM/\n         \\MMMMMMM&quot;&quot;&quot;&quot;MM\\.             OOOO  ___`&quot;&#39;    ,mMMM(_\n          \\MMMM/       &quot;-.             &quot;.**&quot;&#39;  )***   /      &#39;.\n           \\MM(                   .-&#39;- (**(   .**** .----,.   )\n            \\M(                   `    (*********/    /   &#39;  /\n             \\`.       ..-----\\          &quot;&quot;&quot;&quot;&quot;&quot;      /      /\n              ``.     `    `\\.                     ,&#39;     /&#39;\n                \\.           `\\.                .-&#39;    ,/&#39;\n                  `\\.           `-._________--&#39;      .&#39;\n                     ``-..                     /  _,&#39;\n                          &quot;&quot;`--____\\.       ,/&#39;&quot;&quot;&quot;\n                                    `\\____/&#39;\n</pre>\n\n<p><strong>Yakko</strong></p>\n\n<pre>\n                                                  .mMMMMm.\n                                               .mMMMMMMMMMMMm\n          ....                               .mMMMMMMMMMMMMMM.\n       .mMMMMMm.                           .mMMMMMMMMMMMMMMMM&#39;\n     .mMMMMMMMM)                          .MMMMMMMMMMMMMMM/&#39;\n   (MMMMMMMMMM/                          .MMMMMMMMMMMM&quot;&#39;\n  mMMMMMMMMMM/                           (MMMMMMMMM&quot;&#39;\n /MMMMMMMMMM/                            |MMMMMMMM/\n MMMMMMMMMM/                             MMMMMMMM/\n(MMMMMMMMMM(                            /MMMMMMM/                        \n MMMMMMMMMM|                            |MMMMMM&quot;\n \\MMMMMMMMM\\              .mmmm..      |MMMMM`\n  \\MMMMMMMMMM.          .mMMMMMMMMm..mMMMm.MM/\n   \\MMMMMMMMM\\.       mMMMMMMMMMMMMMMMMMMMMMm`\n     \\MMMMMMMMM.    .mMMMMMMMM&quot;&quot;&quot;MMMMMMMMMMMMMm\n      `?MMMMMMMMm  mMMMMMMMM&quot;&#39;    &quot;MMMMMMMMMMMMm.\n        `&quot;MMMMMMMm/MMMMMMM/&#39;        \\MMMMMMMMMMMM.\n          `\\MMMMM/MMMMMM&quot;&#39;           `MMMMMMM&quot;&quot;&quot;Mm.\n            `\\MM/MMMMMM/             `MMMM&quot;&#39;   &#39;\\M.\n              ./MMMMMM/&#39;               `&quot;&#39;        &#39;\\\n              /MMMMMMM&#39;                             \\\n             /MMMMMMM/                              `,\n            /MMMMMMMM                                |\n           .MMMMMMMMM                                )\n           (MMMMMMMM|                                |\n           |MMMMMMMM|.                               )\n           |MMMMMMMMM|          oOo    oOo.         .&#39;                  \n           |MMMMMMMMM|         (OOOo   OOOO.        /\n           (MMMMMMMMM\\          OOOO.  OOOO).      &#39;\n           \\MMMMMMMMMM         `OOOO   `OOO&#39;      /\n     x..   `\\MMMMMMMMMm         `OO&quot;    _&quot;&#39;__    ./Mm._______\n     \\MMMmm.MM&quot;&#39;     &#39;\\           ..**&quot;&quot;&quot;&quot;&quot;***. &lt;&quot;&quot;&quot;&quot;,MMMM/&#39;  .\n      \\MMMMMM&#39;                   .**&quot;     ,&#39;****        &#39;)mMMMM&#39;\n       `\\MMM(                    (**.__.******&quot;&#39;         )MMM/\n      xmm&gt;MMM\\                   `********&quot;&quot;&#39;           )M/&#39;\n       `\\MMMMMm,                    &quot;&quot;&quot;                ,&#39;M&#39;\n            `-&quot;Mm.                                   ./&quot;&#39;\n                  `\\.                              ,/&#39;\n                     `\\.                       _,/&#39;\n                        `.        /`     _,-/&quot;&#39;\n                         M\\      ( \\   /&#39;\n                         MMm.     `&#39;  /\n                         MMMMm.     ,&#39;\n                         MMMMMMMmmmMM                                                                                   \n                         MMMMMMMmmmMM\n                         MMMMMMMMMMMM</pre>\n', 2, 1, '1677070034'),
(192, '<p>test</p>\n', 2, 1, '1677070060');

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
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 1),
(6, 6, 1),
(7, 7, 1),
(8, 8, 1),
(9, 9, 1),
(10, 10, 1),
(11, 11, 1),
(12, 12, 1),
(13, 13, 1),
(14, 14, 1),
(15, 15, 1);

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
  `type` varchar(250) NOT NULL,
  `shared` int(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `files`
--

INSERT INTO `files` (`id`, `file_name`, `file_title`, `user_id`, `directory`, `type`, `shared`) VALUES
(1, 'userfiles/2/262c46750bf5af300px-Хороший_Космонавт.jpg', '300px-Хороший_Космонавт.jpg', 2, 2, 'image/jpeg', 0),
(3, 'userfiles/13/1362c680e0eba88Screenshot_1.jpg', 'Screenshot_1.jpg', 13, 0, 'image/jpeg', 0),
(4, 'userfiles/2/262d45014143aaphoto_2022-07-14_09-23-34.jpg', 'photo_2022-07-14_09-23-34.jpg', 2, 2, 'image/jpeg', 0),
(6, 'userfiles/2/262d4842e555e2photo_2022-07-14_09-23-34.jpg', 'photo_2022-07-14_09-23-34.jpg', 2, 2, 'image/jpeg', 0),
(7, 'userfiles/2/262d484974570dphoto_2022-07-14_09-23-34.jpg', 'photo_2022-07-14_09-23-34.jpg', 2, 28, 'image/jpeg', 0),
(8, 'userfiles/2/262d56858a2380pexels-photo-2246476.jpeg', 'pexels-photo-2246476.jpeg', 2, 2, 'image/jpeg', 0),
(9, 'userfiles/7/762d5a671c7f84test_file.txt', 'test_file.txt', 7, 22, 'text/plain', 0),
(10, '/userfiles/7/', 'test_file.txt', 2, 2, 'text/plain', 0),
(12, 'userfiles/17/1762fcd26fc6486FM1.png', 'FM1.png', 17, 0, 'image/png', 0),
(13, 'userfiles/17/1762fcd327f3093FM2.png', 'FM2.png', 17, 0, 'image/png', 0),
(14, 'userfiles/17/1762fcdf986997d11.png', '11.png', 17, 0, 'image/png', 0),
(16, 'userfiles/2/26335cc87124bd4NOcZ2BpEwY.jpg', '4NOcZ2BpEwY.jpg', 2, 0, 'image/jpeg', 0),
(17, '/userfiles/7/', 'test_file.txt', 2, 32, 'text/plain', 0),
(18, '/userfiles/7/', 'test_file.txt', 2, 0, 'text/plain', 0),
(20, 'userfiles/22/226362aa8d1f3f7.gitignore', '.gitignore', 22, 36, 'text/plain', 0),
(21, 'userfiles/22/226362aa925ccbdtsconfig.build.json', 'tsconfig.build.json', 22, 36, 'application/json', 0),
(22, 'userfiles/2/26364004b6eebaAntonZhauryd_CV.docx', 'AntonZhauryd_CV.docx', 2, 0, 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 0),
(23, 'userfiles/22/22636bfcd772ee3images.jpg', 'images.jpg', 22, 0, 'image/jpeg', 0),
(24, 'userfiles/22/22636bfce015d7fpng-clipart-email-computer-icons-email-miscellaneous-blue.png', 'png-clipart-email-computer-icons-email-miscellaneous-blue.png', 22, 0, 'image/png', 0),
(25, 'userfiles/22/226390869dbf574woz-n6.jpg', 'woz-n6.jpg', 22, 0, 'image/jpeg', 0),
(26, 'userfiles/2/2639d7c3a3a64aresume', 'resume', 2, 0, 'text_file', 0),
(28, 'userfiles/2/263c3fc4620b38ilia resume', 'ilia resume', 2, 0, 'text_file', 0),
(29, 'userfiles/2/263c4065c4caadtext file', 'text file', 2, 0, 'text_file', 0),
(30, 'userfiles/28/2863d3c2509ca46text file', 'text file', 28, 0, 'text_file', 0),
(31, 'userfiles/2/2641193409dbffMSC5ec4a5QU.jpg', 'MSC5ec4a5QU.jpg', 2, 0, 'image/jpeg', 0);

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
-- Структура таблицы `frames`
--

CREATE TABLE `frames` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `frames`
--

INSERT INTO `frames` (`id`, `url`, `image`, `name`, `user_id`) VALUES
(1, 'https://www.combats.com/', 'userfiles/9/962c5561f1c432', 'https://www.combats.com/', 9),
(8, 'https://www.combats.com/', 'userfiles/2/26335cdd71e487photo_2022-07-14_09-23-34.jpg', 'https://www.combats.com/', 2),
(21, 'https://fh.by', 'userfiles/19/19634d3e531fb801648402092721.jpeg', 'fh.by', 19),
(22, 'https://mantis.worldoctopus.com:500/', 'userfiles/2/263c7e615196c3images.jpg', 'mantis', 2);

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
(1, 9, 9, 1),
(2, 6, 2, 1),
(3, 2, 6, 1),
(4, 2, 9, 1),
(5, 13, 2, 0),
(6, 13, 2, 0),
(7, 13, 2, 0),
(8, 13, 2, 0),
(9, 13, 2, 0),
(10, 13, 2, 0),
(11, 13, 2, 0),
(12, 13, 2, 0),
(13, 13, 2, 0),
(14, 13, 2, 0),
(15, 13, 2, 0),
(16, 13, 2, 0),
(17, 2, 7, 1),
(18, 2, 5, 0),
(19, 7, 2, 1),
(20, 2, 17, 1),
(21, 17, 7, 0),
(22, 17, 5, 0),
(23, 17, 6, 0),
(24, 17, 9, 1),
(25, 2, 22, 1),
(26, 27, 2, 0),
(27, 27, 2, 0),
(28, 27, 2, 0),
(29, 27, 2, 0),
(30, 27, 9, 0),
(31, 27, 6, 0),
(32, 27, 5, 0),
(33, 27, 7, 0),
(34, 27, 17, 0),
(35, 27, 22, 0),
(36, 27, 9, 0),
(37, 27, 9, 0),
(38, 27, 9, 0);

-- --------------------------------------------------------

--
-- Структура таблицы `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `from_user` int(11) DEFAULT NULL,
  `to_user` int(11) DEFAULT NULL,
  `text` text DEFAULT NULL,
  `date` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `messages`
--

INSERT INTO `messages` (`id`, `from_user`, `to_user`, `text`, `date`) VALUES
(1, 2, 6, 'ey test', '1657218738'),
(2, 7, 2, 'добался в друзья. работает !', '1657218837'),
(3, 7, 2, 'добался в друзья. работает !', '1657218839'),
(4, 7, 2, 'добался в друзья. работает !', '1657218842'),
(5, 7, 2, 'добался в друзья. работает !', '1657218844'),
(6, 7, 2, 'добался в друзья. работает !', '1657218851'),
(7, 7, 2, 'добался в друзья. работает !', '1657218852'),
(8, 7, 2, 'добался в друзья. работает !', '1657218852'),
(9, 7, 2, 'добался в друзья. работает !', '1657218877'),
(10, 7, 2, 'добался в друзья. работает !', '1657218942'),
(11, 7, 2, 'добался в друзья. работает !', '1657218943'),
(12, 2, 7, 'test', '1657219016'),
(13, 7, 2, '1', '1657219136'),
(14, 7, 2, 'Так, ну вот я и тут :)', '1658334834'),
(15, 7, 2, 'И текст в чате можно выделить. Ок', '1658334913');

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `network`
--

INSERT INTO `network` (`id`, `path_id`, `is_public`, `is_password`, `password`) VALUES
(11, 19, 0, 1, 'testdir'),
(15, 22, 1, 0, NULL),
(22, 9, 1, 0, NULL),
(24, 2, 1, 0, NULL),
(26, 28, 1, 0, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `html_id` varchar(255) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `notifications`
--

INSERT INTO `notifications` (`id`, `text`, `html_id`, `user_id`) VALUES
(1, 'you have new project:  Anton', 'test', 4),
(2, 'you have new project:  aaa', 'test', 6),
(3, 'you have new project:  pro', 'test', 13),
(4, 'you have new message from Anton Zhavrid', 'test', 6),
(5, 'you have new message from Ilia Bylina', 'test', 2),
(6, 'you have new message from Ilia Bylina', 'test', 2),
(7, 'you have new message from Ilia Bylina', 'test', 2),
(8, 'you have new message from Ilia Bylina', 'test', 2),
(9, 'you have new message from Ilia Bylina', 'test', 2),
(10, 'you have new message from Ilia Bylina', 'test', 2),
(11, 'you have new message from Ilia Bylina', 'test', 2),
(12, 'you have new message from Ilia Bylina', 'test', 2),
(13, 'you have new message from Ilia Bylina', 'test', 2),
(14, 'you have new message from Ilia Bylina', 'test', 2),
(15, 'you have new message from Anton Zhavrid', 'test', 7),
(16, 'you have new message from Ilia Bylina', 'test', 2),
(17, 'you have new project:  alpha testing', 'test', 6),
(18, 'you have new project:  alpha testing', 'test', 7),
(19, 'you have new project:  alpha testing', 'test', 2),
(20, 'you have new task: test switching chats in project :alpha testing', 'test', 7),
(21, 'you have new task: test switching chats in project :alpha testing', 'test', 2),
(22, 'you have new project:  test project Ilia', 'test', 2),
(23, 'you have new project:  test project Ilia', 'test', 7),
(24, 'you have new project:  тестовый проект Илья', 'test', 7),
(25, 'you have new project:  тестовый проект для проверки аривации и восстановления', 'test', 7),
(26, 'you have new project:  OCTOPUS', 'test', 14),
(27, 'you have new message from Ilia Bylina', 'test', 2),
(28, 'you have new message from Ilia Bylina', 'test', 2),
(29, 'you have new project:  Проект 1', 'test', 17),
(30, 'you have new project:  Корректировки документов acer', 'test', 2),
(31, 'you have new project:  Корректировки документов acer', 'test', 17),
(32, 'you have new project:  Доработки task-менеджера', 'test', 2),
(33, 'you have new project:  Доработки task-менеджера', 'test', 17),
(34, 'you have new project:  Привлечение инвестиций', 'test', 2),
(35, 'you have new project:  Привлечение инвестиций', 'test', 17),
(36, 'you have new project:  Доработки хранилища', 'test', 2),
(37, 'you have new project:  Доработки хранилища', 'test', 17),
(38, 'you have new project:  test projekt ilia', 'test', 18),
(39, 'you have new project:  Test', 'test', 9),
(40, 'you have new project:  111', 'test', 19),
(41, 'you have new project:  111', 'test', 19),
(42, 'you have new project:  videoconference microservice', 'test', 2),
(43, 'you have new project:  videoconference microservice', 'test', 6),
(44, 'you have new project:  frontend', 'test', 2),
(45, 'you have new project:  asdasd', 'test', 28);

-- --------------------------------------------------------

--
-- Структура таблицы `payed_files`
--

CREATE TABLE `payed_files` (
  `id` int(11) NOT NULL,
  `file_id` int(10) NOT NULL,
  `cost` int(11) NOT NULL,
  `description` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `payed_files_to_tags`
--

CREATE TABLE `payed_files_to_tags` (
  `id` int(11) NOT NULL,
  `tag_id` int(10) NOT NULL,
  `file_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `private_chanels_requests`
--

INSERT INTO `private_chanels_requests` (`id`, `chanel_id`, `user_id`, `is_confirmed`, `pending_response`) VALUES
(1, 1, 4, 1, 0),
(2, 2, 5, 1, 0),
(3, 3, 5, 1, 0),
(4, 4, 7, 1, 0),
(5, 5, 17, 1, 0),
(6, 6, 17, 1, 0),
(7, 7, 17, 1, 0);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `projects`
--

INSERT INTO `projects` (`id`, `project_name`, `project_description`, `sort_order`, `is_archive`) VALUES
(1, 'Anton', 'Test', 0, 1),
(2, 'aaa', 'aaaaaaaaa', 0, 0),
(3, 'pro', '', 0, 0),
(5, 'test project Ilia', 'test project Ilia. Описание проекта.', 0, 1),
(6, 'тестовый проект Илья', 'описание тестового проекта Илья', 0, 0),
(7, 'тестовый проект для проверки аривации и восстановления', '', 0, 0),
(8, 'OCTOPUS', 'Финансовая модель, инвест. мемо', 0, 0),
(9, 'Проект 1', 'проект проект проект проект', 0, 1),
(10, 'Корректировки документов acer', '', 0, 0),
(11, 'Доработки task-менеджера', 'сюда будем писать все, что было обнаружено нами в процессе самостоятельного использования менеджера', 0, 0),
(12, 'Привлечение инвестиций', 'Здесь будут размещаться все задачи, планы, ссылки на ресурсы и описание идей по привлечению инвестиций', 0, 0),
(13, 'Доработки хранилища', 'В хранилище не смогла загрузить файлы Word и Excel формата\nне смогла удалить каталог, который создала случайно\nне смогла добавить несколько файлов одновременно, выделив их', 0, 0),
(14, 'test projekt ilia', 'описание тестового проекта Илья', 0, 0),
(15, 'Test', 'TEst', 0, 0),
(16, '111', '111', 0, 1),
(17, '111', '111', 0, 0),
(18, 'videoconference microservice', '', 0, 0),
(19, 'frontend', 'frontend', 0, 0),
(20, 'asdasd', 'asdasd', 0, 0);

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
(1, 4, 1),
(2, 6, 2),
(3, 13, 3),
(11, 2, 5),
(16, 7, 7),
(18, 2, 6),
(19, 14, 8),
(20, 7, 6),
(21, 17, 9),
(22, 17, 6),
(23, 6, 6),
(25, 17, 10),
(26, 2, 10),
(28, 17, 11),
(30, 2, 11),
(31, 2, 12),
(32, 17, 12),
(33, 2, 13),
(34, 17, 13),
(35, 18, 14),
(36, 9, 15),
(41, 2, 15),
(42, 17, 15),
(43, 9, 6),
(44, 19, 16),
(45, 19, 17),
(46, 2, 18),
(47, 6, 18),
(48, 2, 19),
(49, 22, 19),
(50, 28, 20);

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
  `estimate` int(11) DEFAULT 2
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `board_id`, `description`, `status`, `name`, `parent_task`, `is_archive`, `sort_order`, `estimate`) VALUES
(1, 11, 'ssssssssssssd', 'new', 'ddddddds', 0, 0, 0, 2),
(2, 0, 'vccvcvc', 'hold', NULL, 1, 0, 1, 2),
(3, 13, '', 'new', 'task', 0, 0, 0, 2),
(4, 12, '', 'new', 'task', 0, 0, 0, 2),
(7, 22, 'я смог сам себя удалить из участников проекта созданного мной же. И теперь соответственно я его не вижу :(', 'new', 'удаление участников проекта', 0, 0, 0, 2),
(8, 0, 'коментарий к уже созданной задаче в роекте', 'low', NULL, 7, 0, 1, 2),
(9, 0, 'коментарий к уже созданной задаче в роекте', 'low', NULL, 7, 0, 1, 2),
(10, 0, 'коментарий к уже созданной задаче в роекте', 'low', NULL, 7, 0, 1, 2),
(11, 31, '', 'new', 'нагрузка чата', 0, 0, 0, 2),
(12, 0, 'коментарий к уже созданной задаче в роекте', 'low', NULL, 11, 0, 1, 2),
(13, 22, 'увеличить длинну соббщения в чате  до 255 символов', 'new', 'длинна сообщения', 0, 1, 0, 2),
(14, 0, 'коментарий к уже созданной задаче в роекте', 'low', NULL, 13, 0, 1, 2),
(15, 38, 'нужна возможность редактировать название уже созданной колонки. При этом задачи в этой колонке не должны исчезать. К примеру: была колонка \"задания для Ильи\" со спискоз задачь, а нужно все эти задачи перенаправить на \"задания для Васи\".', 'new', 'редактирование колонок', 0, 0, 0, 2),
(16, 0, 'коментарий к уже созданной задаче в роекте', 'low', NULL, 15, 0, 1, 2),
(17, 22, 'ссылки на сайты в чате не выделяются . ', 'new', 'ссылки в чате', 0, 1, 0, 2),
(18, 26, 'попытка созданиязадачи в проекте , в котором еще нету ни одной колонки', 'new', 'задание без колонки', 0, 0, 1, 2),
(19, 0, 'коментарий к уже созданной задаче в роекте', 'low', NULL, 18, 0, 1, 2),
(20, 0, 'задача по нагрузке завершена успешно', 'edit', NULL, 11, 0, 1, 2),
(21, 28, '', 'new', 'Финансовая модель', 0, 0, 1, 2),
(22, 35, 'задание задание', 'new', 'задание 2', 0, 0, 1, 2),
(23, 0, 'пропрппоатыоашцоаоваоа', 'urgent', NULL, 22, 0, 1, 2),
(24, 35, 'проыатыаыраылосрыиг', 'new', 'задание 3', 0, 0, 1, 2),
(25, 0, '', 'low', NULL, 24, 0, 1, 2),
(26, 56, 'найти инвестиции :) \r\nможет быть можно посмотреть по ссылке \r\nhttps://vc.ru/finance/128687-60-poleznyh-saytov-dlya-poiska-investiciy-v-startap', 'new', 'поиск инвестиций', 0, 0, 0, 2),
(27, 39, 'Годовая инфляция доллара уже более 9%, необходимо отразить эту информацию в расчетах', 'new', 'Добавить % инфляции', 0, 0, 0, 2),
(28, 0, '', 'edit', NULL, 27, 0, 1, 2),
(29, 40, 'Так как основными затратами 2022 года являются затраты на оплату труда - это необходимо добавить в общую ФМ', 'new', 'Добавить расходы на ЗП в 2022', 0, 0, 0, 2),
(30, 42, '', 'new', 'Добавить возможность добавления нескольких файлов в задачу', 0, 0, 1, 2),
(31, 39, 'Необходимо определить какой вид MVP будет удовлетворителен для инвесторов первого раунда.\r\nЧто конкретно они увидят в качестве результата после освоения данных средств', 'new', 'Добавить график доработки MVP на уровне первого раунда инвестиций', 0, 0, 1, 2),
(32, 42, 'в будущем также и грузинский, но важно, что при наличии переводчика google постоянно делает некорректный перевод текстов на странице проектов ', 'new', 'Добавить возможность выбора языка для использования системы (рус/eng)', 0, 0, 0, 2),
(33, 51, 'При неисполнении задачи в срок задача должна обозначится и броситься в глаза как невыполненная в срок', 'new', 'Добавить возможность установки срока исполнения задачи ', 0, 0, 0, 2),
(34, 42, 'Сообщение о постановке с указанием даты,\r\nи просрочке выполнения', 'new', 'Оповещение о поставленной задаче', 0, 0, 1, 2),
(35, 55, 'Когда задач становится много, задачи в списке сливаются и становится непонятно сколько их. \r\n', 'new', 'Визуально разделить задачи в столбце проекта горизонтальными линиями', 0, 1, 0, 2),
(36, 42, 'в списке задач иметь возможность ранжировать задачи по приоритету/сроку/кем назначены', 'new', 'Добавить возможность определять приоритет задачи ', 0, 0, 2, 2),
(37, 0, '', 'edit', NULL, 36, 0, 1, 2),
(38, 42, 'в названиях задач менеджер сам меняет слова:\r\n1)  в задаче: Добавить возможность добавлять несколько файлов в задачи он пишет (см файл)', 'new', '!!!!ВАЖНО!!!', 0, 0, 3, 2),
(39, 44, 'По информации на странице Валерия Остринского (глава правления белорусских бизнесангелов)\r\nв июне ангелы проводили отбор заявок от стартапов на соискание инвестиций\r\nhttps://www.facebook.com/ValeryAstrynski\r\n\r\nна их сайте после регистрации доступна форма заявки\r\nAngelsBand - бизнес-ангелы Беларуси\r\nhttps://angelsband.by/\r\n\r\nДля того чтобы это сделать необходимо четко определить сумму и результат по первому раунду (соответствующая задача имеется в проекте доработка)', 'new', 'Податься за первым раундом инвестиций к бизнес-ангелам', 0, 0, 0, 2),
(40, 42, 'Такая опция будет показывать последовательность выполнения задач и проектов в виде рисунка (не могу вспомнить название проги в которой данная опция реализована, для примера)', 'new', 'Сделать возможность связывать проекты (ссылкой указывать последовательность как в roadmap) ', 0, 0, 4, 2),
(41, 42, 'Необходима возможность перехода на сторонние сайты в новом окне для просмотра ссылки, прикрепленной к задаче', 'new', 'Сделать ссылки добавленные в описание задач активными', 0, 0, 5, 2),
(42, 44, 'https://vc.ru/u/997301-startup-central-eurasia/443675-5-poleznyh-platform-dlya-startapov-v-gruzii\r\n', 'new', 'Зарегистрироваться в грузинских платформах для старапов', 0, 0, 1, 2),
(43, 44, 'Международный конкурс стартапов в Минске Su&IT 2020\r\nhttps://suit.by/', 'new', 'Подать документы на международный конкурс стартапов', 0, 0, 2, 2),
(44, 50, '', 'new', 'Добавить возможность удаления своих документов', 0, 0, 0, 2),
(45, 47, '', 'new', 'Добавить возможность добавлять сразу несколько файлов выделяя их в списке', 0, 0, 0, 2),
(46, 47, '', 'new', 'Добавить возможность добавлять Word и Excel  документы в каталоги хранилища', 0, 0, 1, 2),
(47, 48, 'Прикрепить к странице себя и Антона', 'new', 'Создать Linkedin страницу проекта', 0, 0, 0, 2),
(48, 0, '', 'hold', NULL, 44, 0, 1, 2),
(49, 44, '', 'new', 'Акселлераторы Дубаи', 0, 0, 1, 2),
(50, 53, 'это описание простой первойзадачи', 'new', 'простое задание', 0, 0, 1, 2),
(51, 0, '', 'edit', NULL, 18, 0, 1, 2),
(52, 0, '', 'edit', NULL, 18, 0, 1, 2),
(53, 0, '', 'edit', NULL, 18, 0, 1, 2),
(54, 0, '', 'edit', NULL, 18, 0, 1, 2),
(55, 0, '', 'edit', NULL, 18, 0, 1, 2),
(56, 0, '', 'edit', NULL, 18, 0, 1, 2),
(57, 26, 'Гпкпьжтипп', 'new', 'Анрсп', 0, 0, 1, 3),
(58, 57, 'test', 'new', 'task 1', 0, 1, 1, 2),
(59, 0, '', 'major', NULL, 58, 0, 1, 2),
(60, 60, 'test', 'new', 'task 1', 0, 0, 0, 1),
(61, 0, '', 'edit', NULL, 60, 0, 1, 2),
(62, 59, 'test2', 'new', 'test 2', 0, 0, 1, 2),
(63, 0, '', 'normal', NULL, 60, 0, 1, 2),
(64, 0, '', 'low', NULL, 62, 0, 1, 2),
(65, 0, '', 'major', NULL, 60, 0, 1, 2),
(66, 0, '', 'major', NULL, 60, 0, 1, 2),
(67, 0, 'пипец', 'edit', NULL, 60, 0, 1, 2),
(68, 63, 'При уже созданных колонках не могу их поменять местами', 'new', 'Не могу менять колонки местами', 0, 0, 0, 0),
(69, 0, '', 'edit', NULL, 68, 0, 1, 2),
(70, 0, 'коммент\r\n', 'new', NULL, 68, 0, 1, 2),
(71, 63, 'не вижу связанных с мембером тасков и наоборот мемберов, связанных с тасками', 'new', 'как поменять связанного мембера в уже созданной таске', 0, 0, 1, 0),
(72, 0, 'коммент', 'edit', NULL, 71, 0, 1, 2),
(73, 0, 'коммент', 'edit', NULL, 71, 0, 1, 2),
(74, 63, 'не могу коммент добавить. Пишу, жму и не появляется', 'new', 'не добавляется коммент в таске', 0, 0, 2, 0),
(75, 0, '32132132132132132131232', 'hold', NULL, 74, 0, 1, 2),
(76, 0, '32132132132132132131232', 'hold', NULL, 74, 0, 1, 2),
(77, 0, '32132132132132132131232', 'hold', NULL, 74, 0, 1, 2),
(78, 0, '32132132132132132131232', 'hold', NULL, 74, 0, 1, 2),
(79, 0, 'to do', 'edit', NULL, 74, 0, 1, 2),
(80, 0, 'to do', 'edit', NULL, 74, 0, 1, 2),
(81, 0, 'Comment is adding just when thay are in LAT or NUMBERS but in CUR - not', 'edit', NULL, 74, 0, 1, 2),
(82, 65, '123', 'new', '123', 0, 0, 0, 123),
(83, 69, '', 'new', 'Research webrtc', 0, 0, 0, 0),
(84, 68, '', 'new', 'Create backend server', 0, 0, 0, 0),
(85, 68, '', 'new', 'Create client', 0, 0, 1, 0),
(86, 0, 'Aiortc library https://github.com/aiortc/aiortc can be used server-side for both signaling and data channels\r\n', 'edit', NULL, 83, 0, 1, 2),
(87, 77, 'привести в порядок интерфейс, все поля и кнопки должны быть красивыми :)', 'new', 'Файловая система ', 0, 0, 0, 0),
(88, 71, 'митинги, совещаения, и тд', 'new', 'совещания', 0, 1, 0, 0),
(89, 71, 'привети в порядок верстку в модуле настроек', 'new', 'Модуль настроек контейнер', 0, 1, 1, 0),
(90, 76, 'Взять бесплатный визивиг. И в новом окне сделать текстовый редактор и потом у нас файлы такие будут. С разметкой.  И совместимым с нашей версией jquery. \r\nИ сам адаптивно сверстать. ', 'new', 'Create Editable html file', 0, 0, 0, 0),
(91, 76, 'митинг', 'new', 'совещание', 0, 0, 1, 0),
(92, 77, 'добавить действие для кнопки . по нажатию должен открываться визивиг редактор как по этой ссылке.https://worldoctopus.com/assets/editor/main/index.html . только не этот а какой то бесплатный аналог который совместим с нашей версией jquery. в окне должна быть возможность назвать файл и сохранить. по нажатию сохранить имя файла и его содержимое должно по аяксу второму загружаться на сервер со всеми картинками.', 'new', 'add html file кнопка', 0, 0, 3, 0),
(93, 77, 'сверстать сам сайт. что нить классическое минималистичное с фирменными цветами', 'new', 'сверстать сайт', 0, 0, 1, 0),
(94, 76, 'Просмотр всех зависимостей и ознакомление с архитектурой проекта.', 'new', 'Вхождение в проект', 0, 0, 2, 0),
(95, 0, 'Понял как взаимодействуют с между собой модули проекта. Разбирался со стилями.', 'edit', NULL, 94, 0, 1, 2),
(96, 77, '', 'new', 'Изучение документации jquery', 0, 0, 2, 0),
(97, 0, '', 'edit', NULL, 94, 0, 1, 2),
(98, 0, 'Разобрался с открытием ярлыков на рабочем  столе.', 'edit', NULL, 94, 0, 1, 2),
(99, 76, 'Поиск визивиг редактора и запуск на локалке без сторонних ссылок.', 'new', 'Поиск Визивиг редактора. ', 0, 0, 3, 0),
(100, 81, '[object HTMLDivElement]', 'new', '123123', 0, 0, 0, 12);

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
(1, 3, 3),
(2, 27, 12),
(3, 29, 13),
(4, 38, 14);

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
(1, 1, 0),
(2, 3, 0),
(3, 4, 0),
(6, 7, 0),
(7, 11, 0),
(8, 13, 0),
(9, 15, 0),
(10, 17, 0),
(11, 18, 0),
(12, 21, 0),
(13, 22, 0),
(14, 24, 0),
(15, 26, 0),
(16, 27, 0),
(17, 29, 0),
(18, 30, 0),
(19, 31, 0),
(20, 32, 0),
(21, 33, 0),
(22, 34, 0),
(23, 35, 0),
(24, 36, 0),
(25, 38, 0),
(26, 39, 0),
(27, 40, 0),
(28, 41, 0),
(29, 42, 0),
(30, 43, 0),
(31, 44, 0),
(32, 45, 0),
(33, 46, 0),
(34, 47, 0),
(35, 49, 0),
(36, 50, 0),
(37, 57, 0),
(38, 58, 0),
(39, 60, 0),
(40, 62, 0),
(41, 68, 0),
(42, 71, 0),
(43, 74, 0),
(44, 82, 0),
(45, 83, 0),
(46, 84, 0),
(47, 85, 0),
(48, 87, 0),
(49, 88, 0),
(50, 89, 0),
(51, 90, 0),
(52, 91, 0),
(53, 92, 0),
(54, 93, 0),
(55, 94, 0),
(56, 96, 0),
(57, 99, 0),
(58, 100, 0);

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

--
-- Дамп данных таблицы `task_time`
--

INSERT INTO `task_time` (`id`, `task_id`, `hours`, `user_id`, `date`) VALUES
(1, 35, 1, 2, 1660089600),
(2, 33, 8, 2, 1661212800),
(3, 33, 8, 2, 1661299200),
(4, 33, 8, 2, 1661385600),
(5, 33, 8, 2, 1661126400),
(6, 83, 2, 6, 1665792000),
(7, 83, 2, 6, 1664841600),
(8, 83, 2, 6, 1666137600),
(9, 83, 2, 6, 1665964800),
(10, 88, 1, 22, 1667174400),
(11, 91, 1, 22, 1667174400),
(12, 94, 3, 22, 1667174400),
(13, 87, 2, 22, 1667260800),
(14, 93, 6, 22, 1667260800),
(15, 91, 1, 22, 1667260800),
(16, 87, 2, 22, 1667347200),
(17, 93, 3, 22, 1667347200),
(18, 96, 2, 22, 1667347200),
(19, 87, 1, 22, 1667433600),
(20, 93, 1, 22, 1667433600),
(21, 93, 1, 22, 1667433600),
(22, 92, 1, 22, 1667433600),
(23, 96, 2, 22, 1667433600),
(24, 96, 2, 22, 1667520000),
(25, 92, 1, 22, 1667520000),
(26, 94, 1, 22, 1667779200),
(27, 94, 1, 22, 1667779200),
(28, 92, 4, 22, 1667779200),
(29, 87, 1, 22, 1667779200),
(30, 99, 5, 22, 1667865600),
(31, 92, 2, 22, 1667865600),
(32, 92, 8, 22, 1667952000);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `user`
--

INSERT INTO `user` (`id`, `login`, `email`, `password`, `email_key`, `activated`, `lang`) VALUES
(2, 'banderas328', 'banderas328@yandex.ru', '31b80386e59773499cc805e80f8dd13f', 'j0ApRKewe5fdwgeM5zYEVBWmHpijGIRgsF0RCCoV', 1, 'en'),
(3, 'Jaferson', 'jaferson@mail.ru', '08e8170f776aedb2f8042735e7ebb256', '7nv8dGB4uuABeNGUIwiyiWEPdJ2BETKXZoKVUyYU', 1, 'en'),
(4, 'Eletta', 'elviraani.hr@gmail.com', '2ead522a2e9caae39be0609416798b7d', 'bjujyRI1apKdK3MkeZnPgfSt1l2bfOZZmRsFAwRg', 1, 'en'),
(5, 'lapaevev', 'lapaevev@gmail.com', 'ce57887bdb3c6bf4cbb88926ecb17f0c', 'Q8JcxrQcnS7zHB8MIZWkGah0GA5CNYodM7EH2CS8', 1, 'en'),
(6, 'digoevr', 'digoevr@gmail.com', '2ff0341a306de9ad892635a718f099e1', '3gm0iJpRvmyfS2mAFYcUL1vIrScmAw1WBOVNOymt', 1, 'en'),
(7, 'Illia_bylina', 'frantishak0@gmail.com', '4c3d0ccdf6e0bff55e4bac91df18d12a', 'yuGw7RWlwMLvOeES5TEvmGSulNBVqV2XSde49WoS', 1, 'en'),
(8, 'juri.andrushik', 'juri.andrushik@gmail.com', '1d13cf4603d3de043b430607d18e47cf', 'cGphFrP3iuzSOkmJOGsXpyOU5W0RTEHfbrtLQhue', 1, 'en'),
(9, 'Eugene', 'Miheyeugene@gmail.com', 'fb8cdd3af1a82e15b3bf8350588f13d2', 'TThlVibQ3jhw94WIkajlT0WwgmhSHmRYFPZZDTEN', 1, 'en'),
(10, 'rgromov', 'roman@gromov.tech', '15c65e23e05470aa1a45773b551ac9bd', 'Sty6mhgCF6hLy7irxDMMz8ike380MNQRKTpiys2M', 1, 'en'),
(11, 'info@maksby.com', 'info@maksby.com', '50009c349b89056fffa4adca4187dc2a', 'RcT2pcbAzRwytS4EpDU70BRVzLaXVvZ3oG3Wsbll', 1, 'en'),
(12, 'zajkoa@mail.ru', 'zajkoa@mail.ru', 'd2ea05a60830eb6e1ea4d491a9368915', 'jGtXm5olFNjOndQF33Nt0JQuIGQCPxfRnZMJ1MCm', 1, 'en'),
(13, 'Tonic', '7259018@gmail.com', '8cd8d1cc45c602df8ffa8b2e4e61d12e', 'w856r19Mk34wFJO2JB62RHyC8eCmTDF59ldc0DcH', 1, 'en'),
(14, 'dvitkovskiy', 'd.vitkovskiy@aser.by', '44a3d3b2a2590f5f2ccef86f5f2919fd', 'HKRLJb9jcPySqugK2ocmmO0IQZJAUU9iw5CfTDsg', 1, 'en'),
(15, 'Bw76Qz', 'salyalva0@gmail.com', '6594dc31538610af28fa9f58c60db7f8', 'yE3zruPxlAgFc3TeXRpPBsY4ZmmUUuuCGtBt4eYw', 0, 'en'),
(16, 'Bw76Qz', 'salyalva05@gmail.com', '926a3922cfae1d0925b8fd5ce92ce3fd', 'JF8CPEtYOJSFSamhElUG2nvlNL82znuvZ4uQDA7P', 1, 'en'),
(17, 'misiachenko', 'misiachenko@gmail.com', '59cd96134a103c4bc875b313def96195', 'vrGXU94ZwbgZLjQc9jNkTkofzv66zYzfGV8vuRdv', 1, 'en'),
(18, 'ilia', 'ilia_2002@tut.by', '247da8b249d2b93dc443500060960520', 'MywfefKJbMtMOxJKmbQbWl83IKFlLvRLzAz8HZ0Y', 1, 'en'),
(19, 'slauta', 'r.slauta@fh.by', '50009c349b89056fffa4adca4187dc2a', 'aGuVFYeaHlqkLRFpEB3AUju7jj8p6r2Fj2tbT8cX', 1, 'en'),
(20, 'nikichDmIT', 'nikita5@gmail.com', 'bcc14f2758630a36319b163960b8de72', '7llUN69Jn9kjDhPqOTbS87h6XAsMPOnQwYyydp53', 0, 'en'),
(22, 'nikichdm', 'dmitracenkonikita5@gmail.com', '63f43dca758243b59da275336e22f719', 'scv8ZPVa0nEGUC5MNJWVoGm2IQU2ThdnhpK52CRx', 1, 'en'),
(23, 'andrey', 'zverko_a@mail.ru', 'a08f78d584da2a3f04b7e6cbf58aae7d', 'dauCu7lrElZoor9sSgw8C1qEfPuOhu7Xs3sJHxFP', 1, 'en'),
(24, 's.chernooki', 'chernooki@gmail.com', '69bdce2548281b85239526392132cc5b', 'pKF5L36rCynq8ykRjcg7t6FgHz0vwI7zaVMsnKGq', 1, 'en'),
(25, 'kpolotsk', 'kpolotsk9@gmail.com', 'fd1e431dace640a464345b6381209d21', 'BWDZQsJfFj2vb2ErYinOFA3KT8r7ytr6K5f1iwct', 1, 'en'),
(26, 'the_armanidze', 'losegi6408@ceoshub.com', '11f80334af1179c0e4cccb1f641b5087', '6nmSom1PNeZpsWYnmg5r1gT8yBUyW2pW9NkcxKh7', 1, 'en'),
(27, 'Bob', 'spsnqjqddiztjvfsfe@tmmcv.net', 'be30ec782487028a1d4a43ae28959641', 'DtSDANjXNx0MDBvcGIDUIw9KA989EKOAdXLhIsj8', 1, 'en'),
(28, 'rmilyushkevich', 'rmilyushkevich@techvice.org', '92044194b8199d5181599ca9c8e26c9a', '28uFDPkFzYIHWdAfT2pnV2TF6vlAOMVi1NtlbvDE', 1, 'en'),
(29, 'alisher', 'alisher0594@gmail.com', '12a94c4614ad3e663cd7ea64bcecfcaa', 'Fd52FkPQOVGXnFT7Ypla9OQu3xkxVpJvbqFNAM8N', 0, 'en'),
(30, 'login_egor', 'login_egor@gmail.com', '892c6817b13c048f6f3bb7f765bd728e', 'dAXBBcyIAH9glcXO4aCiMT3GFHS72qgt2qGTrPAz', 0, 'en'),
(31, 'login_egor', 'wicom69611@laserlip.com', '892c6817b13c048f6f3bb7f765bd728e', '1aYlylIoWuwcNp7fcM0Bd1XJQNSGutBjUs9N2Tzc', 0, 'en');

-- --------------------------------------------------------

--
-- Структура таблицы `users_filesystem`
--

CREATE TABLE `users_filesystem` (
  `id` int(11) NOT NULL,
  `path` varchar(45) DEFAULT NULL,
  `parent_path` varchar(45) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Дамп данных таблицы `users_filesystem`
--

INSERT INTO `users_filesystem` (`id`, `path`, `parent_path`, `user_id`) VALUES
(2, 'market', '28', 2),
(3, 'market', '0', 3),
(4, 'market', '0', 4),
(5, 'market', '0', 5),
(6, 'market', '0', 6),
(7, 'market', '0', 7),
(8, '', '0', 7),
(9, 'Test directory ', '0', 7),
(10, 'market', '0', 8),
(11, 'market', '0', 9),
(12, 'God\'s', '0', 9),
(13, 'market', '0', 10),
(14, '', '0', 6),
(15, '', '0', 6),
(16, 'market', '0', 11),
(17, 'market', '0', 12),
(18, 'market', '0', 13),
(19, '', '0', 13),
(20, 'market', '0', 14),
(21, '', '0', 7),
(22, 'passed_direct', '7', 7),
(23, '', '0', 7),
(24, 'docs', '0', 15),
(25, 'docs', '0', 16),
(26, 'Mypapka', '0', 7),
(27, 'docs', '0', 17),
(28, 'test', '0', 2),
(29, '', '0', 17),
(30, 'пакет доков от acer', '0', 17),
(31, 'docs', '0', 18),
(32, 'test2', '0', 2),
(33, 'docs', '0', 19),
(34, 'docs', '0', 20),
(35, 'docs', '0', 21),
(36, 'docs', '0', 22),
(37, '', '0', 22),
(38, 'docs', '0', 23),
(39, 'nikita.html', '0', 22),
(40, '111', '0', 22),
(41, '111', '0', 22),
(42, '212', '0', 22),
(43, 'app', '0', 22),
(44, 'й', '0', 22),
(45, '', '39', 22),
(46, '1', '36', 22),
(47, 'last', '0', 2),
(48, '', '0', 22),
(49, 'test2', '0', 2),
(50, '12333333333333333333333333333333', '0', 22),
(51, '12121', '0', NULL),
(52, '', '0', 22),
(53, '', '0', 22),
(54, '', '0', 22),
(55, 'docs', '0', 24),
(56, 'docs', '0', 25),
(57, 'docs', '0', 26),
(58, 'app', '0', 22),
(59, '', '0', 22),
(60, '', '0', 22),
(61, '', '0', 22),
(62, 'docs', '0', 27),
(63, 'docs', '0', 28),
(64, 'docs', '0', 29),
(65, 'docs', '0', 30),
(66, 'docs', '0', 31);

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Дамп данных таблицы `user_settings`
--

INSERT INTO `user_settings` (`id`, `user_id`, `avatar`, `first_name`, `second_name`, `job`, `country`, `city`, `about`, `phone`, `visibility`) VALUES
(1, 9, NULL, 'Yauhen', 'Mikheichyk', 'God', 'Earth', 'Omnipresent', 'The Best!', '+1', 1),
(2, 2, '/img/avatars/62c566528dd26300px-Хороший_Космонавт.jpg', 'Anton', 'Zhavrid', 'software engineer', 'Belarus', 'Minsk', 'Project developer', '+375257197002', 1),
(3, 6, '/img/avatars/62c56cfa0d9e6GetUserPhoto.jpeg', 'Ruslan', 'Digoev', 'Software engineer', 'Belarus', 'Minsk', 'hey', '', 1),
(4, 5, '/img/avatars/62c5c3a9aaf0bIMG_20220623_222110.jpg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1),
(5, 7, NULL, 'Ilia', 'Bylina', 'my job company', 'Belarys', 'Minsk', 'текс обо мне', '+375291234567', 1),
(6, 17, '/img/avatars/62f2689ec118dphoto_2022-08-02_09-44-57.jpg', 'Светлана', '', '', '', '', '', '', 1),
(7, 22, '/img/avatars/635fce69cb421692eddbd0fffe95a_1920xH.jpg', 'Никита', '', '', '', '', '', '', 1);

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
-- AUTO_INCREMENT для таблицы `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `blog_attachment`
--
ALTER TABLE `blog_attachment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `blog_comment`
--
ALTER TABLE `blog_comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `boards`
--
ALTER TABLE `boards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT для таблицы `chanels`
--
ALTER TABLE `chanels`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `chanels_admins`
--
ALTER TABLE `chanels_admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `chanels_deliver_messages`
--
ALTER TABLE `chanels_deliver_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT для таблицы `chanels_messages`
--
ALTER TABLE `chanels_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT для таблицы `deliver_messages`
--
ALTER TABLE `deliver_messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT для таблицы `files_to_tags`
--
ALTER TABLE `files_to_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `frames`
--
ALTER TABLE `frames`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT для таблицы `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT для таблицы `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `network`
--
ALTER TABLE `network`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT для таблицы `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT для таблицы `projects_members`
--
ALTER TABLE `projects_members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT для таблицы `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT для таблицы `tasks_files`
--
ALTER TABLE `tasks_files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `tasks_users`
--
ALTER TABLE `tasks_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT для таблицы `task_time`
--
ALTER TABLE `task_time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT для таблицы `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT для таблицы `users_filesystem`
--
ALTER TABLE `users_filesystem`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;

--
-- AUTO_INCREMENT для таблицы `user_settings`
--
ALTER TABLE `user_settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT для таблицы `wallet`
--
ALTER TABLE `wallet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
