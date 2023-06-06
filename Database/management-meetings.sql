-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 26, 2023 at 07:10 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `management-meetings`
--
CREATE DATABASE IF NOT EXISTS `management-meetings` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `management-meetings`;

-- --------------------------------------------------------

--
-- Table structure for table `developmentgroups`
--

CREATE TABLE `developmentgroups` (
  `developmentGroupId` int(11) NOT NULL,
  `nameDevelopmentGroup` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `developmentgroups`
--

INSERT INTO `developmentgroups` (`developmentGroupId`, `nameDevelopmentGroup`) VALUES
(1, 'UI team'),
(2, 'Mobile Team'),
(3, 'React Team'),
(4, 'JS Team'),
(5, 'Node.js Team');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `meetingId` int(11) NOT NULL,
  `developmentGroupId` int(11) NOT NULL,
  `startMeeting` datetime NOT NULL,
  `endMeeting` datetime NOT NULL,
  `meetingDescription` varchar(60) NOT NULL,
  `meetingRoom` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`meetingId`, `developmentGroupId`, `startMeeting`, `endMeeting`, `meetingDescription`, `meetingRoom`) VALUES
(1, 1, '2023-03-30 10:30:00', '2023-03-30 11:30:00', 'Discussion about the sites UI', 'New York Room'),
(2, 2, '2023-04-25 12:00:00', '2023-04-25 13:00:00', 'Development meeting on mobile', 'Mobile Room'),
(3, 3, '2023-05-10 14:00:00', '2023-05-10 15:00:00', 'Development progress meeting', 'Blue Room'),
(4, 4, '2023-04-15 17:30:00', '2023-04-15 18:30:00', 'division of duties meeting to start a new project', 'Large Board Room'),
(5, 5, '2023-06-02 11:00:00', '2023-06-02 13:00:00', 'meeting about the progress of the backend', 'Main Computer Room'),
(6, 3, '2023-07-08 13:30:00', '2023-07-08 15:30:00', 'Meeting to develop a new project', 'Red Room');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `developmentgroups`
--
ALTER TABLE `developmentgroups`
  ADD PRIMARY KEY (`developmentGroupId`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`meetingId`),
  ADD KEY `meetingId` (`meetingId`,`developmentGroupId`),
  ADD KEY `developmentGroupId` (`developmentGroupId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `developmentgroups`
--
ALTER TABLE `developmentgroups`
  MODIFY `developmentGroupId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `meetingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`developmentGroupId`) REFERENCES `developmentgroups` (`developmentGroupId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
