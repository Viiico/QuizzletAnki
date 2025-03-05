// script.ts
function folderLogic() {
  const subFolders = document.querySelectorAll(".ci9jagf");
  if (!subFolders?.length)
    return;
  alert(subFolders.length);
}
document.addEventListener("DOMContentLoaded", () => {
  folderLogic();
});
