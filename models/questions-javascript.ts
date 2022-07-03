class QuestionsJavascriptDataModel {
  title: string;
  question: string;
  result: string;
  tags: string;
  select: string[];
  codeQuestion: string;

  constructor() {
    this.title = "";
    this.question = "";
    this.result = "";
    this.tags = "";
    this.select = [];
    this.codeQuestion = ""
  }
}

export default QuestionsJavascriptDataModel;
