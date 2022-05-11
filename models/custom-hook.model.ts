class CustomHookModel {
  name: string;
  linkDemo: string;
  code: any;
  codeTS?: string;
  description: string;
  tags: string;

  constructor() {
    this.name = "";
    this.code = "";
    this.codeTS = "";
    this.linkDemo = "";
    this.description = "";
    this.tags = "";
  }
}

export default CustomHookModel;