document.addEventListener("DOMContentLoaded", () => {
    const availableList = document.getElementById("available-list");
    const selectedList = document.getElementById("selected-list");
    const moveRight = document.getElementById("move-right");
    const moveAllRight = document.getElementById("move-all-right");
    const moveLeft = document.getElementById("move-left");
    const moveAllLeft = document.getElementById("move-all-left");
  
    const availableOptions = ["HTML", "CSS", "JavaScript", "React", "Vue", "Angular", "Svelte"];
    
    // Populate the available list
    availableOptions.forEach(option => {
      const li = document.createElement("li");
      li.textContent = option;
      availableList.appendChild(li);
    });
  
    // Toggle selection of list items
    function toggleSelection(event) {
      if (event.target.tagName === "LI") {
        event.target.classList.toggle("selected");
      }
    }
  
    availableList.addEventListener("click", toggleSelection);
    selectedList.addEventListener("click", toggleSelection);
  
    // Move selected items
    function moveSelectedItems(fromList, toList) {
      const selectedItems = Array.from(fromList.querySelectorAll(".selected"));
      selectedItems.forEach(item => {
        item.classList.remove("selected");
        toList.appendChild(item);
      });
    }
  
    // Move all items
    function moveAllItems(fromList, toList) {
      const items = Array.from(fromList.querySelectorAll("li"));
      items.forEach(item => {
        item.classList.remove("selected");
        toList.appendChild(item);
      });
    }
  
    moveRight.addEventListener("click", () => moveSelectedItems(availableList, selectedList));
    moveAllRight.addEventListener("click", () => moveAllItems(availableList, selectedList));
    moveLeft.addEventListener("click", () => moveSelectedItems(selectedList, availableList));
    moveAllLeft.addEventListener("click", () => moveAllItems(selectedList, availableList));
  });
  