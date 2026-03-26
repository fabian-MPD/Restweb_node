-- CreateTable
CREATE TABLE "todo" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR NOT NULL,
    "edad" INTEGER NOT NULL,
    "fecha" TIMESTAMP,

    CONSTRAINT "todo_pkey" PRIMARY KEY ("id")
);
