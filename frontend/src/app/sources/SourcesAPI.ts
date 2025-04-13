import axios from "axios";


export async function storeSource(formId: String, sources: Map<String, String>): Promise<void> {
    const json = {
        formId,
        sources: [...sources.keys()].map((k) => { return { question: k, answer: sources.get(k), } })
    };
    return await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/source`, json)
}