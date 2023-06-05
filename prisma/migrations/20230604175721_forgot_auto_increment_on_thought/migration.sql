-- AlterTable
CREATE SEQUENCE thought_id_seq;
ALTER TABLE "Thought" ALTER COLUMN "id" SET DEFAULT nextval('thought_id_seq');
ALTER SEQUENCE thought_id_seq OWNED BY "ThoughtWiddget"."id";
