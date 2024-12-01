document.addEventListener("DOMContentLoaded", function () {
  const announcements = [
    {
      imgSrc: "./img/tb.png",
      title:
        "[NĂM HỌC 2024 - 2025] KẾ HOẠCH TUYỂN SINH VÀO LỚP 10 TRƯỜNG THPT A PHỦ LÝ",
      date: "18 Tháng 5 Năm 2024",
      description:
        "THÔNG BÁO TUYỂN SINH VÀO LỚP 10 NĂM HỌC 2024 - 2025 TRƯỜNG THPT A PHỦ LÝ",
      link: "./tuyensinh.html",
    },
    {
      imgSrc: "./img/tb.png",
      title:
        "[THÔNG BÁO] THÔNG BÁO BÁN HỒ SƠ TUYỂN SINH VÀO LỚP 10 NĂM HỌC 2024 - 2025",
      date: "21 Tháng 5 2024",
      description:
        "TRƯỜNG THPT A PHỦ LÝ THÔNG BÁO BÁN HỒ SƠ TUYỂN SINH VÀO LỚP 10 NĂM HỌC 2024 - 2025",
      link: "#",
    },
  ];

  const announcementContainer = document.getElementById(
    "announcement-container"
  );

  announcements.forEach((announcement) => {
    const card = document.createElement("div");
    card.classList.add("announcement-card");

    card.innerHTML = `
          <img src="${announcement.imgSrc}" alt="Thông Báo" />
          <div class="announcement-info">
            <h3>${announcement.title}</h3>
            <p>${announcement.date}</p>
            <p>${announcement.description}</p>
            <a href="${announcement.link}" class="read-more">XEM THÊM &rarr;</a>
          </div>
        `;

    announcementContainer.appendChild(card);
  });
});
