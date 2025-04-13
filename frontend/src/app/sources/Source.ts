interface ICreateSource {
    formId: String
    sources: Map<String, ISourceAnswer>
}

interface ISourceAnswer {
    question: String,
    answer: String
}