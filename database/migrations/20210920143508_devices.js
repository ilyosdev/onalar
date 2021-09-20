
exports.up = function(knex) {
  
};

exports.down = function(knex) {
  
};

// CREATE TABLE IF NOT EXISTS `devices` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `users_id` INT NOT NULL,
//     `device_id` VARCHAR(120) NOT NULL,
//     `type` ENUM('APPLE') NOT NULL,
//     `device_token` VARCHAR(120) NOT NULL,
//     `created_at` DATETIME NOT NULL,
//     `updated_at` DATETIME NOT NULL,
//     PRIMARY KEY (`id`))
//   ENGINE = InnoDB;