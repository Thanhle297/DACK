document.addEventListener("DOMContentLoaded", () => {
  // Kiểm tra trạng thái đăng nhập và quyền admin từ localStorage
  const isLogin = localStorage.getItem("IsLogin") === "true";
  const isAdmin = localStorage.getItem("IsAdmin") === "true";
  const role = localStorage.getItem("role");

  // Chỉ hiển thị nút "ADD" nếu người dùng là admin và đã đăng nhập
  if (isLogin && isAdmin || role !=='manager') {
    const addButton = document.querySelector(".admin-add");
    if (addButton) {
      addButton.style.display = "block";
      addButton.addEventListener("click", () => {
        window.location.href = "./add-new.html"; // Chuyển đến trang thêm bài viết
      });
    }
  }
});

document.getElementById('newsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dateValue = document.getElementById('date').value; // Lấy giá trị ngày (format: YYYY-MM-DD)
    const imageFile = document.getElementById('image').files[0];

    // Chuyển đổi định dạng ngày từ YYYY-MM-DD thành "X tháng Y năm Z"
    const formattedDate = formatDate(dateValue);

    // Chuyển đổi hình ảnh sang base64 để lưu nó vào localStorage hoặc gửi đến máy chủ
    const reader = new FileReader();
    reader.onloadend = function() {
        const imageBase64 = reader.result;

        // Lưu trữ dữ liệu bài viết trong localStorage
        const articles = JSON.parse(localStorage.getItem('articles')) || [];
        articles.push({
            imgSrc: imageBase64, // Store base64 image data
            title: title,
            date: formattedDate, // Sử dụng ngày đã định dạng
            description: description,
            link: "#" // Có thể cập nhật sau
        });

        localStorage.setItem('articles', JSON.stringify(articles));
        alert('Bài viết đã được thêm thành công!');
        window.location.href = "news.html"; // Chuyển về trang tin tức
    };
    if (imageFile) {
        reader.readAsDataURL(imageFile);
    }
});

// Hàm chuyển đổi ngày từ YYYY-MM-DD thành "ngày X tháng Y năm Z"
function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    const monthNames = [
        "tháng 1", "tháng 2", "tháng 3", "tháng 4", "tháng 5", "tháng 6",
        "tháng 7", "tháng 8", "tháng 9", "tháng 10", "tháng 11", "tháng 12"
    ];
    return `${day} ${monthNames[parseInt(month) - 1]} năm ${year}`;
}
