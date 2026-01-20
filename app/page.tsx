import Image from "next/image";
import img01 from "./../assets/images/img01.png";
import img02 from "./../assets/images/img02.png";
import img03 from "./../assets/images/img03.png";


export default function Page() {
  return (
    <>
      <div>
        <h1 className="text-4xl text-center mt-20">
          Welcome to IOT SAU 2026!
        </h1>
        <hr className="my-8 border-t-2 border-gray-300" />
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia
          tenetur ipsam amet? Delectus, possimus optio dicta ab omnis vel
          impedit dolorum beatae qui eligendi doloribus id deserunt eaque
          cumque?
        </p>
        <hr className="mt-5"/>
        <Image src="/img04.png" alt="img01" width={150} height={150} className="inline mx-5 mt-5"/>
        <Image src="/img05.png" alt="img02" width={150} height={150} className="inline mx-5 mt-5"/>
        <Image src={img01} alt="img03" width={150} height={150} className="inline mx-5 mt-5"/>
        <Image src={img02} alt="img04" width={150} height={150} className="inline mx-5 mt-5"/>
        <Image src={img03} alt="img05" width={150} height={150} className="inline mx-5 mt-5"/>
      </div>
    </>
  );
}
