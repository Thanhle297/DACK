let product = {
  data: [
    {
      image: "./img/003.jpg",
      text: "Lịch sử hình thành trường THPT A Phủ lý",
      subtext: "Trường THPT A Phủ Lý",
      link: "./lich_su_ra_doi.html",
    },
    {
      image: "./img/002.jpg",
      text: "Lễ kỷ niệm 40 năm ngày nhà giáo việt nam và kỷ niệm 25 năm thành lập trường",
      subtext:
        "Kỷ niệm 40 năm ngày nhà giáo Việt Nam (20/11/1982 - 20/11/2022) và 25 năm thành lập trường THPT A Phủ Lý (1997 - 2022)",
      link: "#",
    },
    {
      image: "./img/khaigiang.jpg",
      text: "NIỀM VUI NGÀY KHAI TRƯỜNG NĂM HỌC 2024-2025",
      subtext:
        "Hoà chung không khí tưng bừng, phấn khởi của Ngày hội toàn dân đưa trẻ tới trường ",
      link: "#",
    },
    {
      image: "./img/khaigiang2.jpg",
      text: "NIỀM VUI NGÀY KHAI TRƯỜNG NĂM HỌC 2024-2025",
      subtext:
        "Hoà chung không khí tưng bừng, phấn khởi của Ngày hội toàn dân đưa trẻ tới trường ",
      link: "#",
    },
    {
      image: "./img/khaigiang3.jpg",
      text: "NIỀM VUI NGÀY KHAI TRƯỜNG NĂM HỌC 2024-2025",
      subtext:
        "Hoà chung không khí tưng bừng, phấn khởi của Ngày hội toàn dân đưa trẻ tới trường ",
      link: "#",
    },
    {
      image: "./img/khaigiang.jpg",
      text: "NIỀM VUI NGÀY KHAI TRƯỜNG NĂM HỌC 2024-2025",
      subtext:
        "Hoà chung không khí tưng bừng, phấn khởi của Ngày hội toàn dân đưa trẻ tới trường ",
      link: "#",
    },
    {
      image: "./img/khaigiang.jpg",
      text: "NIỀM VUI NGÀY KHAI TRƯỜNG NĂM HỌC 2024-2025",
      subtext:
        "Hoà chung không khí tưng bừng, phấn khởi của Ngày hội toàn dân đưa trẻ tới trường ",
      link: "#",
    },
    {
      image: "./img/khaigiang.jpg",
      text: "NIỀM VUI NGÀY KHAI TRƯỜNG NĂM HỌC 2024-2025",
      subtext:
        "Hoà chung không khí tưng bừng, phấn khởi của Ngày hội toàn dân đưa trẻ tới trường ",
      link: "#",
    },
    {
      image: "./img/khaigiang.jpg",
      text: "NIỀM VUI NGÀY KHAI TRƯỜNG NĂM HỌC 2024-2025",
      subtext:
        "Hoà chung không khí tưng bừng, phấn khởi của Ngày hội toàn dân đưa trẻ tới trường ",
      link: "#",
    },
    {
      image: "./img/khaigiang.jpg",
      text: "NIỀM VUI NGÀY KHAI TRƯỜNG NĂM HỌC 2024-2025",
      subtext:
        "Hoà chung không khí tưng bừng, phấn khởi của Ngày hội toàn dân đưa trẻ tới trường ",
      link: "#",
    },
  ],
};

for (let i of product.data) {
  let a = document.createElement("a");
  a.setAttribute("href", i.link);
  a.setAttribute("target", "_self");

  let card = document.createElement("div");
  card.classList.add("card");

  let imgcontainer = document.createElement("div");
  imgcontainer.classList.add("img-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgcontainer.appendChild(image);
  card.appendChild(imgcontainer);

  let containers = document.createElement("div");
  containers.classList.add("container");

  let name = document.createElement("h4");
  name.classList.add("product-name");
  name.innerText = i.text.toUpperCase();
  containers.appendChild(name);

  let sub = document.createElement("h5");
  sub.innerText = i.subtext;
  containers.appendChild(sub);

  card.appendChild(containers);
  a.appendChild(card);
  document.getElementById("container").appendChild(a);
}

// slide show
document.addEventListener("DOMContentLoaded", function () {
  const newsContainer = document.querySelector("#container");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  // Giả định rằng các phần tử luôn tồn tại
  let changeDimensions = newsContainer.getBoundingClientRect();
  let changeWidth = changeDimensions.width;

  next.addEventListener("click", () => {
    newsContainer.scrollLeft += changeWidth;
  });

  prev.addEventListener("click", () => {
    newsContainer.scrollLeft -= changeWidth;
  });
});
