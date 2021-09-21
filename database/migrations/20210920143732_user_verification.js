exports.up = function(knex, Promise) {
    return knex.schema.createTable('user_verification', t => {
        t.increments('id')
        t.integer('user_id').notNullable()
        t.string('verification_code').default(0)
        t.timestamps([useTimestamps], [defaultToNow])
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('user_verification')
  };


// CREATE TABLE IF NOT EXISTS `user_verification` (
//     `users_id` INT NOT NULL,
//     `verification_code` VARCHAR(45) NOT NULL,
//     `created_at` VARCHAR(45) NOT NULL)
//   ENGINE = InnoDB;