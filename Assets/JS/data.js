let product = {
  data: [
    {
      image:
        "https://r73troypb4obj.vcdn.cloud/website02/uploads/pictures/62318e151a1b854d4e902242/content_danh-gia-truong-thpt-a-phu-ly-ha-nam-co-tot-khong__3_.jpg",
      text: "Đánh giá trường THPT A Phủ Lý",
      subtext: "đây là đánh giá",
      link: "./lich_su_ra_doi.html",
    },
    {
      image: "https://phuly.hanamtv.vn/uploads/news/2022_11/1_14.jpg",
      text: "Lễ kỷ niệm 40 năm ngày nhà giáo việt nam và kỷ niệm 25 năm thành lập trường",
      subtext:
        "Kỷ niệm 40 năm ngày nhà giáo Việt Nam (20/11/1982 - 20/11/2022) và 25 năm thành lập trường THPT A Phủ Lý (1997 - 2022)",
    },
    {
      image:
        "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/458602713_1034383191806577_426667522684250421_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG_mTS15flA5GVog30gUpJ_j58Xbz2EUwOPnxdvPYRTA5eenSrgKFKebiPaVFj9aiG1qkSz6kTMqBygg-FV5YFk&_nc_ohc=qZ3fig0eC8YQ7kNvgGIR0J_&_nc_zt=23&_nc_ht=scontent.fhan14-1.fna&_nc_gid=AXIDDJmFIxHGrClWJ55h84K&oh=00_AYAL4pqYnqGbSNKoLNpxK-Z1Nq30clcYWPaTIekpXLpJgw&oe=67326D75",
      text: "NIỀM VUI NGÀY KHAI TRƯỜNG NĂM HỌC 2024-2025",
      subtext:
        "Hoà chung không khí tưng bừng, phấn khởi của Ngày hội toàn dân đưa trẻ tới trường ",
    },
    // {
    //   image:
    //     "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/458602713_1034383191806577_426667522684250421_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG_mTS15flA5GVog30gUpJ_j58Xbz2EUwOPnxdvPYRTA5eenSrgKFKebiPaVFj9aiG1qkSz6kTMqBygg-FV5YFk&_nc_ohc=qZ3fig0eC8YQ7kNvgGIR0J_&_nc_zt=23&_nc_ht=scontent.fhan14-1.fna&_nc_gid=AXIDDJmFIxHGrClWJ55h84K&oh=00_AYAL4pqYnqGbSNKoLNpxK-Z1Nq30clcYWPaTIekpXLpJgw&oe=67326D75",
    //   text: "NIỀM VUI NGÀY KHAI TRƯỜNG NĂM HỌC 2024-2025",
    //   subtext:
    //     "Hoà chung không khí tưng bừng, phấn khởi của Ngày hội toàn dân đưa trẻ tới trường ",
    // },
    // {
    //   image:
    //     "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/458602713_1034383191806577_426667522684250421_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG_mTS15flA5GVog30gUpJ_j58Xbz2EUwOPnxdvPYRTA5eenSrgKFKebiPaVFj9aiG1qkSz6kTMqBygg-FV5YFk&_nc_ohc=qZ3fig0eC8YQ7kNvgGIR0J_&_nc_zt=23&_nc_ht=scontent.fhan14-1.fna&_nc_gid=AXIDDJmFIxHGrClWJ55h84K&oh=00_AYAL4pqYnqGbSNKoLNpxK-Z1Nq30clcYWPaTIekpXLpJgw&oe=67326D75",
    //   text: "NIỀM VUI NGÀY KHAI TRƯỜNG NĂM HỌC 2024-2025",
    //   subtext:
    //     "Hoà chung không khí tưng bừng, phấn khởi của Ngày hội toàn dân đưa trẻ tới trường ",
    // },
    // {
    //   image:
    //     "https://scontent.fhan14-1.fna.fbcdn.net/v/t39.30808-6/458602713_1034383191806577_426667522684250421_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG_mTS15flA5GVog30gUpJ_j58Xbz2EUwOPnxdvPYRTA5eenSrgKFKebiPaVFj9aiG1qkSz6kTMqBygg-FV5YFk&_nc_ohc=qZ3fig0eC8YQ7kNvgGIR0J_&_nc_zt=23&_nc_ht=scontent.fhan14-1.fna&_nc_gid=AXIDDJmFIxHGrClWJ55h84K&oh=00_AYAL4pqYnqGbSNKoLNpxK-Z1Nq30clcYWPaTIekpXLpJgw&oe=67326D75",
    //   text: "NIỀM VUI NGÀY KHAI TRƯỜNG NĂM HỌC 2024-2025",
    //   subtext:
    //     "Hoà chung không khí tưng bừng, phấn khởi của Ngày hội toàn dân đưa trẻ tới trường ",
    // },
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

document.addEventListener('DOMContentLoaded', function () {
  const newsContainer = document.querySelector("#container");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  // Giả định rằng các phần tử luôn tồn tại
  let changeDimensions = newsContainer.getBoundingClientRect();
  let changeWidth = changeDimensions.width;

  next.addEventListener('click', () => {
    newsContainer.scrollLeft += changeWidth;
  });

  prev.addEventListener('click', () => {
    newsContainer.scrollLeft -= changeWidth;
  });
});