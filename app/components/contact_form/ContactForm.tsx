"use client";
import React from "react";
import BigHeading from "../big_heading/BigHeading";
import Button from "../button/Button";
import Image from "next/image";
import Link from "next/link";
import IconFb from "../../../public/images/facebook.png";
import IconZalo from "../../../public/images/zalo.webp";
import IconEmail from "../../../public/images/email.png";

const ContactForm = () => {
  const handleContactForm = () => {};
  return (
    <div
      id="nav-contact"
      className="mt-56 flex flex-col justify-center items-center w-full px-6"
    >
      <BigHeading label="Contact us" />
      <p className="text-2xl mt-4 text-center">
        Liên hệ ngay với chúng tôi qua các kênh bên dưới
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center w-full mt-10 gap-10">
        {/* Contact Form */}
        <form className="w-full md:w-[40%] border border-zinc-400 p-6 rounded-lg">
          <div className="mb-4 w-full">
            <label
              htmlFor="name"
              className="block text-gray-700 text-xl font-medium mb-2"
            >
              Tên của bạn
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Nhập tên của bạn"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="email"
              className="block text-gray-700 text-xl font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Nhập email của bạn"
            />
          </div>
          <div className="mb-4 w-full">
            <label
              htmlFor="message"
              className="block text-gray-700 text-xl font-medium mb-2"
            >
              Tin nhắn
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              rows={4}
              placeholder="Nhập tin nhắn của bạn"
            ></textarea>
          </div>
          <Button
            className="w-full"
            label="Gửi"
            onClick={handleContactForm}
            type="submit"
          />
        </form>

        {/* Contact Links */}
        <ul className="w-full md:w-[40%] flex flex-col justify-start mt-8 md:mt-0">
          <li className="flex items-center mb-6 md:mb-4">
            <Link className="flex items-center" href={""}>
              <Image
                className="w-12 h-12 rounded-full mr-4"
                src={IconFb}
                alt="Fb"
              />
              <p>Facebook: facebook.com</p>
            </Link>
          </li>
          <li className="flex items-center mb-6 md:mb-4">
            <Link className="flex items-center" href={""}>
              <Image
                className="w-12 h-12 rounded-full mr-4"
                src={IconZalo}
                alt="zalo"
              />
              <p>Zalo: 012345678</p>
            </Link>
          </li>
          <li className="flex items-center">
            <Link className="flex items-center" href={""}>
              <Image
                className="w-12 h-12 rounded-full mr-4"
                src={IconEmail}
                alt="email"
              />
              <p>Email: wedev-team@gmail.com</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
