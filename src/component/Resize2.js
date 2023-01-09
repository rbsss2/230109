import React, { useEffect, useRef } from "react";

function Resize2() {
  console.log("리사이즈");
  const width = useRef(null);
  //dom에 직접 접근
  //브라우저를 재 호출하지 않음

  useEffect(() => {
    window.addEventListener("resize", () => {
      width.current = window.innerWidth;
      console.log(width.current);
    });
  }, []);
  return <div></div>;
}

export default Resize2;
