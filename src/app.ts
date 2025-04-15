import express from 'express'
import getRepoGithubByUsername from './utils/getRepoGithub'
import cors from 'cors'

export const app = express()

app.use(express.json())
app.use(cors())


app.get("/", (_, res: any) => {
    return res.status(200).send('👁️')
})

app.post('/generate-feedback', async (req: Request, res: any) => {
    try {
        const { username } = req.body as unknown as { username: string };

        if (!username) {
            return res.status(400).json({ error: 'Nome de usuário não fornecido.' });
        }

        const response = await getRepoGithubByUsername(username);
        return res.status(200).json({ feedback: response });

    } catch (error: any) {
        console.error("Erro ao gerar feedback:", error.message);
        return res.status(500).json({ error: error.message || "Erro interno no servidor." });
    }
});
