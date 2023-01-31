/*
- Thay đổi class(Thêm và Xóa)
- Thay đổi Attribute(Sửa)
- Thêm mới một Attribute cho một phần tử
- Bắt được sự kiện click chuột của người dùng
- Thêm một phần tử gắn vào trong cấu trúc HTML
.......
.......
==> Làm hiệu ứng động cho phần tử đó.

** Phải xác định được mình áp dụng công việc trên cho phần tử nào?
1. Học cách truy xuất phần từ bằng Javascript
    - Truy xuất bằng id của phần tử => HTMLElement => Một phần tử HTML
    - Truy xuất bằng class của phần tử => HTMLCollectionOf => Tập hợp nhiều phần tử HTML
        Lưu ý: HTMLCollectionOf không phải là Array. Nó chỉ gần giống với một dạng Array. Có length. Có thể truy xuất
               vào phần tử bằng index
               Nếu muốn sử dụng những method, những function giành riêng cho Array thì mình phải "ép kiểu" nó về Array
               ==> Dùng cú pháp: Array.from(HTMLCollectionOf)
    - Truy xuất bằng tên thẻ a, body, ...
    - Truy xuất bằng selector của CSS
*/

var demoId = document.getElementById("demo")
console.log(demoId);

var arrNumber =[1,2,3,4]
var demoClass = document.getElementsByClassName("demo")
console.log(demoClass)
var demoClassArray = Array.from(demoClass)
console.log(demoClassArray)
demoClassArray.push("123");

for(var index = 0 ; index < demoClass.length; index++){
    console.log("Phần tử thứ", index, "là" , demoClassArray)
}