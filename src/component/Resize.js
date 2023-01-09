import React, { useEffect, useState } from "react";
//브라우저가 바뀔때마다 크기 바뀜
function Resize() {
  console.log("리사이즈");
  const [width, setWidth] = useState(null);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    //리엑트에선 윈도우 객체를 불러오기 위해선 window 객체를 작성해야 함
  }, []);
  useEffect(() => {
    console.log(width);
  }, [width]);
  return <></>;
}

export default Resize;
