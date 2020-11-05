CREATE TABLE user_game (
	user_id SERIAL PRIMARY KEY NOT NULL,
	usename VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL
);

CREATE TABLE user_game_history(
	user_game_history_id SERIAL PRIMARY KEY NOT NULL ,
	user_id INT NOT NULL,
	score INT NOT NULL,
	comment VARCHAR(255) NOT NULL
);

CREATE TABLE user_game_biodata (
	user_game_biodata_id SERIAL PRIMARY KEY NOT NULL ,
	user_id INT NOT NULL,
	fullname VARCHAR(255),
	sex VARCHAR(255),
	jobs VARCHAR(255)
);