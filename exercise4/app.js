//nối các phần tử với nhau vào một chuỗi cách nhau bởi dấu phẩy
var mang = ["Học", "lập", "trình", "tại", "đây"];
console.log(mang.valueOf());
//xóa hai phần tử từ vị trí 1 trong mảng và thêm vào mảng tại vị trí đó là (PHP,cơ bản)
mang.splice(1, 2, 'PHP', 'cơ bản ');
console.log(mang.valueOf());
//tạo mảng array ngẫu nhiên
var array = ["A",4,"D","B","L",1,6,2,5];
//Đảo ngược vị trí của các phần tử (vị trí đầu xuống cuối, vị trí cuối lên đầu mảng)
array.reverse();
console.log(array.valueOf());
//sắp xếp lại mảng
array.sort();
console.log(array.valueOf());
/* Tạo mảng Staff 
*/
var staff = [
    {name: "Long",age:21,address: "Hoa Phu"},
    {name: "Phuoc",age:22,address: "Hoa Phu"},
    {name: "Quynh",age:18,address: "Hoa Phuoc"}
]
console.log(staff);
// Thêm nhân viên vào cuối trong mảng
staff.push({name: "Thanh",age:23,address:"Hoa Phong"});
console.log(staff);
// Thêm nhân viên vào đầu trong mảng
staff.unshift({name: "Thuan",age:19,address:"Hoa Chau"});
console.log(staff);

// Lấy nhân viên đầu mảng
console.log(staff.shift());
console.log(staff);

// Lấy nhân viên cuối mảng
console.log(staff.pop());
console.log(staff);
//lấy hobbies trong mảng
console.log(staff.hobbies);
//thay đổi địa chỉ Hoa Phuoc
staff.address = 'Hoa Phu';
console.log(staff[2]);

//tạo một mảng vlog
var vlog = ['thay', 'ba', 'ngau','khong'];
console.log(vlog);
//in ra phần tử thứ 3 trong mảng vlog
console.log(vlog[3]);
//thay đổi mảng vlog
vlog[0] = 'long';
console.log(vlog);
//gán vị trí trong mảng
const[a,c] = vlog;
console.log(a);
console.log(c);