
exports.up = function(knex) {
  
};

exports.down = function(knex) {
  
};


// CREATE TABLE IF NOT EXISTS `messages` (
//     `id` INT NOT NULL,
//     `guid` VARCHAR(100) NOT NULL,
//     `conversation_id` INT NOT NULL,
//     `sender_id` INT NOT NULL,
//     `message_type` ENUM('text', 'image', 'vedio', 'audio') NOT NULL,
//     `message` VARCHAR(255) NOT NULL DEFAULT '',
//     `created_at` DATETIME NOT NULL,
//     `deleted_at` DATETIME NOT NULL,
//     PRIMARY KEY (`id`))
//   ENGINE = InnoDB;