CREATE TABLE "user" (
  "id" text NOT NULL DEFAULT gen_random_uuid(),
  "uuid" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "nickname" varchar,
  "name" varchar,
  "surname" varchar,
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "last_seen" timestamptz NOT NULL DEFAULT NOW()
);

CREATE TABLE "initiative_" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "name" varchar,
  "geom" geometry,
  "description" text,
  "created_at" timestamptz NOT NULL DEFAULT NOW()
);

CREATE TABLE "initiative_member" (
  "id" SERIAL PRIMARY KEY,
  "initiative_id" UUID,
  "user_id" UUID,
  "created_at" timestamptz NOT NULL DEFAULT NOW()
);

CREATE TABLE "initiative_thread" (
  "id" SERIAL PRIMARY KEY,
  "initiative_id" UUID,
  "created_at" timestamptz NOT NULL DEFAULT NOW()
);

CREATE TABLE "initiative_thread_message" (
  "id" SERIAL PRIMARY KEY,
  "thread_id" SERIAL,
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "user_id" UUID,
  "tender_id" UUID
);

CREATE TABLE "initiative_thread_comment" (
  "id" SERIAL PRIMARY KEY,
  "message_id" SERIAL,
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "user_id" UUID
);

CREATE TABLE "tender" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "org_id" UUID,
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "initiative_id" UUID,
  "parent_project" SERIAL
);

CREATE TABLE "org" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "geom" geometry,
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "description" text
);

CREATE TABLE "org_project" (
  "id" SERIAL PRIMARY KEY,
  "user_id" UUID,
  "org_id" UUID,
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "description" text
);

CREATE TABLE "org_member" (
  "id" SERIAL PRIMARY KEY,
  "user_id" UUID,
  "org_id" UUID,
  "created_at" timestamptz NOT NULL DEFAULT NOW(),
  "role" varchar,
  "role_description" text
);

CREATE TABLE "org_tag" (
  "id" SERIAL PRIMARY KEY,
  "org_id" UUID
);

CREATE TABLE "initiative_tag" (
  "id" SERIAL PRIMARY KEY,
  "initiative_id" UUID
);

ALTER TABLE "initiative_member" ADD FOREIGN KEY ("initiative_id") REFERENCES "initiative_" ("id");

ALTER TABLE "initiative_member" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("uuid");

ALTER TABLE "initiative_thread" ADD FOREIGN KEY ("initiative_id") REFERENCES "initiative_" ("id");

ALTER TABLE "initiative_thread_message" ADD FOREIGN KEY ("thread_id") REFERENCES "initiative_thread" ("id");

ALTER TABLE "initiative_thread_comment" ADD FOREIGN KEY ("message_id") REFERENCES "initiative_thread_message" ("id");

ALTER TABLE "initiative_thread_message" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("uuid");

ALTER TABLE "initiative_thread_comment" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("uuid");

ALTER TABLE "org_member" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("uuid");

ALTER TABLE "org_member" ADD FOREIGN KEY ("org_id") REFERENCES "org" ("id");

ALTER TABLE "org_tag" ADD FOREIGN KEY ("org_id") REFERENCES "org" ("id");

ALTER TABLE "initiative_tag" ADD FOREIGN KEY ("initiative_id") REFERENCES "initiative_" ("id");

ALTER TABLE "org_project" ADD FOREIGN KEY ("org_id") REFERENCES "org" ("id");

ALTER TABLE "org_project" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("uuid");

ALTER TABLE "tender" ADD FOREIGN KEY ("parent_project") REFERENCES "org_project" ("id");

ALTER TABLE "tender" ADD FOREIGN KEY ("org_id") REFERENCES "org" ("id");

ALTER TABLE "tender" ADD FOREIGN KEY ("initiative_id") REFERENCES "initiative_" ("id");

ALTER TABLE "initiative_thread_message" ADD FOREIGN KEY ("tender_id") REFERENCES "tender" ("id");
