
exports.up = function(knex) {
  
};

exports.down = function(knex) {
  
};

// CREATE TABLE "post_comments"(
//     "id" serial PRIMARY KEY,
//     "post_id" INTEGER NOT NULL,
//     "user_id" INTEGER NOT NULL,
//     "comment" VARCHAR(255) NOT NULL,
//     "is_pinned" BOOL DEFAULT 'f',
//     "comment_id" VARCHAR(255) NOT NULL DEFAULT 0,
//     "is_thread" BOOL DEFAULT 'f',
//     "likes" VARCHAR(255) NOT NULL,
//     "dislikes" VARCHAR(255) NOT NULL,
//     "created_at" TIMESTAMP DEFAULT NOW()
// );