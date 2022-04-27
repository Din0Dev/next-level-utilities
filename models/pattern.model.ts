class PatternModel {
  name: string;
  regex: any;
  description: string;
  tags: string;

  constructor() {
    this.name = "";
    this.regex = "";
    this.description = "";
    this.tags = "";
  }
}

export default PatternModel;