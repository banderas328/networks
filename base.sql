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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_attachment`
--

LOCK TABLES `blog_attachment` WRITE;
/*!40000 ALTER TABLE `blog_attachment` DISABLE KEYS */;
INSERT INTO `blog_attachment` VALUES (8,'/img/blog_images/54fc36a96b4d4abstract-space-wallpaper-space-picture-space-wallpaper.jpg',20),(9,'/img/blog_images/54fc37071698c20150303_220127.jpg',21),(10,'/img/blog_images/5faac3366711e1404294077_2111914196.jpg',23),(11,'/img/blog_images/5faac386513441404294077_2111914196.jpg',24),(12,'/img/blog_images/5fc8aa2d2c1dbphoto_2018-12-21_14-43-27.jpg',25),(13,'/img/blog_images/619d31a962eadphoto_2021-09-14_23-09-02.jpg',26),(14,'/img/blog_images/61a8f8af7441846eb1ffe-0b06-4a9e-b2d6-0a6e55ed7763.jpg',27),(15,'/img/blog_images/61b7aa29de3cb2021-07-18 17-34-32.JPG',28),(16,'/img/blog_images/620d4b387768b300px-Хороший_Космонавт.jpg',29);
/*!40000 ALTER TABLE `blog_attachment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_comment`
--

DROP TABLE IF EXISTS `blog_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `comment` text COLLATE utf8_bin NOT NULL,
  `blog_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_comment`
--

LOCK TABLES `blog_comment` WRITE;
/*!40000 ALTER TABLE `blog_comment` DISABLE KEYS */;
INSERT INTO `blog_comment` VALUES (1,47,'tgtgtgt',25),(2,47,'tgtgtgt',25),(3,47,'tgtgtgt',25),(4,47,'tgtgtgt',25),(5,47,'test',25),(6,47,'gfgggszx',25),(7,47,'gfgggszx',25),(8,47,'nnmmm',25),(9,47,'kkkkkk',25),(10,47,'aaaaazzz',25),(11,47,'ghghggxx',25),(12,47,'llll',25),(13,47,'test',25),(14,47,'anton',25),(15,52,'this is first comment',29);
/*!40000 ALTER TABLE `blog_comment` ENABLE KEYS */;
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
  `blog_title` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (4,'\n    test blog',44,'1425666479',NULL),(5,'\n    testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttestvvvvv',44,'1425667276',NULL),(6,'\n    banderas328@yandex.ru ÑÐ´ÐµÐ»Ð°Ð» ÑÑ‚Ð¾',44,'1425667573',NULL),(7,'\r\n    ban',43,'1425748984',NULL),(8,'\r\n    babn',43,'1425750122',NULL),(9,'\r\n    aaa',43,'1425750216',NULL),(10,'\r\n    test',43,'1425750257',NULL),(11,'\r\n    test',43,'1425750289',NULL),(12,'\r\n    test',43,'1425750308',NULL),(13,'\r\n    test',43,'1425750338',NULL),(14,'\r\n    test',43,'1425750374',NULL),(15,'\r\n    Ñ„Ñ„Ñ„',44,'1425750880',NULL),(16,'\r\n    Ñ„Ñ„Ñ„',44,'1425750959',NULL),(17,'\r\n    Ñ„Ñ„Ñ„',44,'1425751007',NULL),(18,'\r\n    test',44,'1425754151',NULL),(19,'\r\n    test',44,'1425754167',NULL),(20,'\r\n    banderas ',44,'1425815209',NULL),(21,'\r\n    alenka',43,'1425815303',NULL),(22,'\n    test',48,'1605026445',NULL),(23,'\n    test',48,'1605026614',NULL),(24,'\n    anton',48,'1605026694',NULL),(25,'\n    test',47,'1606986285',NULL),(26,'\n    4yyyyy',47,'1637691817',NULL),(27,'test blog text  test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text test blog text ',47,'1638463663',NULL),(28,'test2',47,'1639426601','test1'),(29,'this is first post ',52,'1645038392','first post');
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `boards`
--

DROP TABLE IF EXISTS `boards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `boards` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `project_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boards`
--

LOCK TABLES `boards` WRITE;
/*!40000 ALTER TABLE `boards` DISABLE KEYS */;
INSERT INTO `boards` VALUES (1,'todo',1),(2,'todo',2),(3,'in progres',2),(4,'done',2),(16,'todo',4),(17,'in progress',4),(18,'todo',3),(21,'in progres',3),(22,'done',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chanels`
--

