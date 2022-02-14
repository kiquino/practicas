-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 10-10-2019 a las 04:55:36
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mla`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrier`
--

DROP TABLE IF EXISTS `carrier`;
CREATE TABLE IF NOT EXISTS `carrier` (
  `CarrierID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` text COLLATE utf8_spanish_ci,
  `Capicity` int(11) NOT NULL,
  PRIMARY KEY (`CarrierID`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `carrier`
--

INSERT INTO `carrier` (`CarrierID`, `Name`, `Capicity`) VALUES
(1, 'Carrier A', 10000),
(2, 'Carrier B', 10000),
(3, 'Carrier C', 3000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `costos`
--

DROP TABLE IF EXISTS `costos`;
CREATE TABLE IF NOT EXISTS `costos` (
  `CarrierID` int(11) NOT NULL,
  `Zona` text COLLATE utf8_spanish_ci NOT NULL,
  `Costo` int(11) NOT NULL,
  `Tiempo_de_entrega` int(11) NOT NULL,
  KEY `Carrier_ID` (`CarrierID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `costos`
--

INSERT INTO `costos` (`CarrierID`, `Zona`, `Costo`, `Tiempo_de_entrega`) VALUES
(1, 'AMBA', 10, 3),
(1, 'Bs As', 20, 5),
(1, 'Resto', 50, 7),
(2, 'AMBA', 15, 2),
(2, 'Bs As', 19, 4),
(2, 'Resto', 55, 6),
(3, 'AMBA', 20, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `c_d_e`
--

DROP TABLE IF EXISTS `c_d_e`;
CREATE TABLE IF NOT EXISTS `c_d_e` (
  `Zona` text COLLATE utf8_spanish_ci NOT NULL,
  `Mes` int(11) NOT NULL,
  `Cantidad_De_Envios` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `c_d_e`
--

INSERT INTO `c_d_e` (`Zona`, `Mes`, `Cantidad_De_Envios`) VALUES
('AMBA', 1, 40000),
('Bs As', 1, 50000),
('Resto', 1, 60000);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
