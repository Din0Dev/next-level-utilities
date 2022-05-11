class LessonModel {
  title: string;
  question: string;
  result: string;
  resultTS?: string;
  tags: string;

  constructor() {
    this.title = "";
    this.question = "";
    this.result = "";
    this.resultTS = "";
    this.tags = "";
  }
}

export default LessonModel;
