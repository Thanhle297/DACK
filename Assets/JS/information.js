document.addEventListener("DOMContentLoaded",function(){
    const data = [
        {
            imgSrc: "./Assets/Images/thong_bao.png",
            title:
              "[NĂM HỌC 2024 - 2025] KẾ HOẠCH TUYỂN SINH VÀO LỚP 10 TRƯỜNG THPT A PHỦ LÝ",
            date: "18 Tháng 5 Năm 2024",
            description:
              "THÔNG BÁO TUYỂN SINH VÀO LỚP 10 NĂM HỌC 2024 - 2025 TRƯỜNG THPT A PHỦ LÝ",
            link: "./tuyensinh.html",
          },
          {
            imgSrc: "./Assets/Images/thong_bao.png",
            title:
              "[THÔNG BÁO] THÔNG BÁO BÁN HỒ SƠ TUYỂN SINH VÀO LỚP 10 NĂM HỌC 2024 - 2025",
            date: "21 Tháng 5 2024",
            description:
              "TRƯỜNG THPT A PHỦ LÝ THÔNG BÁO BÁN HỒ SƠ TUYỂN SINH VÀO LỚP 10 NĂM HỌC 2024 - 2025",
            link: "#",
          },
    ];

    const dataContainer = document.getElementById("information-container");

    data.forEach((data) => {
        const card = document.createElement("div");
        card.classList.add("data-card");

        card.innerHTML = `
          <img src="${data.imgSrc}" alt="Thông Báo" />
          <div class="announcement-info">
            <h3>${data.title}</h3>
            <p>${data.date}</p>
            <p>${data.description}</p>
            <a href="${data.link}" class="read-more">XEM THÊM &rarr;</a>
          </div>
        `;
        dataContainer.appendChild(card);
    });
})