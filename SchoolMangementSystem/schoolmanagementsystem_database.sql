-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: schoolmanagementsystem
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `admin_id` bigint NOT NULL,
  `admin_name` varchar(255) DEFAULT NULL,
  `admin_password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Nisha Sinha','nisha'),(2,'Isha Sinha','isha');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `course_id` bigint NOT NULL AUTO_INCREMENT,
  `course_description` varchar(400) DEFAULT NULL,
  `course_title` varchar(255) DEFAULT NULL,
  `teacher_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'A JAVA file is a source code file written in the Java programming language, which was originally developed by Sun Microsystems but is now maintained by Oracle. It uses an object-oriented approach, where structured data types, called classes, are used to instantiate objects at runtime','Core Java','Nisha Sinha'),(2,'Advanced Java is everything that goes beyond Core Java – most importantly the APIs defined in Java Enterprise Edition, includes Servlet programming, Web Services, the Persistence API, etc','Advance Java','Parag Gupta'),(3,'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.','Python','Nita Rani'),(4,'Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. Built by experienced developers, Django takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel.','Django','Pankaj Chopade'),(5,'A web crawler (also known as a web spider or web robot) is a program or automated script which browses the World Wide Web in a methodical, automated manner. This process is called Web crawling or spidering. Many legitimate sites, in particular search engines, use spidering as a means of providing up-to-date data.','Web Crawling','Pankaj Anand'),(6,'Spring is a framework','Spring','Nita Rani'),(7,'this a front-end technology to design web pages ','React','Parag Gupta'),(8,'this a crash course for html','Html','Nisha Sinha'),(9,'In English grammar, the eight major parts of speech are noun, pronoun, adjective, verb, adverb, preposition, conjunction, and interjection.','English Grammer','Neil Batra'),(10,'database','MySQL','Parag Gupta');
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school_details`
--

DROP TABLE IF EXISTS `school_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `school_details` (
  `school_id` int NOT NULL AUTO_INCREMENT,
  `school_address` varchar(255) DEFAULT NULL,
  `school_affiliated_by` varchar(255) DEFAULT NULL,
  `school_contact_number` bigint DEFAULT NULL,
  `school_medium_of_study` varchar(255) DEFAULT NULL,
  `school_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`school_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school_details`
--

LOCK TABLES `school_details` WRITE;
/*!40000 ALTER TABLE `school_details` DISABLE KEYS */;
INSERT INTO `school_details` VALUES (1,'bhopal,madhyapradesh','CBSE',9406114145,'English','LNCT group of school');
/*!40000 ALTER TABLE `school_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `student_address` varchar(255) NOT NULL,
  `student_class` varchar(255) NOT NULL,
  `student_dob` varchar(255) NOT NULL,
  `student_email` varchar(255) NOT NULL,
  `student_gender` varchar(255) NOT NULL,
  `student_name` varchar(255) NOT NULL,
  `student_password` varchar(255) NOT NULL,
  `student_status` varchar(255) DEFAULT 'pending',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_qm8ww2m2nj6rqaroqqelj9vl5` (`student_email`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,'bhopal,madhyapradesh','2','24/10/1998','nishasinha@gmail.com','female','Nisha Sinha','nishasinha','approved'),(17,'amravati','3','19/09/1999','mina@gmail.com','female','Mina','minakumari','pending'),(18,'orrisa','3','12/12/2000','loknath@gmail.com','male','Loknath','loknath','pending');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher` (
  `teacher_id` bigint NOT NULL AUTO_INCREMENT,
  `teacher_address` varchar(255) NOT NULL,
  `teacher_dob` varchar(255) NOT NULL,
  `teacher_email` varchar(255) NOT NULL,
  `teacher_gender` varchar(255) NOT NULL,
  `teacher_name` varchar(255) NOT NULL,
  `teacher_password` varchar(255) NOT NULL,
  `teacher_status` varchar(255) DEFAULT 'pending',
  PRIMARY KEY (`teacher_id`),
  UNIQUE KEY `UK_q3s23dys2gaxphhhiilcm1ogj` (`teacher_email`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES (1,'korba,chhattisgarh','24/10/1998','nishasinha@gmail.com','Female','Nisha Sinha','nishasinha','approved'),(3,'jabalpur,madhyapradesh','02/06/1998','paraggupta@gmail.com','Male','Parag Gupta','paraggupta','pending'),(4,'itarsi,madhyapradesh','18/09/1998','pankajchopade@gmail.com','Male','Pankaj Chopade','pankajchopade','approved'),(5,'chennai','17/09/1990','ramprasad@gmail.com','male','Ram Prasad','ramprasad','pending'),(6,'westbengal','09/09/1998','siya@yahoo.com','female','Siya ','siya1234','pending'),(15,'pondichery','07/07/1997','manikarnika@gmail.com','female','Manikarnika','manikarnika','pending'),(23,'guna,madhyapradesh','12/12/2000','neilbatra@gmail.com','male','Neil Batra','neilbatra','pending');
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-26 15:38:32
