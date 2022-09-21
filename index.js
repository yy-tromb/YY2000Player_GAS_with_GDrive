const gas = google.script;
const ul = document.getElementsByName("ul")[0];

window.addEventListener("DOMContentLoaded", () => {
  gas.run.withSuccessHandler(show_list).load_drive();
});

function show_list(data) {
   console.log(data);
  if (!!data.drive_files===false || !!data.audio_files===false) {
    throw new Error("Error - GDrive or Audio file are none");
  } else {
    console.log(data);
    for (let file of data.audio_files) {
      const li = document.createElement("li");
      ul.appendChild(li);
    }
  }
}
