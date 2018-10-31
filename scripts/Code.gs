function doGet() {
  return HtmlService.createTemplateFromFile('clientHtml')
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}
