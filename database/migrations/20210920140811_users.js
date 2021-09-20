exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', t => {
        t.increments('id')
        t.string('phone').notNullable()
        t.string('first_name').notNullable()
        t.string('last_name')
        t.string('password')
        t.boolean('is_verified').default('0')
        t.boolean('is_blocked').default('0')
        t.boolean('is_question').default('0')
        t.enu('type',['user','coach']).default(0)
        t.timestamps([useTimestamps], [defaultToNow])
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
  };
 

// CREATE TABLE "users"(
//     "id" serial PRIMARY KEY,
//     "phone" VARCHAR(16) NOT NULL,
//     "firstname" VARCHAR(255) NOT NULL,
//     "lastname" VARCHAR(255) NOT NULL,
//     "password" VARCHAR(255) NOT NULL,
//     "karma" INTEGER NOT NULL,
//     "rating" DOUBLE PRECISION NULL,
//     "avatar_url" VARCHAR(255) NULL,
//     "created_at" TIMESTAMP DEFAULT NOW()
// );
