CREATE TABLE task_time (
                           id integer NOT NULL,
                           task_id integer NOT NULL,
                           hours integer NOT NULL
)
    ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci
AUTO_INCREMENT=1;
CREATE INDEX task_time_id_IDX USING BTREE ON task_time (id);
ALTER TABLE task_time MODIFY COLUMN id int(11) auto_increment NOT NULL;
ALTER TABLE task_time ADD user_id integer NOT NULL;
ALTER TABLE task_time ADD `date` integer NULL;