LOCK TABLES `chanels` WRITE;
/*!40000 ALTER TABLE `chanels` DISABLE KEYS */;
INSERT INTO `chanels` VALUES (35,'test_private',1,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chanels_admins`
--

LOCK TABLES `chanels_admins` WRITE;
/*!40000 ALTER TABLE `chanels_admins` DISABLE KEYS */;
INSERT INTO `chanels_admins` VALUES (26,47,32),(27,47,33),(28,47,34),(29,47,35);
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
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chanels_deliver_messages`
--

LOCK TABLES `chanels_deliver_messages` WRITE;
/*!40000 ALTER TABLE `chanels_deliver_messages` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chanels_messages`
--

LOCK TABLES `chanels_messages` WRITE;
/*!40000 ALTER TABLE `chanels_messages` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=193 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deliver_messages`
--

LOCK TABLES `deliver_messages` WRITE;
/*!40000 ALTER TABLE `deliver_messages` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=105 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (1,'/userfiles/435560bebab301c30Z4-UNBvYc.jpg','30Z4-UNBvYc.jpg',43,19,'image/jpeg',0),(2,'/userfiles/435564a2fdbc22230Z4-UNBvYc.jpg','30Z4-UNBvYc.jpg',43,20,'image/jpeg',0),(3,'/userfiles/435565f11d30e7830Z4-UNBvYc.jpg','30Z4-UNBvYc.jpg',43,21,'image/jpeg',0),(4,'/userfiles/445738c9b764558Ð ÐµÐ·ÑŽÐ¼Ðµ.docx','Ð ÐµÐ·ÑŽÐ¼Ðµ.docx',44,18,'application/octet-stream',0),(9,'/userfiles/465f8f28cd7071aAntonZhauryd_CV (1).pdf','AntonZhauryd_CV (1).pdf',46,22,'application/pdf',0),(17,'/userfiles/48/485fb3c6b02d004servers.txt','servers.txt',48,0,'text/plain',0),(21,'userfiles/47/4760354c6fbede3Magento 2 Cookbook - Ray Bogman .pdf','Magento 2 Cookbook - Ray Bogman .pdf',47,41,'application/pdf',0),(22,'userfiles/47/4760354c7f1a7f2Magento 2 Cookbook - Ray Bogman .pdf','Magento 2 Cookbook - Ray Bogman .pdf',47,0,'application/pdf',0),(34,'userfiles/47/47603a31d61a9687EZ0WQq3_LE.jpg','7EZ0WQq3_LE.jpg',47,33,'image/jpeg',0),(38,'userfiles/49/496053686d3f987fallout.png','fallout.png',49,37,'image/png',0),(40,'userfiles/49/4960536a7a4f4541597217354565.jpg','1597217354565.jpg',49,39,'image/jpeg',0),(42,'userfiles/47/47608987a755376fallout.png','fallout.png',47,33,'image/png',0),(53,'userfiles/47/47610bfba8c6fca142198006_225097792595003_8967202187628227784_n.jpg','142198006_225097792595003_8967202187628227784_n.jpg',47,34,'image/jpeg',0),(65,'userfiles/47/47613b6ca31d038AntonZhauryd_CV.pdf','AntonZhauryd_CV.pdf',47,0,'application/pdf',0),(66,'userfiles/47/47613b6d3ca6ba6AntonZhauryd_CV.pdf','AntonZhauryd_CV.pdf',47,0,'application/pdf',0),(67,'userfiles/47/47613b6dcc7dee6AntonZhauryd_CV.pdf','AntonZhauryd_CV.pdf',47,0,'application/pdf',0),(68,'userfiles/47/47613b6e0b1d566AntonZhauryd_CV.pdf','AntonZhauryd_CV.pdf',47,34,'application/pdf',0),(69,'userfiles/47/47613b6ef05fbfbAntonZhauryd_CV.pdf','AntonZhauryd_CV.pdf',47,0,'application/pdf',0),(70,'userfiles/47/47613b6f711a8c4AntonZhauryd_CV.pdf','AntonZhauryd_CV.pdf',47,0,'application/pdf',0),(71,'userfiles/47/47613b6fcd60056AntonZhauryd_CV.pdf','AntonZhauryd_CV.pdf',47,0,'application/pdf',0),(72,'userfiles/47/47613bb72abe92anetworks (3).sql','networks (3).sql',47,0,'application/octet-stream',0),(75,'userfiles/47/47613bbab7e7a69networks (3).sql','networks (3).sql',47,0,'application/octet-stream',0),(76,'userfiles/47/47613bbacd5dc60networks (3).sql','networks (3).sql',47,0,'application/octet-stream',0),(77,'userfiles/47/47613bbafcdff2bnetworks (3).sql','networks (3).sql',47,0,'application/octet-stream',0),(78,'userfiles/47/47613bbce9a63b5AntonZhauryd_CV.pdf','AntonZhauryd_CV.pdf',47,0,'application/pdf',0),(79,'userfiles/47/47613bbd3e0e097networks (3).sql','networks (3).sql',47,0,'application/octet-stream',0),(80,'userfiles/47/47613bc06863f9fAntonZhauryd_CV.pdf','AntonZhauryd_CV.pdf',47,0,'application/pdf',0),(81,'userfiles/47/47613bc081c6b00networks (3).sql','networks (3).sql',47,0,'application/octet-stream',0),(82,'userfiles/47/47613bc4c638debAntonZhauryd_CV.pdf','AntonZhauryd_CV.pdf',47,0,'application/pdf',0),(83,'userfiles/47/47613c3a7d6e03fAntonZhauryd_CV.pdf','AntonZhauryd_CV.pdf',47,0,'application/pdf',0),(84,'userfiles/47/47613c3bd11ea95AntonZhauryd_CV.pdf','AntonZhauryd_CV.pdf',47,0,'application/pdf',0),(85,'userfiles/47/47613c3cd7d0299AntonZhauryd_CV.pdf','AntonZhauryd_CV.pdf',47,0,'application/pdf',0),(89,'userfiles/47/47613e28ac316a7AntonZhauryd_CV.pdf','AntonZhauryd_CV.pdf',47,41,'application/pdf',0),(97,'userfiles/48/486192aeaeb519c1597217354565.jpg','1597217354565.jpg',48,29,'image/jpeg',0),(98,'/userfiles/49/4960536a7a4f4541597217354565.jpg','1597217354565.jpg',47,41,'image/jpeg',0),(99,'/userfiles/49/4960536a7a4f4541597217354565.jpg','1597217354565.jpg',47,41,'image/jpeg',0),(100,'/userfiles/49/4960536a7a4f4541597217354565.jpg','1597217354565.jpg',47,41,'image/jpeg',0),(101,'/userfiles/49/4960536a7a4f4541597217354565.jpg','1597217354565.jpg',47,41,'image/jpeg',0),(102,'/userfiles/49/4960536a7a4f4541597217354565.jpg','1597217354565.jpg',47,0,'image/jpeg',0),(103,'/userfiles/49/4960536a7a4f4541597217354565.jpg','1597217354565.jpg',47,33,'image/jpeg',0),(104,'/userfiles/48/486192aeaeb519c1597217354565.jpg','1597217354565.jpg',47,0,'image/jpeg',0);
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `friends`
--

LOCK TABLES `friends` WRITE;
/*!40000 ALTER TABLE `friends` DISABLE KEYS */;
INSERT INTO `friends` VALUES (1,48,47,1),(2,47,49,1),(3,47,52,1),(4,47,47,0),(5,50,52,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=193 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (183,47,48,'1','1636860809'),(184,48,47,'2','1636860815'),(185,48,47,'3','1636861337'),(186,47,48,'4','1636861345'),(187,48,47,'5','1636871203'),(188,48,47,'6','1636872492'),(189,48,47,'7','1636872515'),(190,47,48,'8','1636872643'),(191,47,48,'9','1636873591'),(192,47,48,'antoha\n','1636873804');
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `network`
--

LOCK TABLES `network` WRITE;
/*!40000 ALTER TABLE `network` DISABLE KEYS */;
INSERT INTO `network` VALUES (1,2,0,1,'123'),(2,1,0,1,'123'),(3,14,0,1,'123'),(4,16,0,1,'123'),(5,17,1,0,NULL),(7,26,0,1,'12345678'),(8,27,1,0,NULL),(9,23,0,1,'12345678'),(10,28,1,0,NULL),(11,37,0,1,'12345678'),(12,38,0,1,'12345678'),(13,39,1,0,NULL),(14,42,1,0,NULL),(16,41,1,0,NULL);
/*!40000 ALTER TABLE `network` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) COLLATE utf8_bin NOT NULL,
  `html_id` varchar(255) COLLATE utf8_bin NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (1,'you have new message fromAntonnn zHavriddd','test',47),(2,'you have new message from Antonnn zHavriddd','test',48),(3,'test','test',47),(4,'hhhhh','hhhh',47),(5,'you have new message from Olga Met','test',47),(6,'you have new message from Olga Met','test',47),(7,'you have new message from Olga Met','test',47),(8,'you have new message from Antonnn zHavriddd','test',48),(9,'you have new message from Olga Met','test',47),(10,'you have new message from Antonnn zHavriddd','test',48),(11,'you have new message from Antonnn zHavriddd','test',48),(12,'you have new message from Olga Met','test',47),(13,'you have new message from Antonnn zHavriddd','test',48),(14,'you have new message from Olga Met','test',47),(15,'you have new message from Antonnn zHavriddd','test',48),(16,'you have new message from Antonnn zHavriddd','test',48),(17,'you have new message from Olga Met','test',47),(18,'you have new message from Antonnn zHavriddd','test',48),(19,'you have new message from Olga Met','test',47),(20,'you have new message from Olga Met','test',47),(21,'you have new message from Antonnn zHavriddd','test',48),(22,'you have new message from Olga Met','test',47),(23,'you have new message from Olga Met','test',47),(24,'you have new message from Olga Met','test',47),(25,'you have new message from Antonnn zHavriddd','test',48),(26,'you have new message from Antonnn zHavriddd','test',48),(27,'you have new message from Antonnn zHavriddd','test',48),(28,'you have new task :  test task','test',47),(29,'you have new task :  test task','test',48),(30,'you have new task: dd in project :test project','test',47),(31,'you have new task: dd in project :test project','test',48),(32,'you have new project:  second project','test',47),(33,'you have new project:  second project','test',48),(34,'you have new task: test 1 in project :test project','test',48),(35,'you have new task: test 1 in project :test project','test',47);
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
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
  `is_confirmed` tinyint(1) DEFAULT NULL,
  `pending_response` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `private_chanels_requests`
--

LOCK TABLES `private_chanels_requests` WRITE;
/*!40000 ALTER TABLE `private_chanels_requests` DISABLE KEYS */;
INSERT INTO `private_chanels_requests` VALUES (45,35,47,1,0),(46,35,52,NULL,1);
/*!40000 ALTER TABLE `private_chanels_requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `project_description` text COLLATE utf8_bin NOT NULL,
  `sort_order` int(11) NOT NULL DEFAULT 0,
  `is_archive` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (3,'test project','octopus project',0,0),(4,'test project','project descriptioin',0,0),(5,'test project','test project description',0,0),(6,'second project','second project description',0,0);
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects_members`
--

DROP TABLE IF EXISTS `projects_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects_members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects_members`
--

LOCK TABLES `projects_members` WRITE;
/*!40000 ALTER TABLE `projects_members` DISABLE KEYS */;
INSERT INTO `projects_members` VALUES (6,47,3),(7,48,4),(8,47,5),(9,48,5),(10,47,6),(11,48,6);
/*!40000 ALTER TABLE `projects_members` ENABLE KEYS */;
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
  `board_id` int(11) NOT NULL DEFAULT 0,
  `description` text COLLATE utf8_bin DEFAULT NULL,
  `status` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `name` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `parent_task` int(11) DEFAULT 0,
  `is_archive` int(11) DEFAULT 0,
  `sort_order` int(11) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (1,1,'test task description just testing','new','olga',0,1,1),(2,1,'first task description','new','anton',0,1,1),(18,0,NULL,NULL,NULL,0,0,1),(19,0,NULL,NULL,NULL,0,0,1),(20,0,NULL,NULL,NULL,0,0,1),(22,5,'task description','new','test task',0,1,0),(23,5,'new task description','new','new task',0,0,0),(24,16,'test task description','new','test task',0,0,1),(25,18,'teasj ffff','new','test task',0,0,0),(26,16,'testtt','new','testaaa',0,0,1),(27,16,'ggg','new','ggg',0,0,1),(28,16,'aaa','new','aaa',0,0,1),(29,16,'asdasd','new','fafasfd',0,0,1),(30,16,'test','new','test task',0,0,1),(31,16,'eee','new','yeee',0,0,1),(32,16,'dd','new','ddd',0,0,1),(33,16,'ddd','new','dd',0,0,1),(34,22,'test 1','new','test 1',0,0,0);
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks_files`
--

LOCK TABLES `tasks_files` WRITE;
/*!40000 ALTER TABLE `tasks_files` DISABLE KEYS */;
INSERT INTO `tasks_files` VALUES (1,1,88),(2,2,89),(9,22,96);
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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks_users`
--

LOCK TABLES `tasks_users` WRITE;
/*!40000 ALTER TABLE `tasks_users` DISABLE KEYS */;
INSERT INTO `tasks_users` VALUES (1,1,49),(2,1,48),(3,1,47),(4,2,0),(5,2,47),(8,8,48),(9,8,49),(10,8,47),(11,11,48),(12,11,49),(13,11,47),(16,22,48),(17,22,47),(18,23,0),(19,23,47),(20,24,47),(21,24,48),(22,25,48),(23,26,47),(24,27,47),(25,28,47),(26,29,47),(27,30,0),(28,31,0),(29,32,0),(30,33,47),(31,33,48),(32,34,48),(33,34,47);
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
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (46,'barnaki','banderas328@tut.com','50009c349b89056fffa4adca4187dc2a','b1VXsNwpKgCwbZHcvMswuf7WzH2Nxxda1o44IEg6',0,'en'),(47,'anton','test@test.com','caa12df9e355fdf3f73b13ad185b64ec','oD8yFD82h1uOifyvKoSBHUI5jfG1xzNMnMlQO432',0,'en'),(48,'olga','anton@anton.com','50009c349b89056fffa4adca4187dc2a','bkMIw4BQuwgMayiWH8tZu6eHlF0gLXr7bnOIoRQr',0,'en'),(50,'banderas328@ayandexx.ru','banderas328@yandexx.ru','caa12df9e355fdf3f73b13ad185b64ec','i3e00lTmj7LWjJGvgkwsxferfLp2xvARPfxZcXb4',0,'en'),(52,'test1@test1.com','test1@test1.com','caa12df9e355fdf3f73b13ad185b64ec','30VGE2BE66PTGExvpAvnPxgrXplVbT4RTzjiZUGS',0,'en');
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
  `first_name` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `second_name` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `job` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `country` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `city` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `about` text COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(250) COLLATE utf8_bin DEFAULT NULL,
  `visibility` tinyint(1) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_settings`
--

LOCK TABLES `user_settings` WRITE;
/*!40000 ALTER TABLE `user_settings` DISABLE KEYS */;
INSERT INTO `user_settings` VALUES (5,43,'/img/avatars/612b43c8ba57aa4820976a36b76cf4951360184ef715800b9d76b_00 (1).jpg','anton','zhavrid',NULL,NULL,NULL,NULL,NULL,NULL),(6,44,'/img/avatars/6165d272a923f1597217354565.jpg','sergey','ola',NULL,NULL,NULL,NULL,NULL,NULL),(7,45,'/img/avatars/6165d272a923f1597217354565.jpg','uyra','samarichev',NULL,NULL,NULL,NULL,NULL,1),(8,48,'/img/avatars/6165d272a923f1597217354565.jpg','Olga','Met','dev','Belarus','','','',0),(9,47,'/img/avatars/61b7a76d06a3846eb1ffe-0b06-4a9e-b2d6-0a6e55ed7763.jpg','Anton','zHavrid','developer','Belarus','Minsk','test','57197002',0),(10,49,'/img/avatars/6165d272a923f1597217354565.jpg','Sasha','','','','','','',0),(11,52,'/img/avatars/61d6e0e6375ccim.jpg','zhenia','ivanov','','','','','',1),(12,50,'/img/avatars/620d4d2daa25dimages.jpg','Evgeniy','Onegin','','','','','',1);
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
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_filesystem`
--

LOCK TABLES `users_filesystem` WRITE;
/*!40000 ALTER TABLE `users_filesystem` DISABLE KEYS */;
INSERT INTO `users_filesystem` VALUES (15,'test','0',44),(16,'testpassword','15',44),(17,'testsimple','15',44),(18,'hidden','15',44),(19,'test','0',43),(20,'test2','0',43),(21,'slava','0',43),(22,'market','0',46),(26,'market','0',48),(29,'test','26',48),(33,'test','0',47),(34,'ssss','0',47),(35,'zhenia','0',47),(37,'shared_with_password','0',49),(39,'just_shared','0',49),(41,'opaopa','0',47),(42,'vvvvvvvvv','0',47),(43,'market','0',50),(44,'market','0',51),(45,'market','0',52);
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

-- Dump completed on 2022-02-17 23:53:19
