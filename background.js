const img = [
  "0.png",
  "1.jfif",
  "2.png",
  "3.jpg",
  "4.png",
  "5.jfif",
  "6.png",
  "7.jfif",
  "8.png",
  "10.png",
  "11.png",
  "12.jfif",
  "13.png",
  "14.png",
  "15.png",
  "16.jfif",
  "17.png",
  "18.jfif",
  "19.png",
  "20.png",
  "21.jpg",
  "22.jpg",
  "23.png",
  "24.png",
];
//const imgBox = document.querySelector("#img_box");
const ranImg = img[Math.floor(Math.random() * img.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${ranImg}`;
bgImage.classList.add("background_image");

bgImage.style.width = "100%";
bgImage.style.hight = "100%";
//bgImage.style.zIndex = "10";
//bgImage.style.backgroundImage = `url('./css/bg/company${ranImg}')`;}

//document.style.backgroundImage = bgImage;
//bgImage.style.objectFit = "cover";

document.body.appendChild(bgImage);
