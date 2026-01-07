-- CreateTable
CREATE TABLE "AvatarOnderdeel" (
    "id" SERIAL NOT NULL,
    "naam" TEXT NOT NULL,
    "categorie" TEXT NOT NULL,
    "waarde" INTEGER NOT NULL DEFAULT 0,
    "afbeelding" TEXT NOT NULL,
    "hex_kleur" TEXT,

    CONSTRAINT "AvatarOnderdeel_pkey" PRIMARY KEY ("id")
);
