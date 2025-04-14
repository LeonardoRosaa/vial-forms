export async function storeSource(formId: string, sources: Map<string, string>): Promise<void> {
    const json = {
        formId,
        sources: [...sources.keys()].map((k) => ({
            question: k,
            answer: sources.get(k),
        })),
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/source`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(json),
    });

    if (!response.ok) {
        throw new Error(`Failed to store sources: ${response.statusText}`);
    }
}