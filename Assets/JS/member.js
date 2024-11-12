let member = {
    data: [
      { Image: "./img/thanh.jpg", title: "Bộ môn Tin Học", name: "Lê Quang Thành" },
      { Image: "./img/thanh.jpg", title: "Bộ môn Tin Học", name: "Lê Quang Thành" },
      { Image: "./img/thanh.jpg", title: "Bộ môn Tin Học", name: "Lê Quang Thành" },
      { Image: "./img/thanh.jpg", title: "Bộ môn Tin Học", name: "Lê Quang Thành" },
      { Image: "./img/Admin_Thành.jpg", title: "Bộ môn Tin Học", name: "Lê Quang Thành" },
      { Image: "./img/thanh.jpg", title: "Bộ môn Tin Học", name: "Lê Quang Thành" },
      { Image: "./img/thanh.jpg", title: "Bộ môn Tin Học", name: "Lê Quang Thành" },
      { Image: "./img/thanh.jpg", title: "Bộ môn Tin Học", name: "Lê Quang Thành" },
      { Image: "./img/thanh.jpg", title: "Bộ môn Tin Học", name: "Lê Quang Thành" },
      { Image: "./img/thanh.jpg", title: "Bộ môn Tin Học", name: "Lê Quang Thành" },
      { Image: "./img/thanh.jpg", title: "Bộ môn Tin Học", name: "Lê Quang Thành" },
      { Image: "./img/thanh.jpg", title: "Bộ môn Tin Học", name: "Lê Quang Thành" },
    ],
  };
  
  for (let i of member.data){
      let cardMember = document.createElement("div");
      cardMember.classList.add("cardMember");
  
      let imgmember = document.createElement("div");
      imgmember.classList.add("img-member");
  
      let Image = document.createElement("img");
      Image.setAttribute("src", i.Image);
      imgmember.appendChild(Image);
      cardMember.appendChild(imgmember);
  
      let container_member = document.createElement("div");
      container_member.classList.add("container_member");
  
      let title = document.createElement("h4");
      title.classList.add("member-title");
      title.innerText = i.title.toUpperCase();
      container_member.appendChild(title);
  
      let name = document.createElement("h5");
      name.classList.add("member-name");
      name.innerText = i.name;
      container_member.appendChild(name);
  
      cardMember.appendChild(container_member);
      document.getElementById("member").appendChild(cardMember);
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const memberContainer = document.querySelector("#member");
    const btnLeft = document.querySelector(".btn-left-member");
    const btnRight = document.querySelector(".btn-right-member");
  
    // Giả định rằng các phần tử luôn tồn tại
    let handlechangeDimensions = memberContainer.getBoundingClientRect();
    let handlechangeWidth = handlechangeDimensions.width;
  
    btnRight.addEventListener('click', () => {
      memberContainer.scrollLeft += handlechangeWidth;
    });
  
    btnLeft.addEventListener('click', () => {
      memberContainer.scrollLeft -= handlechangeWidth;
    });
  });
  
  