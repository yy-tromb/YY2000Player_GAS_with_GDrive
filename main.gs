function doGet() {
  var htmlOutput = HtmlService.createTemplateFromFile("index")
    .evaluate()
    .setTitle("YY2000 on GAS with GDrive v.0.0")
    .setFaviconUrl(
      "https://raw.githubusercontent.com/yyhome-tromb/YY2000Player_GAS_with_GDrive/main/media/favicon.png"
    )
    .addMetaTag("viewport", "width=device-width, initial-scale=1");
  return htmlOutput;
}


const audio_ext = [
  "wav",
  "flac",
  "alac",
  "mp3",
  "m4a",
  "aac",
  "ogg",
  "oga",
  "opus",
  "mka",
  "weba",
];

function load_drive() {
  const drive_files = DriveApp.getFiles();
  const filesArray = [];
  while (drive_files.hasNext()) {
    const file = drive_files.next();
    filesArray.push(file);
  }

  const audio_files = [];
  for (let file of filesArray) {
    const ext = file.getName().split(".").pop();
    if (audio_ext.includes(ext)) {
      audio_files.push(file);
    }
  }

  return {files:filesArray,audio_files:audio_files};
}
