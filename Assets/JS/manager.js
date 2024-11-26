document.addEventListener('DOMContentLoaded', () => {
    // Lấy trạng thái đăng nhập và quyền admin từ localStorage
    const isLogin = localStorage.getItem('IsLogin') === 'true'; // Kiểm tra xem người dùng đã đăng nhập chưa
    const isAdmin = localStorage.getItem('IsAdmin') === 'true'; // Kiểm tra xem người dùng có phải admin không

    // Nếu người dùng chưa đăng nhập hoặc không phải admin, không cho phép thao tác
    if (!isLogin || !isAdmin) {
        alert("Bạn không có quyền truy cập vào các thao tác này!");
        return; // Dừng thực thi nếu không phải admin
    }

    // Lấy danh sách tài khoản từ localStorage
    const accounts = getAccounts();
    const currentUser = localStorage.getItem('currentUser'); // Lấy tài khoản đang đăng nhập
    const tableBody = document.querySelector('#accountsTable tbody');
    tableBody.innerHTML = ''; // Xóa nội dung cũ (nếu có)

    accounts.forEach((account, index) => {
        const row = document.createElement('tr');

        const cellIndex = document.createElement('td');
        cellIndex.textContent = index + 1;

        const cellUsername = document.createElement('td');
        cellUsername.textContent = account.username;

        const cellPassword = document.createElement('td');
        cellPassword.textContent = account.password;

        const cellRole = document.createElement('td');
        cellRole.textContent = account.role;

        const cellStatus = document.createElement('td');
        if (account.username === currentUser) {
            cellStatus.textContent = 'Đang đăng nhập';
        } else {
            cellStatus.textContent = 'Không đăng nhập';
        }

        const cellActions = document.createElement('td');
        
        // Nút cấp quyền Admin
        if (account.role !== 'admin') {
            const btnGrantAdmin = document.createElement('button');
            btnGrantAdmin.textContent = 'Cấp quyền Admin';
            btnGrantAdmin.classList.add('btn-admin');
            btnGrantAdmin.addEventListener('click', () => grantAdmin(account.username));
            cellActions.appendChild(btnGrantAdmin);
        }

        // Nút xóa quyền Admin (Chỉ hiển thị nếu tài khoản là admin nhưng không phải admin gốc)
        if (account.role === 'admin' && account.username !== 'admin1') {
            const btnRemoveAdmin = document.createElement('button');
            btnRemoveAdmin.textContent = 'Xóa quyền Admin';
            btnRemoveAdmin.classList.add('btn-remove-admin');
            btnRemoveAdmin.addEventListener('click', () => removeAdmin(account.username));
            cellActions.appendChild(btnRemoveAdmin);
        }

        // Nút xóa tài khoản (Chỉ hiển thị nếu tài khoản không phải admin gốc)
        if (account.username !== 'admin1') {
            const btnDelete = document.createElement('button');
            btnDelete.textContent = 'Xóa tài khoản';
            btnDelete.classList.add('btn-delete');
            btnDelete.addEventListener('click', () => deleteAccount(account.username));
            cellActions.appendChild(btnDelete);
        }

        row.appendChild(cellIndex);
        row.appendChild(cellUsername);
        row.appendChild(cellPassword);
        row.appendChild(cellRole);
        row.appendChild(cellStatus);
        row.appendChild(cellActions);

        tableBody.appendChild(row);
    });
});

// Lấy danh sách tài khoản từ localStorage
function getAccounts() {
    const accounts = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key !== 'IsAdmin' && key !== 'IsLogin' && key !== 'currentUser') {
            try {
                const userData = JSON.parse(localStorage.getItem(key));
                if (userData && userData.username && userData.password) {
                    accounts.push(userData);
                }
            } catch (e) {
                console.error(`Không thể parse dữ liệu từ key: ${key}`);
            }
        }
    }
    return accounts;
}

// Cấp quyền Admin cho tài khoản
function grantAdmin(username) {
    let account = JSON.parse(localStorage.getItem(username));
    if (account) {
        account.role = 'admin';
        localStorage.setItem(username, JSON.stringify(account));
        alert(`Cấp quyền Admin cho ${username} thành công!`);
        location.reload(); // Tải lại trang để cập nhật
    }
}

// Xóa quyền Admin của tài khoản
function removeAdmin(username) {
    if (username === 'admin1') {
        alert("Không thể xóa quyền admin của tài khoản admin gốc!");
        return; // Ngừng thao tác nếu là admin gốc
    }

    let account = JSON.parse(localStorage.getItem(username));
    if (account) {
        account.role = 'user'; // Đặt lại role thành user
        localStorage.setItem(username, JSON.stringify(account));
        alert(`Đã xóa quyền Admin của ${username}`);
        location.reload(); // Tải lại trang để cập nhật
    }
}

// Xóa tài khoản
function deleteAccount(username) {
    if (username === 'admin1') {
        alert("Không thể xóa tài khoản admin gốc!");
        return; // Ngừng thao tác nếu là admin gốc
    }

    if (confirm(`Bạn chắc chắn muốn xóa tài khoản ${username}?`)) {
        localStorage.removeItem(username); // Xóa tài khoản khỏi localStorage
        alert(`Đã xóa tài khoản ${username}`);
        location.reload(); // Tải lại trang để cập nhật
    }
}
