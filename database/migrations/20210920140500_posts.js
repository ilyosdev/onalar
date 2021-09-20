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

// CREATE TABLE "posts"(
//    "id" serial PRIMARY KEY,
//    "is_anonym" BOOL DEFAULT 'f',
//    "user_id" INTEGER NULL,
//    "body" TEXT NOT NULL,
//    "status" VARCHAR(255) NOT NULL,
//    "type" varchar(50) NOT NULL, -- map, audio, text, photo
//    "is_question" varchar(50) NOT NULL, -- map, audio, text, photo
//    "topic" VARCHAR(255) NOT NULL,
//    "comment_count" INTEGER NOT NULL,
//    "like_count" INTEGER NOT NULL,
//    "share_count" INTEGER NOT NULL,
//    "location_id" INTEGER NOT NULL,
//    "created_at" TIMESTAMP DEFAULT NOW()
// );
