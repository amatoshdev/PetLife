console.log("Script is running!");

let doubtsElements = document.querySelectorAll('.doubts');

doubtsElements.forEach(function (doubts) {
    doubts.addEventListener("click", function () {
        console.log("Clicked!");
        doubts.classList.toggle('active');
    });
});
