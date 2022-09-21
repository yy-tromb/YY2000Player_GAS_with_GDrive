const gas = google.script;
const ul = document.getElementsByName("ul");

window.addEventListener("DOMContentLoaded", () => {
  gas.run.withSuccessHandler(show_list).load_drive();
});

function show_list(data) {
  if (!!data.drive_files || !!data.audio_files) {
    alert("Error - GDrive or Audio file are none");
    return false;
  } else {
    console.log(data);
    for (let file of data.audio_files) {
      const li = document.createElement("li");
      ul.appendChild(li);
    }
  }
}
