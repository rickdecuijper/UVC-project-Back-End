import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Winkel wordt gevuld...');
  await prisma.avatarOnderdeel.deleteMany({});
  await prisma.avatarOnderdeel.createMany({
    data: [
      { naam: 'Kort Haar', categorie: 'haarstijl', waarde: 0, afbeelding: 'kort', hex_kleur: '' },
      // { naam: 'Lang Haar', categorie: 'haarstijl', waarde: 50, afbeelding: 'lang', hex_kleur: '' },
      { naam: 'Mohawk', categorie: 'haarstijl', waarde: 150, afbeelding: 'mohawk', hex_kleur: '' },
  
      { naam: 'Basis T-shirt', categorie: 'kleding', waarde: 0, afbeelding: 'shirt_basis.png', hex_kleur: '' },
      { naam: 'Ruitjes T-shirt', categorie: 'kleding', waarde: 200, afbeelding: 'jas_arts.png', hex_kleur: '' },
      { naam: 'Geen Accessoire', categorie: 'accessoire', waarde: 0, afbeelding: 'leeg.png', hex_kleur: '' },
      { naam: 'Stethoscoop', categorie: 'accessoire', waarde: 300, afbeelding: 'acc_stethoscoop.png', hex_kleur: '' },
      { naam: 'Zeer Lichte Huid', categorie: 'huid', waarde: 0, afbeelding: 'leeg', hex_kleur: '#FFF2E8' },
      { naam: 'Lichte Huid', categorie: 'huid', waarde: 0, afbeelding: 'leeg', hex_kleur: '#FFDBAC' },
      { naam: 'Licht Getinte Huid', categorie: 'huid', waarde: 0, afbeelding: 'leeg', hex_kleur: '#F1C27D' },
      { naam: 'Getinte Huid', categorie: 'huid', waarde: 0, afbeelding: 'leeg', hex_kleur: '#E0AC69' },
      { naam: 'Olijfkleurige Huid', categorie: 'huid', waarde: 0, afbeelding: 'leeg', hex_kleur: '#C68642' },
      { naam: 'Bruine Huid', categorie: 'huid', waarde: 0, afbeelding: 'leeg', hex_kleur: '#8D5524' },
      { naam: 'Donkere Huid', categorie: 'huid', waarde: 0, afbeelding: 'leeg', hex_kleur: '#5C3A1A' },
      { naam: 'Zeer Donkere Huid', categorie: 'huid', waarde: 0, afbeelding: 'leeg', hex_kleur: '#3B1F0E' },

      { naam: 'Wit Haar', categorie: 'haarkleur', waarde: 0, afbeelding: 'leeg', hex_kleur: '#FFFFFF' },
      { naam: 'Grijs Haar', categorie: 'haarkleur', waarde: 0, afbeelding: 'leeg', hex_kleur: '#B0B0B0' },
      { naam: 'Zwart Haar', categorie: 'haarkleur', waarde: 0, afbeelding: 'leeg', hex_kleur: '#000000' },
      { naam: 'Donkerbruin Haar', categorie: 'haarkleur', waarde: 0, afbeelding: 'leeg', hex_kleur: '#2B1B0E' },
      { naam: 'Bruin Haar', categorie: 'haarkleur', waarde: 0, afbeelding: 'leeg', hex_kleur: '#442200' },
      { naam: 'Lichtbruin Haar', categorie: 'haarkleur', waarde: 0, afbeelding: 'leeg', hex_kleur: '#6F4E37' },
      { naam: 'Blond Haar', categorie: 'haarkleur', waarde: 0, afbeelding: 'leeg', hex_kleur: '#FFFF00' },
      { naam: 'Platina Blond Haar', categorie: 'haarkleur', waarde: 25, afbeelding: 'leeg', hex_kleur: '#F5F5DC' },

      { naam: 'Rood Haar', categorie: 'haarkleur', waarde: 25, afbeelding: 'leeg', hex_kleur: '#FF0000' },
      { naam: 'Oranje Haar', categorie: 'haarkleur', waarde: 25, afbeelding: 'leeg', hex_kleur: '#FF7F00' },
      { naam: 'Geel Haar', categorie: 'haarkleur', waarde: 25, afbeelding: 'leeg', hex_kleur: '#FFD700' },
      { naam: 'Groen Haar', categorie: 'haarkleur', waarde: 25, afbeelding: 'leeg', hex_kleur: '#00FF00' },
      { naam: 'Blauw Haar', categorie: 'haarkleur', waarde: 25, afbeelding: 'leeg', hex_kleur: '#0000FF' },
      { naam: 'Indigo Haar', categorie: 'haarkleur', waarde: 25, afbeelding: 'leeg', hex_kleur: '#4B0082' },
      { naam: 'Violet Haar', categorie: 'haarkleur', waarde: 25, afbeelding: 'leeg', hex_kleur: '#8F00FF' },
      { naam: 'Roze Haar', categorie: 'haarkleur', waarde: 25, afbeelding: 'leeg', hex_kleur: '#FF69B4' },
      { naam: 'Turquoise Haar', categorie: 'haarkleur', waarde: 25, afbeelding: 'leeg', hex_kleur: '#40E0D0' },
    ]

  });
  console.log('Database is correct ingevult.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });