import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Winkel wordt gevuld...');
  await prisma.avatarOnderdeel.deleteMany({});
  await prisma.avatarOnderdeel.createMany({
    data: [
      { naam: 'Lichte Huid', categorie: 'huid', waarde: 0, afbeelding: 'leeg', hex_kleur: '#FFDBAC' },
      { naam: 'Getinte Huid', categorie: 'huid', waarde: 0, afbeelding: 'leeg', hex_kleur: '#8D5524' },
      { naam: 'Kort Haar', categorie: 'haarstijl', waarde: 0, afbeelding: 'kort', hex_kleur: '' },
      { naam: 'Lang Haar', categorie: 'haarstijl', waarde: 50, afbeelding: 'lang', hex_kleur: '' },
      { naam: 'Mohawk', categorie: 'haarstijl', waarde: 150, afbeelding: 'mohawk', hex_kleur: '' },
      { naam: 'Bruin Haar', categorie: 'haarkleur', waarde: 0, afbeelding: 'leeg', hex_kleur: '#442200' },
      { naam: 'Blond Haar', categorie: 'haarkleur', waarde: 0, afbeelding: 'leeg', hex_kleur: '#FFFF00' },
      { naam: 'Basis T-shirt', categorie: 'kleding', waarde: 0, afbeelding: 'shirt_basis.png', hex_kleur: '' },
      { naam: 'Dierenarts Jas', categorie: 'kleding', waarde: 200, afbeelding: 'jas_arts.png', hex_kleur: '' },
      { naam: 'Geen Accessoire', categorie: 'accessoire', waarde: 0, afbeelding: 'leeg.png', hex_kleur: '' },
      { naam: 'Stethoscoop', categorie: 'accessoire', waarde: 300, afbeelding: 'acc_stethoscoop.png', hex_kleur: '' },
    ],
  });
  console.log('✅ De winkel is succesvol gevuld!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });