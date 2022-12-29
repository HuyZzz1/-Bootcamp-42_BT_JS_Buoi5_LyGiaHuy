// BT1: Cho biết thí sinh đậu hay rớt và tổng số điểm đạt được
document.getElementById("ex1").onclick = function () {
  //Inpit: điểm chuẩn, điểm 3 môn thi, điểm khu vực và điểm đối tượng
  let standardGrade = +document.getElementById("txtStandardGrade").value;
  let subject1 = +document.getElementById("txtSubject1").value;
  let subject2 = +document.getElementById("txtSubject2").value;
  let subject3 = +document.getElementById("txtSubject3").value;
  let areaGrade = +document.getElementById("area").value;
  let typeGrade = +document.getElementById("type").value;

  //Output: tính tổng điểm, kết quả
  let totalGrade = subject1 + subject2 + subject3 + areaGrade + typeGrade;

  if (subject1 <= 0 || subject2 <= 0 || subject3 <= 0) {
    document.getElementById(
      "message"
    ).innerHTML = `Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0`;
  } else if (
    totalGrade >= standardGrade &&
    subject1 > 0 &&
    subject2 > 0 &&
    subject3 > 0
  ) {
    document.getElementById(
      "message"
    ).innerHTML = `Bạn đã đậu. Tổng điểm: ${totalGrade}`;
  } else {
    document.getElementById(
      "message"
    ).innerHTML = `Bạn đã rớt. Tổng điểm: ${totalGrade}`;
  }
};

//BT2: Tính tiền điện
document.getElementById("ex2").onclick = function () {
  //Input: tên và số kW
  let name = document.getElementById("name").value;
  let quantity = +document.getElementById("quantity").value;
  let total = 0;

  //Output: tính và xuất tiền điện phải trả
  const LEVEL_1 = 500;
  const LEVEL_2 = 650;
  const LEVEL_3 = 850;
  const LEVEL_4 = 1100;
  const LEVEL_5 = 1300;

  if (quantity <= 0) {
    return (document.getElementById(
      "message_2"
    ).innerHTML = `Số kw không hợp lệ! Vui lòng nhập lại`);
  } else if (quantity <= 50) {
    total = quantity * LEVEL_1;
  } else if (quantity <= 100) {
    total = 50 * LEVEL_1 + (quantity - 50) * LEVEL_2;
  } else if (quantity <= 200) {
    total = 50 * LEVEL_1 + 50 * LEVEL_2 + (quantity - 100) * LEVEL_3;
  } else if (quantity <= 350) {
    total =
      50 * LEVEL_1 + 50 * LEVEL_2 + 100 * LEVEL_3 + (quantity - 200) * LEVEL_4;
  } else {
    total =
      50 * LEVEL_1 +
      50 * LEVEL_2 +
      100 * LEVEL_3 +
      150 * LEVEL_4 +
      (quantity - 350) * LEVEL_5;
  }

  document.getElementById(
    "message_2"
  ).innerHTML = `Họ tên: ${name}, Tiền điện: ${total.toLocaleString()} VND`;
};
