import { generateFeedbackFromIA } from "./feedbackFromIA";


export default async function getRepoGithubByUsername(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);

    if (response.status === 404) {
        throw new Error("Usuário do GitHub não encontrado.");
    }

    if (!response.ok) {
        throw new Error("Erro ao buscar repositórios do GitHub.");
    }

    const repos = await response.json();

    if (repos.length === 0) {
        throw new Error("Usuário encontrado, mas não possui repositórios públicos.");
    }

    const stringfyRepos = JSON.stringify(repos, null, 2);
    const feedback = await generateFeedbackFromIA(stringfyRepos);
    return feedback;
}