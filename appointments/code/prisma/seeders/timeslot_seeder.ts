import { prisma } from '../../src/lib/prisma.ts';

interface Timeslot {
  id?: number;
  createdAt: Date;
  starttime: string;
  endtime: string;
}

const timeslots = [
  {
    starttime: "10:00",
    endtime: "11:00"
  },
  {
    starttime: "11:00",
    endtime: "11:30"
  },
  {
    starttime: "11:30",
    endtime: "11:50"
  },
  {
    starttime: "12:00",
    endtime: "12:30"
  },
  {
    starttime: "13:30",
    endtime: "14:00"
  },
  {
    starttime: "14:00",
    endtime: "15:30"
  },
]

export async function seedTimeslots(): Promise<number> {
  const createMany = await prisma.timeslot.createMany({
    data: timeslots as Timeslot[],
  });
  return createMany.count;
}
