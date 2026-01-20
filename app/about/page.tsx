import React from "react";
import { Itim } from "next/font/google";

const itim = Itim({
  subsets: ["latin"],
  weight: ["400"],
});

export default function About() {
  return (
    <>
      <div>
        <h1 className="text-4xl  text-center mt-20 ">
          About Page
        </h1>
        <h1 className={`text-3xl  text-center mt-10 ${itim.className}`}>
          ยินดีต้อนรับสู่หน้าข้อมูลเกี่ยวกับเรา!
        </h1>
        <hr className="my-8 border-t-2 border-gray-300" />
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia
          tenetur ipsam amet? Delectus, possimus optio dicta ab omnis vel
          impedit dolorum beatae qui eligendi doloribus id deserunt eaque
          cumque?
        </p>
      </div>
    </>
  );
}
