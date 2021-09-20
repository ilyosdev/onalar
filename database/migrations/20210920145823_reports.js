
exports.up = function(knex) {
  
};

exports.down = function(knex) {
  
};


// CREATE TABLE IF NOT EXISTS `reports` (
//     `id` INT NOT NULL AUTO_INCREMENT,
//     `users_id` INT NOT NULL,
//     `participants_id` INT NOT NULL,
//     `report_type` VARCHAR(45) NOT NULL,
//     `notes` TEXT NOT NULL,
//     `status` ENUM('pending', 'resolved') NOT NULL DEFAULT 'pending',
//     `created_at` DATETIME NOT NULL,
//     PRIMARY KEY (`id`))
//   ENGINE = InnoDB;