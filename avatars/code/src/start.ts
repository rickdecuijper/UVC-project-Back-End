import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import 'dotenv/config';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/onderdelen', async (req, res) => {
    try {
        const onderdelen = await prisma.avatarOnderdeel.findMany();
        res.json(onderdelen);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Fout bij ophalen onderdelen" });
    }
});

const PORT = 3014;
app.listen(PORT, () => {
    console.log(`Avatar service draait op ${PORT}`);
});