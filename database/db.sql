CREATE TABLE "locations"(
    "id" serial PRIMARY KEY,
    "user_id" INTEGER NULL,
    "city" VARCHAR(255) NULL,
    "region" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL
);

CREATE TABLE "posts"(
    "id" serial PRIMARY KEY,
    "is_anonym" BOOL DEFAULT 'f',
    "user_id" INTEGER NULL,
    "body" TEXT NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "type" varchar(50) NOT NULL, -- map, audio, text, photo
    "is_question" varchar(50) NOT NULL, -- map, audio, text, photo
    "topic" VARCHAR(255) NOT NULL,
    "comment_count" INTEGER NOT NULL,
    "like_count" INTEGER NOT NULL,
    "share_count" INTEGER NOT NULL,
    "location_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "post_comments"(
    "id" serial PRIMARY KEY,
    "post_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "comment" VARCHAR(255) NOT NULL,
    "is_pinned" BOOL DEFAULT 'f',
    "comment_id" VARCHAR(255) NOT NULL DEFAULT 0,
    "is_thread" BOOL DEFAULT 'f',
    "likes" VARCHAR(255) NOT NULL,
    "dislikes" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "post_likes"(

    "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "users"(
    "id" serial PRIMARY KEY,
    "phone" VARCHAR(255) UNIQUE NOT NULL,
    "firstname" VARCHAR(255) NOT NULL,
    "lastname" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "karma" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NULL,
    "avatar_url" VARCHAR(255) NULL,
    "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE `activities` (
  "id" serial PRIMARY KEY,
  "recipient_id" int NOT NULL,
  "sender_id" int NOT NULL,
  "read" tinyint(1) NOT NULL DEFAULT 0,
  "type" varchar(255) NOT NULL DEFAULT 0, -- '1-follow, 2-like, 3-message, 4-new post, 5-reply to post, 6 - mention, 7-liked your comment, 8 - commented on your post, 9-responded to your comment, 10 - mentioned you in a comment, 11  - feedback',
  "ref_id" int NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW()
)

CREATE TABLE "topics"(
    "id" serial PRIMARY KEY,
    "parent_id" int NOT NULL DEFAULT 0,
    "name" varchar(255) NOT NULL,
    "created_at" TIMESTAMP DEFAULT NOW()
);
