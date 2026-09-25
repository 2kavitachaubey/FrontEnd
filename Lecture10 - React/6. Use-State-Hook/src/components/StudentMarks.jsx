import React, { useState } from "react";

const StudentMarks = () => {
  //   let marks = [28, 13, 78, 56, 88, 45];
  //   let grace = () => {
  //     marks = marks.map((elem) => {
  //       return elem + 5;
  //     });
  //     document.querySelectorAll("h1").forEach((item, idx) => {
  //       item.innerHTML = `Student ${idx + 1} marks = ${marks[idx]} ${marks[idx] > 32 ? "(Pass)" : "(Fail)"}`;
  //     });
  //     console.log(marks);
  //   };

  const [marks, setMarks] = useState([28, 45, 46, 57, 68, 89, 18]);
  let grace = () => {
    let newMarks = marks.map((elem) => {
      return elem > 90 ? elem : elem + 5;
    });
    console.log(newMarks);
    setMarks(newMarks);
  };
  return (
    <div>
      {marks.map((elem, idx) => {
        return (
          <h1 className="m-4 text-[25px]" key={idx}>
            Student {idx + 1} marks = {elem} {elem > 32 ? "(Pass)" : "(Fail)"}
          </h1>
        );
      })}
      <button
        className="m-4 bg-pink-500 text-white p-3 text-[20px] rounded hover:bg-pink-600"
        onClick={grace}
      >
        Give the Grace
      </button>
    </div>
  );
};

export default StudentMarks;
