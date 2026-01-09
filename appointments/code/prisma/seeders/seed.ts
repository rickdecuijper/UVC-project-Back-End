import { prisma } from '../../src/lib/prisma.ts';
import { seedTasks } from './task_seeder.ts';
import { seedTimeslots } from './timeslot_seeder.ts';

const load = async (): Promise<void> => {
  try {
    await seedTimeslots();
    await seedTasks();
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
