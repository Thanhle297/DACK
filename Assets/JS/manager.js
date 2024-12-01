// document.addEventListener('DOMContentLoaded', () => {
//     // Lấy trạng thái đăng nhập và quyền admin từ localStorage
//     const isLogin = localStorage.getItem('IsLogin') === 'true'; // Kiểm tra xem người dùng đã đăng nhập chưa
//     const isAdmin = localStorage.getItem('IsAdmin') === 'true'; // Kiểm tra xem người dùng có phải admin không

//     // Nếu người dùng chưa đăng nhập hoặc không phải admin, không cho phép thao tác
//     // if (!isLogin || !isAdmin || !isManager) {
//     //     alert("Bạn không có quyền truy cập vào các thao tác này!");
//     //     return; // Dừng thực thi nếu không phải admin
//     // }

//     // Lấy danh sách tài khoản từ localStorage
//     const accounts = getAccounts();
//     const currentUser = localStorage.getItem('currentUser'); // Lấy tài khoản đang đăng nhập
//     const tableBody = document.querySelector('#accountsTable tbody');
//     tableBody.innerHTML = ''; // Xóa nội dung cũ (nếu có)

//     accounts.forEach((account, index) => {
//         const row = document.createElement('tr');

//         const cellIndex = document.createElement('td');
//         cellIndex.textContent = index + 1;

//         const cellUsername = document.createElement('td');
//         cellUsername.textContent = account.username;

//         const cellPassword = document.createElement('td');
//         cellPassword.textContent = account.password;

//         const cellRole = document.createElement('td');
//         cellRole.textContent = account.role;

//         const cellStatus = document.createElement('td');
//         if (account.username === currentUser) {
//             cellStatus.textContent = 'Đang đăng nhập';
//         } else {
//             cellStatus.textContent = 'Không đăng nhập';
//         }

//         const cellActions = document.createElement('td');
        
//         // Nút cấp quyền Manager
//         if (account.role !== 'manager' && account.role!=='admin' ) {
//             const btnGrantManager = document.createElement('button');
//             btnGrantManager.textContent = 'Cấp quyền Manager';
//             btnGrantManager.classList.add('btn-manager');
//             btnGrantManager.addEventListener('click', () => grantManager(account.username));
//             cellActions.appendChild(btnGrantManager);
//         }

//         // Nút xóa quyền Manager (Chỉ hiển thị nếu tài khoản là manager)
//         if (account.role === 'manager') {
//             const btnRemoveManager = document.createElement('button');
//             btnRemoveManager.textContent = 'Xóa quyền Manager';
//             btnRemoveManager.classList.add('btn-remove-manager');
//             btnRemoveManager.addEventListener('click', () => removeManager(account.username));
//             cellActions.appendChild(btnRemoveManager);
//         }

//         // Nút xóa tài khoản (Chỉ hiển thị nếu tài khoản không phải admin gốc)
//         if (account.role !== 'admin' ) {
//             const btnDelete = document.createElement('button');
//             btnDelete.textContent = 'Xóa tài khoản';
//             btnDelete.classList.add('btn-delete');
//             btnDelete.addEventListener('click', () => deleteAccount(account.username));
//             cellActions.appendChild(btnDelete);
//         }

//         row.appendChild(cellIndex);
//         row.appendChild(cellUsername);
//         row.appendChild(cellPassword);
//         row.appendChild(cellRole);
//         row.appendChild(cellStatus);
//         row.appendChild(cellActions);

//         tableBody.appendChild(row);
//     });
// });

// // Lấy danh sách tài khoản từ localStorage
// function getAccounts() {
//     const accounts = [];
//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         if (key !== 'IsAdmin' && key !== 'IsLogin' && key !== 'currentUser') {
//             try {
//                 const userData = JSON.parse(localStorage.getItem(key));
//                 if (userData && userData.username && userData.password) {
//                     accounts.push(userData);
//                 }
//             } catch (e) {
//                 console.error(`Không thể parse dữ liệu từ key: ${key}`);
//             }
//         }
//     }
//     return accounts;
// }

// // Cấp quyền Manager cho tài khoản
// function grantManager(username) {
//     let account = JSON.parse(localStorage.getItem(username));
//     if (account) {
//         account.role = 'manager';
//         localStorage.setItem(username, JSON.stringify(account));
//         alert(`Cấp quyền Manager cho ${username} thành công!`);
//         location.reload(); // Tải lại trang để cập nhật
//     }
// }

// // Xóa quyền Manager của tài khoản
// function removeManager(username) {
//     if (username === 'admin1') {
//         alert("Không thể xóa quyền Manager của tài khoản admin gốc!");
//         return; // Ngừng thao tác nếu là admin gốc
//     }

