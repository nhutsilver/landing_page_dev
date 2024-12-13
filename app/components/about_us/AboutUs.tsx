import React from "react";
import BigHeading from "../big_heading/BigHeading";

const AboutUs = () => {
  return (
    <div id="nav-about" className="mt-56 flex flex-col items-center px-4">
      <BigHeading label="About Us" />
      <div className="text-2xl mt-4 text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
        <p className="text-2xl mt-4 text-center leading-8">
          Chúng tôi là một đội ngũ phát triển web năng động và sáng tạo, chuyên
          tạo ra các sản phẩm web chất lượng cao, đáp ứng nhu cầu đa dạng của
          khách hàng.
        </p>
        <p className="text-2xl mt-4 text-center leading-8">
          Với sự kết hợp giữa kỹ thuật tiên tiến, thiết kế tinh tế và tư duy đổi
          mới, chúng tôi không chỉ xây dựng website mà còn mang đến giải pháp
          tối ưu, giúp khách hàng nâng cao hiệu quả kinh doanh.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
