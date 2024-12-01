let neww = {
  data: [
    {
      img: "./img/tb.png",
      title: "Thông báo kế hoạch tuyển sinh vào 10 năm học 2024-2025 trường THPT A Phủ Lý",
      date: "18 tháng 05 năm 2024",
      link:"./tuyensinh.html",
    },
    {
      img: "./img/tb.png",
      title: "Trường THPT A Phủ Lý thông báo bán hồ sơ tuyển sinh vào lớp 10 năm học 2024-2025",
      date: "08 tháng 10 năm 2024",
    },
    {
      img: "./img/tb.png",
      title: "Kế hoạch 1",
      date: "08 tháng 10 năm 2024",
    },
    {
      img: "./img/tb.png",
      title: "Kế hoạch 1",
      date: "08 tháng 10 năm 2024",
    },
  ],
};

for (let i of neww.data) {
  let a = document.createElement("a");
  a.setAttribute("href", i.link);
  a.setAttribute("target", "_self");

  let cardNew = document.createElement("div");
  cardNew.classList.add("cardNew");
  
  let cardbox = document.createElement("div");
  cardbox.classList.add("cardbox-container");

  let imgNewContainer = document.createElement("div")
  imgNewContainer.classList.add("imgNewContainer");
  cardbox.appendChild(imgNewContainer)
  
  let cardimg = document.createElement("img");
  cardimg.setAttribute("src", i.img);

  cardNew.appendChild(cardbox);
  imgNewContainer.appendChild(cardimg);

  let newInformation = document.createElement("div");
  newInformation.classList.add("newInformation");

  cardbox.appendChild(newInformation)
  let newNote = document.createElement("h3");
  newNote.classList.add("newNote");
  newNote.innerText = "Thông báo";

  newInformation.appendChild(newNote);

  let newTitle = document.createElement("span");
  newTitle.classList.add("newTitle");
  newTitle.innerText = i.title.toUpperCase();
  newInformation.appendChild(newTitle);

  let newDate = document.createElement("span");
  newDate.classList.add("newDate");
  newDate.innerText = i.date;
  newInformation.appendChild(newDate)

  cardNew.appendChild(cardbox);
  a.appendChild(cardNew);
  document.getElementById("news").appendChild(a);

}