//     let account = JSON.parse(localStorage.getItem(username));
//     if (account) {
//         account.role = 'user'; // Đặt lại role thành user
//         localStorage.setItem(username, JSON.stringify(account));
//         alert(`Đã xóa quyền Manager của ${username}`);
//         location.reload(); // Tải lại trang để cập nhật
//     }
// }

// // Xóa tài khoản
// function deleteAccount(username) {
//     if (username === 'admin1') {
//         alert("Không thể xóa tài khoản admin gốc!");
//         return; // Ngừng thao tác nếu là admin gốc
//     }

//     if (confirm(`Bạn chắc chắn muốn xóa tài khoản ${username}?`)) {
//         localStorage.removeItem(username); // Xóa tài khoản khỏi localStorage
//         alert(`Đã xóa tài khoản ${username}`);
//         location.reload(); // Tải lại trang để cập nhật
//     }
// }


document.addEventListener('DOMContentLoaded', () => {
    // Lấy trạng thái đăng nhập và quyền admin từ localStorage
    const isLogin = localStorage.getItem('IsLogin') === 'true'; // Kiểm tra xem người dùng đã đăng nhập chưa
    const isAdmin = localStorage.getItem('IsAdmin') === 'true'; // Kiểm tra xem người dùng có phải admin không

    // Lấy danh sách tài khoản từ localStorage
    const accounts = getAccounts();
    const currentUser = localStorage.getItem('currentUser'); // Lấy tài khoản đang đăng nhập
    const tableBody = document.querySelector('#accountsTable tbody'); // lấy theo id bảng để push dữ liệu ra bảng
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
        
        // Nút cấp quyền Manager (Chỉ admin mới có thể cấp quyền Manager cho user)
        if (isAdmin && account.role !== 'manager' && account.role !== 'admin') {
            const btnGrantManager = document.createElement('button');
            btnGrantManager.textContent = 'Cấp quyền Manager';
            btnGrantManager.classList.add('btn-manager');
            btnGrantManager.addEventListener('click', () => grantManager(account.username));
            cellActions.appendChild(btnGrantManager);
        }

        // Nút xóa quyền Manager (Chỉ admin mới có thể xóa quyền Manager)
        if (isAdmin && account.role === 'manager') {
            const btnRemoveManager = document.createElement('button');
            btnRemoveManager.textContent = 'Xóa quyền Manager';
            btnRemoveManager.classList.add('btn-remove-manager');
            btnRemoveManager.addEventListener('click', () => removeManager(account.username));
            cellActions.appendChild(btnRemoveManager);
        }

        // Nút xóa tài khoản (Admin có thể xóa tất cả, Manager chỉ có thể xóa tài khoản user)
        if ((isAdmin && account.role !== 'admin') || (account.role === 'user' && account.username !== currentUser)) {
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
    // khởi tạo mảng rỗng để lưu trữ
    const accounts = [];
    // lặp qua các khóa trong localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        // loại trừ các khóa không phải là tài khoản
        if (key !== 'IsAdmin' && key !== 'IsLogin' && key !== 'currentUser' && key !== 'IsManager') {
            try {
                // lấy dữ liệu người dùng từ local
                const userData = JSON.parse(localStorage.getItem(key));
                //kiểm tra tính hợp lệ của dữ liệu ngươi dùng 
                if (userData && userData.username && userData.password) {
                    accounts.push(userData);
                }
            } catch (e) {
                console.error(`Không thể parse dữ liệu từ key: ${key}`); // xử lý khi lỗi parse dữ liệu
            }
        }
    }
    return accounts; // trả về danh sách tài khoản  
}

// Cấp quyền Manager cho tài khoản (Chỉ admin mới có quyền này)
function grantManager(username) {
    let account = JSON.parse(localStorage.getItem(username));
    if (account && account.role !== 'manager' && account.role !== 'admin') {
        account.role = 'manager';
        localStorage.setItem(username, JSON.stringify(account));
        alert(`Cấp quyền Manager cho ${username} thành công!`);
        location.reload(); // Tải lại trang để cập nhật
    }
}

// Xóa quyền Manager của tài khoản (Chỉ admin mới có quyền xóa quyền manager)
function removeManager(username) {
    if (username === 'admin1') {
        alert("Không thể xóa quyền Manager của tài khoản admin gốc!");
        return; // Ngừng thao tác nếu là admin gốc
    }

    let account = JSON.parse(localStorage.getItem(username));
    if (account && account.role === 'manager') {
        account.role = 'user'; // Đặt lại role thành user
        localStorage.setItem(username, JSON.stringify(account));
        alert(`Đã xóa quyền Manager của ${username}`);
        location.reload(); // Tải lại trang để cập nhật
    }
}

// Xóa tài khoản (Admin có thể xóa tất cả, Manager chỉ có thể xóa tài khoản user)
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

