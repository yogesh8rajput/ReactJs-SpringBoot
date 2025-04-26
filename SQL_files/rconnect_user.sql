-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: rconnect
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `passwordhash` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Indore','Deepu','$2a$10$ElDyTgtBhAHyvLtJpDVe5OuM6Oya6e6WkXIXF91MhR7gL6mu60896','deep',NULL),(2,'indoreiii','Missdeepu','$2a$10$xW0i65y1tJwzx/8LKF4mIujMSgCyVisMRn9Jfe59xBXGjfEZ8ZcRe','kind',NULL),(3,'indore','ne\\','$2a$10$ErMliLT.INp3RKytvMla8ep2kltYXascQyM070oi3xO23fGGJetiC','kinds',NULL),(4,'indore','ne\\','1234567','netik','$2a$10$wQdkRWrZPW6K3U1zcLEvgOs2oMDjpLjmExUGbDYrqGPP4FbivIgM2'),(5,NULL,'gh','789','ghostu','$2a$10$hVcSkekwtiCTZCeSw1Qere5vwD/4LrN7HfhoFWzfNZNSkFS6gQWMm'),(6,NULL,'gh','$2a$10$KJEm1/kTe9uRKkjq1JoCS.A2nABPmNeLCcYeMv/xnmmxpgHHUiSYO','hello','$2a$10$.yAlK2VzCn4ihdULsV1lEOg45hKPLbHlDtxIlDS17rV6lOUHErXGm'),(7,'aa','hello','$2a$10$x.TBtfcviNim6Z3qvZ1LUenoJROVB1megbtrAIhjTDDd1wp90/I92','aa','$2a$10$kS8bbZaXWRBVuDxT.TKqRegJnmn3WiZ1FEEBt7QcFRcr0l.o0m2PS'),(8,'indoreiii','Missdeepu','$2a$10$BYA7IWxfUXA6FyvuLKEJO.CFUVL8UrFXsoACFBQ8mp0/Ja3Wpj3hi','sweetu','$2a$10$jtONyTZiKW7JVYz3zVKzde0tPbVda9VcPWk8mfZsHfET9e4RKCUS.');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-28 22:57:58
