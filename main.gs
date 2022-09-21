function doGet() {
   var htmlOutput=HtmlService.createTemplateFromFile("index").evaluate()
     .setTitle("YY2000 on GAS with GDrive v.0.0")
     .setFaviconUrl("https://raw.githubusercontent.com/yyhome-tromb/YY2000Player/main/media/favicon_GAS_GDrive.png")
     .addMetaTag("viewport", "width=device-width, initial-scale=1");
   return htmlOutput;
 }
