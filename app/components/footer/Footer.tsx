"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/images/logo.png";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const Footer = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center w-full px-6">
      {/* Footer top */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full mt-40">
        {/* Logo */}
        <div className="mb-6 md:mb-0">
          <Image
            src={Logo}
            alt="logo footer"
            className="w-40 h-40 cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start w-full md:w-auto mt-6 md:mt-0">
          <ul className="mr-14 mb-6 md:mb-0 text-center md:text-left">
            <li className="mb-4">
              <Link href={""}>Trang chủ</Link>
            </li>
            <li className="mb-4">
              <Link href={""}>Giới thiệu</Link>
            </li>
            <li className="mb-4">
              <Link href={""}>Dịch vụ</Link>
            </li>
            <li className="mb-4">
              <Link href={""}>Liên hệ</Link>
            </li>
          </ul>

          <ul className="mr-14 mb-6 md:mb-0 text-center md:text-left">
            <li className="mb-4">
              <Link href={""}>Câu hỏi thường gặp</Link>
            </li>
            <li className="mb-4">
              <Link href={""}>Chính sách</Link>
            </li>
            <li className="mb-4">
              <Link href={""}>Điều khoản</Link>
            </li>
          </ul>

          <ul className="text-center md:text-left">
            <li className="mb-4">
              <p>
                Địa chỉ:{" "}
                <span className="font-semibold">
                  Đường số 17, Bình Trị Đông B Quận Bình Tân, TP.HCM
                </span>
              </p>
            </li>
            <li className="mb-4">
              <a href="mailto:wedev@gmail.com">
                Email: <span className="font-semibold">wedev@gmail.com</span>
              </a>
            </li>
            <li className="mb-4">
              <a className="font-semibold" href="tel:(+84) 908 823 929">
                SĐT/Zalo: <span>(+84) 908 823 929</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="flex items-center justify-center mt-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <p className="text-blue-800 font-bold">Copyright 2024 by Wedev.vn</p>{" "}
          <span className="inline-block mr-2 ml-2">-</span>
          <span className="inline-block font-sm"> Illustration by Freepik</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
