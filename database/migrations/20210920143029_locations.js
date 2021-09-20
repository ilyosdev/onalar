exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', t => {
        t.increments('id')
        t.integer('user_id').notNullable()
        t.string('content').notNullable()
        t.string('desc')
        t.enu('status', ['active', 'deleted', 'archived']).default('active');
        t.boolean('is_anonym').default('0')
        t.boolean('is_question').default('0')
        t.enu('type',['location','text', 'auido', 'photo']).notNullable()
        t.string('topic')
        t.integer('location_id')
        t.integer('comment_count').default('0')
        t.integer('like_count').default('0')
        t.integer('share_count').default('0')
        t.timestamps([useTimestamps], [defaultToNow])
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts')
  };
 
// CREATE TABLE "locations"(
//     "id" serial PRIMARY KEY,
//     "user_id" INTEGER NULL,
//     "city" VARCHAR(255) NULL,
//     "region" VARCHAR(255) NOT NULL,
//     "country" VARCHAR(255) NOT NULL
// );
