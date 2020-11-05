CREATE TABLE `user_game` (
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`usename` VARCHAR CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`email` VARCHAR CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`password` VARCHAR CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`user_id`)
);

CREATE TABLE `user_game_history` (
	`user_game_history_id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`score` INT NOT NULL,
	`comment` VARCHAR CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY (`user_game_history_id`)
);

CREATE TABLE `user_game_biodata` (
	`user_game_biodata_id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`fullname` VARCHAR CHARACTER SET utf8 COLLATE utf8_general_ci,
	`sex` VARCHAR CHARACTER SET utf8 COLLATE utf8_general_ci,
	`jobs` INT,
	PRIMARY KEY (`user_game_biodata_id`)
);