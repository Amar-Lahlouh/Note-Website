document.addEventListener("DOMContentLoaded", function () {
  var noteForm = document.getElementById("noteForm");
  noteForm.addEventListener("submit", addNote);
});

function addNote(event) {
  event.preventDefault();

  var noteInput = document.getElementById("noteInput");
  var noteText = noteInput.value.trim();

  if (noteText !== "") {
    var noteList = document.getElementById("noteList");
    var li = document.createElement("li");
    li.textContent = noteText;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", deleteNote);

    var updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.classList.add("update");
    updateButton.addEventListener("click", updateNote);

    li.appendChild(deleteButton);
    li.appendChild(updateButton);
    noteList.appendChild(li);

    noteInput.value = "";
  }
}

function deleteNote() {
  var listItem = this.parentNode;
  var noteList = listItem.parentNode;
  noteList.removeChild(listItem);
}

function updateNote() {
  var listItem = this.parentNode;
  var noteText = listItem.firstChild.textContent;
  var newNoteText = prompt("Update your note:", noteText);

  if (newNoteText !== null && newNoteText.trim() !== "") {
    listItem.firstChild.textContent = newNoteText;
  }
}
