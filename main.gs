function doGet() {
   var htmlOutput=HtmlService.createTemplateFromFile("index").evaluate()
     .setTitle("YY2000 on GAS with GDrive v.0.0")
     .setFaviconUrl("https://raw.githubusercontent.com/yyhome-tromb/YY2000Player_GAS_with_GDrive/main/media/favicon.png")
     .addMetaTag("viewport", "width=device-width, initial-scale=1");
   return htmlOutput;
 }
