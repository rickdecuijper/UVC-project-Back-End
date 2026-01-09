import { prisma } from '../../src/lib/prisma.ts';

interface Task {
  id?: number;
  title: string;
  description: string;
  timeslotId: number;
  status: string;
}

const tasks = [
  {
    title: 'Plein vegen',
    description: 'Veeg alle bladeren en zwerfvuil van het plein.',
    timeslotId: 1,
    status: 'Nog niet gestart'
  },
  {
    title: 'Stoelen stapelen',
    description: 'Zet alle losse stoelen in stapels van vijf langs de muur.',
    timeslotId: 1,
    status: 'Nog niet gestart'
  },
  {
    title: 'Speeltoestellen controleren',
    description: 'Controleer schroeven en veiligheidsmatten bij de speeltoestellen.',
    timeslotId: 2,
    status: 'In uitvoering'
  },
  {
    title: 'EHBO-koffer aanvullen',
    description: 'Controleer verband, pleisters en ontsmettingsmiddel en vul aan.',
    timeslotId: 3,
    status: 'Nog niet gestart'
  },
  {
    title: 'Fietsenstalling opruimen',
    description: 'Verwijder achtergelaten fietsen en maak de looppaden vrij.',
    timeslotId: 4,
    status: 'Nog niet gestart'
  },
  {
    title: 'Waterpunten schoonmaken',
    description: 'Reinig de kranen en controleer of de filters vervangen moeten worden.',
    timeslotId: 5,
    status: 'Nog niet gestart'
  },
  {
    title: 'Decoraties ophangen',
    description: 'Bevestig vlaggenlijnen en posters bij de entree.',
    timeslotId: 2,
    status: 'Nog niet gestart'
  },
  {
    title: 'Schminktafel voorbereiden',
    description: 'Zet spiegels neer, reinig penselen en leg kleuren klaar.',
    timeslotId: 1,
    status: 'Nog niet gestart'
  },
  {
    title: 'Lunchpakketten verdelen',
    description: 'Pak per team de lunchzakjes en breng ze naar de vergaderruimte.',
    timeslotId: 4,
    status: 'Nog niet gestart'
  },
  {
    title: 'Afval scheiden en afvoeren',
    description: 'Leeg prullenbakken, scheid plastic en papier en zet containers bij de laadplaats.',
    timeslotId: 3,
    status: 'Afgerond'
  }
]

export async function seedTasks(): Promise<number> {
  const createMany = await prisma.task.createMany({
    data: tasks as Task[],
  });
  return createMany.count;
}
