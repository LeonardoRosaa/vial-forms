export interface ISourceDataField {
    question: string,
    answer: string
  }
  
export interface ICreateSource {
    formId: string,
    sources: [ISourceDataField]
  }