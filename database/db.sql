CREATE TABLE "address"(
    "address_id" serial PRIMARY KEY,
    "user_id" INTEGER NULL,
    "city" VARCHAR(255) NULL,
    "region" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL
);
CREATE TABLE "maslahat"(
    "maslahat_id" serial PRIMARY KEY,
    "user_id" INTEGER NULL,
    "body" TEXT NOT NULL,
    "longitude" INTEGER NOT NULL,
    "latitude" INTEGER NOT NULL,
    "type" varchar(50) NOT NULL, -- map, audio, text, photo
    "comment_count" INTEGER NOT NULL,
    "like_count" INTEGER NOT NULL,
    "share_count" INTEGER NOT NULL,
    "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "questions"(
    "question_id" serial PRIMARY KEY,
    "is_anonym" BOOL DEFAULT 'f',
    "user_id" INTEGER NULL,
    "body" TEXT NOT NULL,
    "status" VARCHAR(255) NOT NULL,
    "topic" VARCHAR(255) NOT NULL,
    "comment_count" INTEGER NOT NULL,
    "like_count" INTEGER NOT NULL,
    "share_count" INTEGER NOT NULL,
    "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "question_comments"(
    "comment_id" serial PRIMARY KEY,
    "question_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "comment" VARCHAR(255) NOT NULL,
    "is_pinned" BOOL DEFAULT 'f',
    "replied_comment_id" VARCHAR(255) NOT NULL DEFAULT 0,
    "is_reply" BOOL DEFAULT 'f',
    "likes" VARCHAR(255) NOT NULL,
    "dislikes" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "question_comments_like_dislike"(

    "created_at" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "users"(
    "user_id" serial PRIMARY KEY,
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
  "activity_id" serial PRIMARY KEY,
  "recipient_id" int NOT NULL,
  "sender_id" int NOT NULL,
  "read" tinyint(1) NOT NULL DEFAULT 0,
  "type" varchar(255) NOT NULL DEFAULT 0, -- '1-follow, 2-like, 3-message, 4-new post, 5-reply to post, 6 - mention, 7-liked your comment, 8 - commented on your post, 9-responded to your comment, 10 - mentioned you in a comment, 11  - feedback',
  "ref_id" int NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW()
)

CREATE TABLE "topics"(
    "topic_id" serial PRIMARY KEY,
    "parent_id" int NOT NULL DEFAULT 0,
    "name" varchar(255) NOT NULL,
    "created_at" TIMESTAMP DEFAULT NOW()
);
