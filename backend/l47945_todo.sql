-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2023 at 02:31 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `l47945_todo`
--

-- --------------------------------------------------------

--
-- Table structure for table `todolist`
--

CREATE TABLE `todolist` (
  `id` int(11) NOT NULL,
  `todoBody` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `due` varchar(50) NOT NULL DEFAULT 'dayTask',
  `orderNumber` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `todolist`
--

INSERT INTO `todolist` (`id`, `todoBody`, `due`, `orderNumber`) VALUES
(0, '373,375,374,325,321,337,371,324,320,370,335,372,322,319', 'orderMap', NULL),
(308, '11', 'weekTask', NULL),
(313, 'asd', 'weekTask', NULL),
(314, 'sdf', 'weekTask', NULL),
(319, 'rx + psu + wkaf + coffee maker?', 'dayTask', NULL),
(320, '1 main think of work (youtube), relationships ', 'dayTask', NULL),
(321, '2 tinder/ courses- for girl friend relationships / friends', 'dayTask', NULL),
(322, '3minor thinking sport / english / guitar / extra knowledge/eng couses', 'dayTask', NULL),
(324, 'BPM choose company , shoose pm -> send piter  + get example project + write intro', 'dayTask', NULL),
(325, 'uborka stol monitory , пылик , свитера', 'dayTask', NULL),
(335, 'Second Project', 'dayTask', NULL),
(337, 'TO DO WEBSITE', 'dayTask', NULL),
(370, 'individual project', 'dayTask', NULL),
(371, '4% per year saving ACC', 'dayTask', NULL),
(372, 'ISA lifetime , can i open', 'dayTask', NULL),
(373, 'divide code in 3002', 'dayTask', NULL),
(374, 'task 1 and task 2 in BPM', 'dayTask', NULL),
(375, 'Individual project 3002', 'dayTask', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `todolist`
--
ALTER TABLE `todolist`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `todolist`
--
ALTER TABLE `todolist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=378;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
