document.addEventListener("DOMContentLoaded", function () {
  // Kiểm tra trạng thái đăng nhập và quyền admin từ localStorage
  const isLogin = localStorage.getItem('IsLogin') === 'true';
  const isAdmin = localStorage.getItem('IsAdmin') === 'true';

  // Dữ liệu tĩnh có sẵn
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
          date: "21 Tháng 5 Năm 2024",
          description:
              "TRƯỜNG THPT A PHỦ LÝ THÔNG BÁO BÁN HỒ SƠ TUYỂN SINH VÀO LỚP 10 NĂM HỌC 2024 - 2025",
          link: "#",
      },
  ];

  // Lấy dữ liệu bài viết từ localStorage
  const storedArticles = JSON.parse(localStorage.getItem('articles')) || [];

  // Kết hợp dữ liệu tĩnh và dữ liệu từ localStorage
  const allData = [...data, ...storedArticles];

  // Lấy container để hiển thị các bài viết
  const dataContainer = document.getElementById("information-container");

  // Hiển thị từng bài viết trong danh sách
  allData.forEach((article, index) => {
      const card = document.createElement("div");
      card.classList.add("data-card");

      // Tạo nội dung cho từng bài viết theo cấu trúc card đã cho
      card.innerHTML = `
        <img src="${article.imgSrc}" alt="Thông Báo" />
        <div class="announcement-info">
          <h3>${article.title}</h3>
          <p>${article.date || "Ngày không xác định"}</p>
          <p>${article.description}</p>
          <a href="${article.link}" class="read-more">XEM THÊM &rarr;</a>
        </div>
      `;

      // Thêm nút xóa cho các bài viết do người dùng thêm nếu đang đăng nhập với quyền admin
      if (isAdmin && index >= data.length) {
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Xóa Bài Viết';
          deleteButton.classList.add('btn-delete');
          deleteButton.addEventListener('click', () => {
              deleteArticle(index - data.length);
          });
          card.appendChild(deleteButton);
      }

      // Thêm card vào container
      dataContainer.appendChild(card);
  });

  // Hàm để xóa bài viết từ localStorage
  function deleteArticle(articleIndex) {
      if (confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) {
          // Lấy danh sách bài viết từ localStorage
          const articles = JSON.parse(localStorage.getItem('articles')) || [];
          // Xóa bài viết ở vị trí chỉ định
          articles.splice(articleIndex, 1);
          // Lưu lại danh sách sau khi đã xóa
          localStorage.setItem('articles', JSON.stringify(articles));
          // Tải lại trang để cập nhật lại danh sách
          alert("Bài viết đã được xóa thành công!");
          location.reload();
      }
  }
});
