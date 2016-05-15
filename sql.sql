/*
SQLyog Ultimate v11.24 (64 bit)
MySQL - 5.6.20 : Database - networks
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`networks` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `networks`;

/*Table structure for table `chanels` */

DROP TABLE IF EXISTS `album`;

CREATE TABLE `album` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `artist` varchar(100) COLLATE utf8_bin NOT NULL,
  `title` varchar(100) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `chanels` */

insert  into `album`(`id`,`artist`,`title`) values (1,'The  Military  Wives','In  My  Dreams'),(2,'Adele','21'),(3,'Bruce  Springsteen','Wrecking Ball (Deluxe)'),(4,'Lana  Del  Rey','Born  To  Die'),(5,'Gotye','Making  Mirrors');

/*Table structure for table `deliver_messages` */

DROP TABLE IF EXISTS `deliver_messages`;

CREATE TABLE `deliver_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message_id` int(11) DEFAULT NULL,
  `message_type` int(11) DEFAULT NULL,
  `dilivered` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `deliver_messages` */

insert  into `deliver_messages`(`id`,`message_id`,`message_type`,`dilivered`) values (55,74,1,1),(56,75,1,1),(57,76,1,1),(58,77,1,1),(59,78,1,1),(60,79,1,1),(61,80,1,1),(62,81,1,1),(63,82,1,1),(64,83,1,1),(65,84,1,1);

/*Table structure for table `files` */

DROP TABLE IF EXISTS `files`;

CREATE TABLE `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(250) COLLATE utf8_bin NOT NULL,
  `file_title` varchar(250) COLLATE utf8_bin NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `files` */

insert  into `files`(`id`,`file_name`,`file_title`,`user_id`) values (1,'/var/www/networks/octopus/public/userfiles/53158eaa98ce1461655-1920x1080.jpg','test',36);

/*Table structure for table `friends` */

DROP TABLE IF EXISTS `friends`;

CREATE TABLE `friends` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `friends` */

insert  into `friends`(`id`,`user_id`,`friend_id`,`status`) values (6,43,44,1);

/*Table structure for table `messages` */

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_user` int(11) DEFAULT NULL,
  `to_user` int(11) DEFAULT NULL,
  `text` varchar(250) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `date` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8;

/*Data for the table `messages` */

insert  into `messages`(`id`,`from_user`,`to_user`,`text`,`date`) values (74,44,43,'пппрр','0.84286200'),(75,44,43,'привет\n','0.09181100'),(76,44,43,'привет\n','0.29897100'),(77,44,43,'привет\n','0.65036600'),(78,44,43,'привет\n','0.28000300'),(79,44,43,'привет\n','0.42955600'),(80,44,43,'привет\n','0.66302200'),(81,44,43,'привет\nффф','0.71876900'),(82,44,43,'привет\nффф','0.35280500'),(83,44,43,'привет\nффф','0.53338700'),(84,44,43,'привет\nффф','0.72642800');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `email_key` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `activated` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `user` */

insert  into `user`(`id`,`login`,`email`,`password`,`email_key`,`activated`) values (43,'banderas','banderas328@yandex.ru','fcc391c6fe3eb0971e52985f20d371d1','0zykO0O1vaqL2BVwla5CBH3hLh5AgEfMvahXBWXL',1),(44,'alena','banderas328@gmail.com','fcc391c6fe3eb0971e52985f20d371d1','m5xyRzWfmakm4uQpvTRlyxjVexF7bdT7jDmpOfNw',1),(45,'uyra','uyra@gmail.com','fcc391c6fe3eb0971e52985f20d371d1','9KdNN2ohgJDrJMCDetGE04vliUP2w8z5RZmv9sty',1);

/*Table structure for table `user_settings` */

DROP TABLE IF EXISTS `user_settings`;

CREATE TABLE `user_settings` (
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
  `visibility` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

/*Data for the table `user_settings` */

insert  into `user_settings`(`id`,`user_id`,`avatar`,`sex`,`birthdate`,`first_name`,`second_name`,`job`,`country`,`city`,`about`,`skype`,`phone`,`site`,`visibility`) values (5,43,'/img/avatars/545bc9b02f2046mE1Pi6VDKM.jpg',0,'','anton','zhavrid','','','','','','','test',1),(6,44,'/img/avatars/545bc9b02f2046mE1Pi6VDKM.jpg',0,'','alena','krutova','','','','','','','test.by',1),(7,45,'/img/avatars/545bc9b02f2046mE1Pi6VDKM.jpg',0,'0','uyra','samarichev',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
