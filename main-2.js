// Truy xuất phần tử bằng Selector của CSS

/*
    Yêu cầu: Phải nắm rõ phần Selector của CSS
        #demo{}
        .classDemo{}
        Attribute Selector
    
        Có thể sử dụng cách này để thay thế cho việc truy xuất trong file main.js
            - getElementById
            - getElementsByClassName
            - getElementsByTagName

            - QuerySelector("#demo") ==> Trả về cho mình một phần tử đầu tiên tìm thấy mà match(Phù hợp) với Selector
            - QuerySelectorAll(".demo") ==> Trả về cho mình nhiều phần tử match với selector truyền vào => Không phải
            array. Muốn ép kiểu về array giống file(main.js) trước Array.from()
*/
var demoId = document.querySelector("#demo");
console.log(demoId);

console.log(document.querySelector(".demo"));

var demoClass = document.querySelectorAll(".demo");
console.log(demoClass);

var demoClassArray = Array.from(demoClass);
console.log(demoClassArray);
// demoClassArray.push("123");
// console.log(demoClassArray);
