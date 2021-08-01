-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: networks
-- ------------------------------------------------------
-- Server version	5.5.5-10.3.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog_attachment`
--

DROP TABLE IF EXISTS `blog_attachment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_attachment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(250) COLLATE utf8_bin NOT NULL,
  `blog_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_attachment`
--

LOCK TABLES `blog_attachment` WRITE;
/*!40000 ALTER TABLE `blog_attachment` DISABLE KEYS */;
INSERT INTO `blog_attachment` VALUES (8,'/img/blog_images/54fc36a96b4d4abstract-space-wallpaper-space-picture-space-wallpaper.jpg',20),(9,'/img/blog_images/54fc37071698c20150303_220127.jpg',21),(10,'/img/blog_images/5faac3366711e1404294077_2111914196.jpg',23),(11,'/img/blog_images/5faac386513441404294077_2111914196.jpg',24),(12,'/img/blog_images/5fc8aa2d2c1dbphoto_2018-12-21_14-43-27.jpg',25);
/*!40000 ALTER TABLE `blog_attachment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `blog_content` text COLLATE utf8_bin NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` varchar(50) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (4,'\n    test blog',44,'1425666479'),(5,'\n    testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestvvvvv',44,'1425667276'),(6,'\n    banderas328@yandex.ru ÑÐ´ÐµÐ»Ð°Ð» ÑÑ‚Ð¾',44,'1425667573'),(7,'\r\n    ban',43,'1425748984'),(8,'\r\n    babn',43,'1425750122'),(9,'\r\n    aaa',43,'1425750216'),(10,'\r\n    test',43,'1425750257'),(11,'\r\n    test',43,'1425750289'),(12,'\r\n    test',43,'1425750308'),(13,'\r\n    test',43,'1425750338'),(14,'\r\n    test',43,'1425750374'),(15,'\r\n    Ñ„Ñ„Ñ„',44,'1425750880'),(16,'\r\n    Ñ„Ñ„Ñ„',44,'1425750959'),(17,'\r\n    Ñ„Ñ„Ñ„',44,'1425751007'),(18,'\r\n    test',44,'1425754151'),(19,'\r\n    test',44,'1425754167'),(20,'\r\n    banderas ',44,'1425815209'),(21,'\r\n    alenka',43,'1425815303'),(22,'\n    test',48,'1605026445'),(23,'\n    test',48,'1605026614'),(24,'\n    anton',48,'1605026694'),(25,'\n    test',47,'1606986285');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `board_users`
--

DROP TABLE IF EXISTS `board_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `board_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `board_id` int(10) NOT NULL,
  `user_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `board_users`
--

LOCK TABLES `board_users` WRITE;
/*!40000 ALTER TABLE `board_users` DISABLE KEYS */;
INSERT INTO `board_users` VALUES (1,2,47),(2,3,47);
/*!40000 ALTER TABLE `board_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boards`
--

DROP TABLE IF EXISTS `boards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `boards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `admin` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boards`
--

LOCK TABLES `boards` WRITE;
/*!40000 ALTER TABLE `boards` DISABLE KEYS */;
INSERT INTO `boards` VALUES (1,'47','tesrt'),(2,'47','tesrt'),(3,'47','test');
/*!40000 ALTER TABLE `boards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chanels`
--

DROP TABLE IF EXISTS `chanels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chanels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chanel_name` varchar(45) DEFAULT NULL,
  `private` tinyint(4) DEFAULT 0,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chanels`
--

LOCK TABLES `chanels` WRITE;
/*!40000 ALTER TABLE `chanels` DISABLE KEYS */;
INSERT INTO `chanels` VALUES (12,'public',0,NULL),(13,'private',1,NULL);
/*!40000 ALTER TABLE `chanels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chanels_admins`
--

DROP TABLE IF EXISTS `chanels_admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chanels_admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `admins` int(10) DEFAULT NULL,
  `chanel_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chanels_admins`
--

LOCK TABLES `chanels_admins` WRITE;
/*!40000 ALTER TABLE `chanels_admins` DISABLE KEYS */;
INSERT INTO `chanels_admins` VALUES (6,47,12),(7,47,13);
/*!40000 ALTER TABLE `chanels_admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chanels_deliver_messages`
--

DROP TABLE IF EXISTS `chanels_deliver_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chanels_deliver_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message_id` varchar(250) DEFAULT NULL,
  `delivered` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chanels_deliver_messages`
--

LOCK TABLES `chanels_deliver_messages` WRITE;
/*!40000 ALTER TABLE `chanels_deliver_messages` DISABLE KEYS */;
INSERT INTO `chanels_deliver_messages` VALUES (1,'1',NULL),(2,'2',NULL),(3,'3',NULL),(4,'4',NULL),(5,'5',NULL),(6,'6',NULL),(7,'7',NULL),(8,'8',NULL),(9,'9',NULL),(10,'10',NULL),(11,'11',NULL),(12,'12',NULL),(13,'13',NULL),(14,'14',NULL),(15,'15',NULL),(16,'16',NULL),(17,'17',NULL),(18,'18',NULL),(19,'19',NULL),(20,'20',NULL),(21,'21',NULL),(22,'22',NULL),(23,'23',NULL),(24,'24',NULL),(25,'25',NULL),(26,'26',NULL),(27,'27',NULL),(28,'28',NULL),(29,'29',NULL),(30,'30',NULL),(31,'31',NULL),(32,'32',NULL),(33,'33',NULL),(34,'34',NULL),(35,'35',NULL),(36,'36',NULL),(37,'37',NULL),(38,'38',NULL),(39,'39',NULL),(40,'40',NULL),(41,'41',NULL),(42,'42',NULL),(43,'43',NULL),(44,'44',NULL),(45,'45',NULL),(46,'46',NULL),(47,'47',NULL),(48,'48',NULL),(49,'49',NULL),(50,'50',NULL),(51,'51',NULL),(52,'52',NULL),(53,'53',NULL),(54,'54',NULL),(55,'55',NULL),(56,'56',NULL),(57,'57',NULL),(58,'58',NULL),(59,'59',NULL),(60,'60',NULL);
/*!40000 ALTER TABLE `chanels_deliver_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chanels_messages`
--

DROP TABLE IF EXISTS `chanels_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chanels_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message` varchar(45) DEFAULT NULL,
  `from_user` int(11) DEFAULT NULL,
  `to_chanel` int(11) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chanels_messages`
--

LOCK TABLES `chanels_messages` WRITE;
/*!40000 ALTER TABLE `chanels_messages` DISABLE KEYS */;
INSERT INTO `chanels_messages` VALUES (47,'privet\n',48,12,'1605986221'),(48,'i tebe privet\n',47,12,'1605986246'),(49,'test',47,10,'1605987657'),(50,'test',48,10,'1605987679'),(51,'anton',47,10,'1605987702'),(52,'test',47,10,'1605988345'),(53,'test',48,13,'1605988378'),(54,'private',48,13,'1605988396'),(55,'test]\n\n',47,13,'1605988565'),(56,'test',47,13,'1605988704'),(57,'test',48,13,'1605988837'),(58,'test',47,13,'1605989418'),(59,'test',47,12,'1614074172'),(60,'WERWER',47,12,'1616851857');
/*!40000 ALTER TABLE `chanels_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deliver_messages`
--

DROP TABLE IF EXISTS `deliver_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `deliver_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `message_id` int(11) DEFAULT NULL,
  `dilivered` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=159 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deliver_messages`
--

LOCK TABLES `deliver_messages` WRITE;
/*!40000 ALTER TABLE `deliver_messages` DISABLE KEYS */;
INSERT INTO `deliver_messages` VALUES (157,157,NULL),(158,158,NULL);
/*!40000 ALTER TABLE `deliver_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(250) COLLATE utf8_bin NOT NULL,
  `file_title` varchar(250) COLLATE utf8_bin NOT NULL,
  `user_id` int(11) NOT NULL,
  `directory` int(11) NOT NULL,
  `type` varchar(50) COLLATE utf8_bin NOT NULL,
  `shared` int(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (1,'/userfiles/435560bebab301c30Z4-UNBvYc.jpg','30Z4-UNBvYc.jpg',43,19,'image/jpeg',0),(2,'/userfiles/435564a2fdbc22230Z4-UNBvYc.jpg','30Z4-UNBvYc.jpg',43,20,'image/jpeg',0),(3,'/userfiles/435565f11d30e7830Z4-UNBvYc.jpg','30Z4-UNBvYc.jpg',43,21,'image/jpeg',0),(4,'/userfiles/445738c9b764558Ð ÐµÐ·ÑŽÐ¼Ðµ.docx','Ð ÐµÐ·ÑŽÐ¼Ðµ.docx',44,18,'application/octet-stream',0),(9,'/userfiles/465f8f28cd7071aAntonZhauryd_CV (1).pdf','AntonZhauryd_CV (1).pdf',46,22,'application/pdf',0),(16,'/userfiles/485fb3c01260bebcsv.txt','csv.txt',48,29,'text/plain',0),(17,'/userfiles/48/485fb3c6b02d004servers.txt','servers.txt',48,0,'text/plain',0),(18,'/userfiles/48/485fb56e1ac1df8csv.txt','csv.txt',48,29,'text/plain',0),(21,'userfiles/47/4760354c6fbede3Magento 2 Cookbook - Ray Bogman .pdf','Magento 2 Cookbook - Ray Bogman .pdf',47,34,'application/pdf',0),(22,'userfiles/47/4760354c7f1a7f2Magento 2 Cookbook - Ray Bogman .pdf','Magento 2 Cookbook - Ray Bogman .pdf',47,0,'application/pdf',0),(28,'userfiles/47/476035f4749106e7EZ0WQq3_LE.jpg','7EZ0WQq3_LE.jpg',47,0,'image/jpeg',0),(34,'userfiles/47/47603a31d61a9687EZ0WQq3_LE.jpg','7EZ0WQq3_LE.jpg',47,33,'image/jpeg',0),(36,'userfiles/47/47603a3b82bf6457EZ0WQq3_LE.jpg','7EZ0WQq3_LE.jpg',47,35,'image/jpeg',0),(38,'userfiles/49/496053686d3f987fallout.png','fallout.png',49,37,'image/png',0),(40,'userfiles/49/4960536a7a4f4541597217354565.jpg','1597217354565.jpg',49,39,'image/jpeg',0),(41,'userfiles/47/47605f3329d30a9160663518_2162321953900423_274022596220222711_n.jpg','160663518_2162321953900423_274022596220222711_n.jpg',47,34,'image/jpeg',0),(42,'userfiles/47/47608987a755376fallout.png','fallout.png',47,33,'image/png',0);
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files_to_tags`
--

DROP TABLE IF EXISTS `files_to_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files_to_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files_to_tags`
--

LOCK TABLES `files_to_tags` WRITE;
/*!40000 ALTER TABLE `files_to_tags` DISABLE KEYS */;
INSERT INTO `files_to_tags` VALUES (1,3,0),(2,3,0),(11,4,2),(12,4,3),(13,2,4),(14,2,5);
/*!40000 ALTER TABLE `files_to_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `friends`
--

DROP TABLE IF EXISTS `friends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `friends` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `friends`
--

LOCK TABLES `friends` WRITE;
/*!40000 ALTER TABLE `friends` DISABLE KEYS */;
INSERT INTO `friends` VALUES (1,48,47,1),(2,47,49,1);
/*!40000 ALTER TABLE `friends` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `from_user` int(11) DEFAULT NULL,
  `to_user` int(11) DEFAULT NULL,
  `text` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `date` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=159 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (34,43,44,'Ð¿Ñ€Ð¸Ð²ÐµÑ‚','1416850433'),(35,43,44,'Ð¿Ñ€Ð¸Ð²ÐµÑ‚ ÑÐ½Ð¾Ð²Ð°','1416850497'),(36,44,43,'Ð¿Ñ€Ð¸Ð²ÐµÑ‚ Ð¸ Ñ‚ÐµÐ±Ðµ','1416851008'),(37,43,44,'1\n','1416853497'),(38,43,44,'1\n','1416853530'),(39,43,44,'1\n','1416853530'),(40,43,44,'1\n','1416853531'),(41,43,44,'1\n','1416853531'),(42,43,44,'1\n','1416853531'),(43,43,44,'1\n','1416853531'),(44,43,44,'1\n','1416853531'),(45,43,44,'1\n','1416853532'),(46,43,44,'1\n','1416853532'),(47,43,44,'1\n','1416853532'),(48,43,44,'1\n','1416853532'),(49,43,44,'1\n','1416853532'),(50,43,44,'1\n','1416853533'),(51,43,44,'1\n','1416853533'),(52,43,44,'1\n','1416853533'),(53,43,44,'1\n','1416853533'),(54,43,44,'1\n','1416853533'),(55,43,44,'1\n','1416853533'),(56,43,44,'1\n','1416853534'),(57,43,44,'1\n','1416853534'),(58,43,44,'1\n','1416853534'),(59,43,44,'1\n','1416853534'),(60,43,44,'1\n','1416853535'),(61,43,44,'1\n','1416853535'),(62,43,44,'1\n','1416853535'),(63,43,44,'1\n','1416853535'),(64,43,44,'1\n','1416853535'),(65,43,44,'1\n','1416853535'),(66,43,44,'1\n','1416853536'),(67,43,44,'1\n','1416853536'),(68,43,44,'1\n','1416853536'),(69,43,44,'1\n','1416853536'),(70,43,44,'1\n','1416853536'),(71,43,44,'1\n','1416853537'),(72,43,44,'1\n','1416853537'),(73,43,44,'1\n','1416853537'),(74,43,44,'1\n','1416853537'),(75,43,44,'1\n','1416853537'),(76,43,44,'1\n','1416853538'),(77,43,44,'1\n','1416853538'),(78,43,44,'1\n','1416853538'),(79,43,44,'1\n','1416853538'),(80,43,44,'1\n','1416853538'),(81,43,44,'1\n','1416853538'),(82,43,44,'1\n','1416853539'),(83,43,44,'1\n','1416853539'),(84,43,44,'1\n','1416853539'),(85,43,44,'1\n','1416853539'),(86,43,44,'1\n','1416853539'),(87,43,44,'1\n','1416853540'),(88,43,44,'1\n','1416853540'),(89,43,44,'1\n','1416853540'),(90,43,44,'1\n','1416853540'),(91,43,44,'1\n','1416853540'),(92,44,43,'a','1416853938'),(93,44,43,'2a','1416853978'),(94,44,43,'a','1416854007'),(95,44,43,'a','1416854051'),(96,44,43,'Ð¿Ñ€Ð¸Ð²ÐµÑ‚','1416854404'),(97,43,44,'Ñ‚Ñ‹ Ñ‚ÑƒÑ‚ ?','1416854992'),(98,44,43,'Ð¸ Ñ Ñ‚ÑƒÑ‚','1416855164'),(99,44,43,'Ð¸Ð¸Ð¸Ð¸Ð¸Ð¸','1416855174'),(100,44,43,'Ñ„','1416855183'),(101,44,43,'Ñ„Ñ„Ñ„','1416855210'),(102,44,43,'Ñ„Ñ„Ñ„','1416855213'),(103,44,43,'ghbdtn','1416856053'),(104,44,43,'ggg','1416856065'),(105,44,43,'Ð¿Ñ€Ð¸Ð²ÐµÑ‚','1416856073'),(106,43,44,'ghbdtn','1416856138'),(107,43,44,'Ð¿Ñ€Ð¸Ð²ÐµÑ‚','1416856143'),(108,44,43,'Ñ„Ñ„Ñ„','1416856179'),(109,44,43,'Ñ„Ñ„Ñ„','1416856184'),(110,44,43,'Ñ„Ñ„Ñ„','1416856189'),(111,44,43,'aaa','1416856315'),(112,44,43,'aaa','1416856317'),(113,44,43,'aaa','1416856319'),(114,44,43,'ghbdtn','1416856363'),(115,43,44,'Ð¸ Ñ‚ÐµÐ±Ðµ Ð¿Ñ€Ð¸Ð²ÐµÑ‚','1416856376'),(116,43,44,'Ð¸ ÑÐ½Ð¾Ð²Ð° Ð¿Ñ€Ð¸Ð²ÐµÑ‚','1416856405'),(117,44,43,'Ð¿Ð¿Ð¿','1416856434'),(118,43,44,'Ð¿Ð¿Ð¿','1416856437'),(119,44,43,'Ð¿Ð¿Ð¿','1416856465'),(120,43,44,'Ð¿Ð¿Ð¿','1416856468'),(121,43,44,'Ð¿Ð¿Ð¿Ð¿','1416856472'),(122,43,44,'Ð¿Ð¿Ð¿Ð¿','1416856475'),(123,43,44,'Ð¿Ð¿Ð¿','1416856479'),(124,43,44,'Ð¿Ð¿Ð¿','1416856487'),(125,43,44,'aaaa','1416856525'),(126,43,44,'Ñ€ÑƒÐ´Ð´Ñ‰','1416856597'),(127,43,44,'ghbdtn','1416856603'),(128,43,44,'hello','1416856609'),(129,44,43,'Ð¿Ñ€Ð¸Ð²ÐµÑ‚ Ñ‚ÑƒÑ‚ ÐºÑ€ÑƒÑ‚Ð¾Ð¹','1416857947'),(130,44,43,'Ð¿Ñ€Ð¸Ð²ÐµÑ‚ Ñ‚ÑƒÑ‚ ÐºÑ€ÑƒÑ‚Ð¾Ð¹','1416857949'),(131,44,43,'Ð¸ Ñ‚ÑƒÑ‚ ÐºÑ€ÑƒÑ‚Ð¾Ð¹','1417271303'),(132,44,43,'Ð¿Ñ€Ð¸Ð²ÐµÑ‚','1417880554'),(133,44,43,'Ð¿Ñ€Ð¸Ð²ÐµÑ‚','1417972249'),(134,44,43,'ÐµÑ‰Ðµ Ñ€Ð°Ð· Ð¿Ñ€Ð¸Ð²ÐµÑ‚\n','1417972261'),(135,43,44,'Ð¸ Ñ‚ÐµÐ±Ðµ Ð¿Ñ€Ð¸Ð²ÐµÑ‚','1417972268'),(136,44,43,'fff','1417972999'),(137,44,43,'aaa','1417973045'),(138,44,43,'fff','1417973203'),(139,44,43,'aaa','1417973234'),(140,44,43,'aaa','1417973321'),(141,44,43,'zzz','1417973333'),(142,44,43,'Ñ…Ð°Ð¹','1417981773'),(143,43,44,'Ñ Ñ‚ÐµÐ±Ñ Ð¾Ð±Ð¾Ð¶Ð°ÑŽ\n','1417981793'),(144,43,44,'Ð»ÑŽÐ±Ð»ÑŽ\n','1417981827'),(145,44,43,'Ð¸Ñ\n','1417981847'),(146,43,44,'Ð¸ Ñ‚ÑƒÑ‚ Ñ‚ÐµÐ±Ðµ Ð¿Ñ€Ð¸Ð²ÐµÑ‚','1418577809'),(147,44,43,'Ð¸ ÑÐ½Ð¾Ð²Ð° Ñ‚ÑƒÑ‚ Ñ‚ÐµÐ±Ðµ Ð¿Ñ€Ð¸Ð²ÐµÑ‚','1418577821'),(148,44,43,'0','1425836264'),(149,47,48,'test\n','1605964049'),(150,48,47,'test\n','1605964072'),(151,47,48,'etst','1605964130'),(152,47,48,'test','1605964154'),(153,47,48,'test','1605964296'),(154,47,48,'test','1605964308'),(155,48,47,'anton','1605964327'),(156,47,48,'chto ?\n','1605964338'),(157,47,48,'test\n\n\n','1606985919'),(158,47,48,'tyest','1606986084');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `network`
--

DROP TABLE IF EXISTS `network`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `network` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path_id` int(11) NOT NULL,
  `is_public` int(11) NOT NULL,
  `is_password` int(11) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `network`
--

LOCK TABLES `network` WRITE;
/*!40000 ALTER TABLE `network` DISABLE KEYS */;
INSERT INTO `network` VALUES (1,2,0,1,'123'),(2,1,0,1,'123'),(3,14,0,1,'123'),(4,16,0,1,'123'),(5,17,1,0,NULL),(7,26,0,1,'12345678'),(8,27,1,0,NULL),(9,23,0,1,'12345678'),(10,28,1,0,NULL),(11,37,0,1,'12345678'),(12,38,0,1,'12345678'),(13,39,1,0,NULL);
/*!40000 ALTER TABLE `network` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payed_files`
--

DROP TABLE IF EXISTS `payed_files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payed_files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `file_id` int(10) NOT NULL,
  `cost` int(11) NOT NULL,
  `description` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payed_files`
--

LOCK TABLES `payed_files` WRITE;
/*!40000 ALTER TABLE `payed_files` DISABLE KEYS */;
INSERT INTO `payed_files` VALUES (1,3,10,0),(2,4,100,0),(3,2,500,0);
/*!40000 ALTER TABLE `payed_files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payed_files_to_tags`
--

DROP TABLE IF EXISTS `payed_files_to_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payed_files_to_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_id` int(10) NOT NULL,
  `file_id` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payed_files_to_tags`
--

LOCK TABLES `payed_files_to_tags` WRITE;
/*!40000 ALTER TABLE `payed_files_to_tags` DISABLE KEYS */;
/*!40000 ALTER TABLE `payed_files_to_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paypal`
--

DROP TABLE IF EXISTS `paypal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `paypal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `payment_status` varchar(250) DEFAULT '0',
  `user_id` int(11) NOT NULL,
  `total` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paypal`
--

LOCK TABLES `paypal` WRITE;
/*!40000 ALTER TABLE `paypal` DISABLE KEYS */;
INSERT INTO `paypal` VALUES (0,'PAY-6P0753883Y650992PKVD2W4A','approved',43,'355.00'),(2,'PAY-3L236298RS1204424KVD3CCY','finished',43,'100.00'),(3,'PAY-67774224FD4656405KVD3CVQ','finished',43,'100.00'),(4,'PAY-5J958211X9366193FKVD3DOA','finished',43,'100.00'),(5,'PAY-7WG38108YS4092422KVD3EBI','finished',43,'100.00'),(6,'PAY-5R858423304639831KVD3F7Y','finished',43,'100.00'),(7,'PAY-6TV15195RU284521LKVD37IQ','finished',43,'75.00'),(8,'PAY-6PB78751DN310991HKVD37NQ','finished',43,'75.00'),(9,'PAY-8B0969504Y181393MKVD4ALA','finished',43,'100.00'),(10,'PAY-76A127138W970543SKVD4BKQ','approved',43,'12.00'),(11,'PAY-69D4236660661781JKVD4CYI','finished',43,'56.00'),(12,'PAY-9DM41449M1963474CKVD4DDI','finished',43,'55.00'),(13,'PAY-4C8115880L110592SKVD4OMA','0',43,NULL);
/*!40000 ALTER TABLE `paypal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `private_chanels_requests`
--

DROP TABLE IF EXISTS `private_chanels_requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `private_chanels_requests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chanel_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `confirmed` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `private_chanels_requests`
--

LOCK TABLES `private_chanels_requests` WRITE;
/*!40000 ALTER TABLE `private_chanels_requests` DISABLE KEYS */;
INSERT INTO `private_chanels_requests` VALUES (5,0,48,NULL),(6,0,48,NULL),(7,0,48,NULL),(8,0,48,NULL),(9,0,48,NULL),(10,13,48,1);
/*!40000 ALTER TABLE `private_chanels_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'test'),(2,'123'),(3,'tst'),(4,'anton'),(5,'alyona');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `board_id` int(11) NOT NULL,
  `task_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `description` text COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks_files`
--

DROP TABLE IF EXISTS `tasks_files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tasks_files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_id` int(11) NOT NULL,
  `file_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks_files`
--

LOCK TABLES `tasks_files` WRITE;
/*!40000 ALTER TABLE `tasks_files` DISABLE KEYS */;
/*!40000 ALTER TABLE `tasks_files` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks_users`
--

DROP TABLE IF EXISTS `tasks_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tasks_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `task_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks_users`
--

LOCK TABLES `tasks_users` WRITE;
/*!40000 ALTER TABLE `tasks_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `tasks_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `email_key` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `activated` tinyint(1) DEFAULT 0,
  `lang` varchar(2) COLLATE utf8_bin DEFAULT 'en',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (46,'barnaki','banderas328@tut.com','50009c349b89056fffa4adca4187dc2a','b1VXsNwpKgCwbZHcvMswuf7WzH2Nxxda1o44IEg6',0,'en'),(47,'anton','test@test.com','50009c349b89056fffa4adca4187dc2a','oD8yFD82h1uOifyvKoSBHUI5jfG1xzNMnMlQO432',0,'en'),(48,'olga','anton@anton.com','50009c349b89056fffa4adca4187dc2a','bkMIw4BQuwgMayiWH8tZu6eHlF0gLXr7bnOIoRQr',0,'en'),(49,'test1','test1@test1.com','50009c349b89056fffa4adca4187dc2a','rcDYlrhtQsJEHQIKMosMEpGCclgSD16t6iJ9LmBL',0,'en');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_settings`
--

DROP TABLE IF EXISTS `user_settings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  `about` text COLLATE utf8_bin DEFAULT NULL,
  `skype` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `site` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `visibility` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_settings`
--

LOCK TABLES `user_settings` WRITE;
/*!40000 ALTER TABLE `user_settings` DISABLE KEYS */;
INSERT INTO `user_settings` VALUES (5,43,'/img/avatars/55608982745a18kvYeDqR-Vs.jpg',NULL,NULL,'anton','zhavrid',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,44,'/img/avatars/555cc639090a28kvYeDqR-Vs.jpg',NULL,NULL,'sergey','ola',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,45,'/img/avatars/545bc9b02f2046mE1Pi6VDKM.jpg',0,'0','uyra','samarichev',NULL,NULL,NULL,NULL,NULL,NULL,NULL,1),(8,48,NULL,0,'01.01.1987','Olga','Met','dev','Belarus','','','','','',0),(9,47,'/img/avatars/604795720ffc3142198006_225097792595003_8967202187628227784_n.jpg',0,'','Anton','Zhauryd','','','','','','','',0),(10,49,NULL,0,'','Sasha','','','','','','','','',0);
/*!40000 ALTER TABLE `user_settings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_filesystem`
--

DROP TABLE IF EXISTS `users_filesystem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_filesystem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `path` varchar(45) DEFAULT NULL,
  `parent_path` varchar(45) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_filesystem`
--

LOCK TABLES `users_filesystem` WRITE;
/*!40000 ALTER TABLE `users_filesystem` DISABLE KEYS */;
INSERT INTO `users_filesystem` VALUES (15,'test','0',44),(16,'testpassword','15',44),(17,'testsimple','15',44),(18,'hidden','15',44),(19,'test','0',43),(20,'test2','0',43),(21,'slava','0',43),(22,'market','0',46),(26,'market','0',48),(29,'test','26',48),(33,'test','0',47),(34,'ssss','0',47),(35,'zhenia','0',47),(37,'shared_with_password','0',49),(39,'just_shared','0',49),(41,'opaopa','0',47),(42,'vvvvvvvvv','0',47);
/*!40000 ALTER TABLE `users_filesystem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallet`
--

DROP TABLE IF EXISTS `wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wallet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `balance` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallet`
--

LOCK TABLES `wallet` WRITE;
/*!40000 ALTER TABLE `wallet` DISABLE KEYS */;
INSERT INTO `wallet` VALUES (3,43,'7611');
/*!40000 ALTER TABLE `wallet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'networks'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-01 19:17:10
