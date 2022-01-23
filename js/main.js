let choseImgModel = document.querySelectorAll(".chose-img img");
let mainImg = document.querySelector(".gallery .main-img");

choseImgModel.forEach((img) =>
  img.addEventListener("click", () => {
    mainImg.src = img.src;
  })
);
