import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config()

const apiKey = process.env.API_KEY || "";

const genAI = new GoogleGenerativeAI(apiKey)

export async function generateFeedbackFromIA(repos: string) {
    const prompt = `
        Você é um recrutador de desenvolvedores. Avalie o perfil do GitHub de um usuário com base nos repositórios listados.

        Leve em consideração a qualidade do código, a documentação, os testes e as boas práticas de desenvolvimento.

        Repositórios: ${repos}

        ### Análise:
        1. **O que está correto no perfil deste usuário?**
        - 🎯 Quais pontos positivos você encontrou? Pode ser em relação ao código, estrutura, ou organização do perfil.

        2. **O que ele faz que é bom?**
        - 👍 Quais práticas ou estratégias ele adota que se destacam? Pense em organização, clareza, ou boas práticas de desenvolvimento.

        3. **O que está faltando no perfil do GitHub deste usuário?**
        - ❌ Existem elementos ou boas práticas que deveriam estar presentes, mas não estão? Fale sobre aspectos ausentes que poderiam agregar valor.

        4. **O que poderia ser melhorado?**
        - 🔧 Quais áreas do perfil ou dos repositórios poderiam ser otimizadas? Dê sugestões de melhorias específicas para o código, estrutura ou até mesmo interações nos projetos.

        5. **Quais são as melhores práticas que ele ou ela pode adotar?**
        - 📝 Fale sobre boas práticas que o usuário pode seguir para melhorar sua qualidade de código, experiência de colaboração e documentação.

        6. **Sugestões para melhorar a documentação ou a estrutura dos repositórios.**
        - 📚 Como a documentação pode ser mais clara e informativa? Existe algo na estrutura dos repositórios que pode ser ajustado para facilitar a navegação ou entendimento?

        ### Dicas extras:
        - **Seja específico** nas suas respostas e forneça **exemplos concretos**.
        - Use listas, emojis e destaque pontos importantes para tornar a análise **visualmente atraente** e **fácil de entender**.

        **⚡️ **Formatação:** Certifique-se de usar listas, títulos e emojis para deixar a análise bem visual e fácil de ler!
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    return text;
}