var img =
  "https://duhocthanhcong.vn/wp-content/uploads/school-photos/IMG%20Academy/IMG-Academy-Album1.jpg";
var image = document.querySelector(".image");

// Thay đổi thuộc tính có sẵn. Get- Lấy dữ liệu, lấy thông tin, Set - Thiết lập dữ liệu mới, thiết lập thông tin mới

// Set

image.setAttribute("src", img);
image.setAttribute("alt", "This is a image");
image.setAttribute("width", 300);
image.setAttribute("title", "Tiêu đề của hình ảnh");

// Get
var elDataTitle = Array.from(document.querySelectorAll("[data-title]"));

var temp ='';
for (var index = 0; index < elDataTitle.length; index++) {
    temp = temp + elDataTitle[index].getAttribute("data-title") + ' ';
  
}
console.log("temp = ", temp);// bị dư một khoảng trắng cuối cùng

// Khi set giá trị data-title mới cho #demo => trim()
document.getElementById("demo").setAttribute("data-title", temp.trim())

console.log(elDataTitle);
/*
Code trong Javascript sẽ có 2 trường hợp được thực thi
1. Chạy ngay từ đầu khi load lại trang
2. Chạy ngay khi nhận 1 tương tác t ừ người dùng(Nhấn chuột click,rê chuột)
*/