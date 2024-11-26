document.addEventListener('DOMContentLoaded', () => {
    // Lấy thông tin từ localStorage
    const isLogin = localStorage.getItem('IsLogin') === 'true'; // Kiểm tra xem người dùng đã đăng nhập chưa
    const isAdmin = localStorage.getItem('IsAdmin') === 'true'; // Kiểm tra xem người dùng có phải là admin

    // Lấy phần tử "Quản lý tài khoản"
    const manageAccountLink = document.getElementById('Manager');

    // Kiểm tra và ẩn hoặc hiện "Quản lý tài khoản" dựa trên quyền hạn
    if (isLogin) {
        if (isAdmin) {
            manageAccountLink.classList.remove('hidden'); // Hiển thị nếu là admin
        } else {
            manageAccountLink.classList.add('hidden'); // Ẩn nếu là user
        }
    } else {
        manageAccountLink.classList.add('hidden'); // Ẩn nếu chưa đăng nhập
    }
});
