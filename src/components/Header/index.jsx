import React, { useState } from "react";
import { Text, Heading } from "./..";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

export default function Header({ ...props }) {
  const location = useLocation();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogoutClick = () => {
    setShowConfirmation(true);
  };

  const confirmLogout = () => {
    // Perform logout action here
    console.log("User confirmed logout");
    setShowConfirmation(false);
  };

  const cancelLogout = () => {
    setShowConfirmation(false);
    console.log("User canceled logout");
  };

  return (
    <header
      {...props}
      className={`${props.className} self-stretch justify-center items-center pt-10 pb-[17px] sm:py-5 bg-gradient rounded-[47px]`}
    >
      <div className="container-xs flex justify-center gap-1.5 md:flex-col md:p-5">
        <div className="flex flex-1 justify-center gap-2 md:flex-col md:self-stretch">
          <Link
            to="/logout"
            onClick={handleLogoutClick}
            className={`text-link ${
              location.pathname === "/logout" ? "active" : ""
            }`}
          >
            <Text size="lg" as="p">
              تسجيل خروج
            </Text>
          </Link>
          <div className="relative z-[2] flex pb-[7px]">
            <Link
              to="/new-organization"
              className={`text-link ${
                location.pathname === "/new-organization" ? "active" : ""
              }`}
            >
              <Text size="lg" as="p">
                مؤسسة جديدة
              </Text>
            </Link>
          </div>
          <div>
            <Link
              to="/new-user"
              className={`text-link ${
                location.pathname === "/new-user" ? "active" : ""
              }`}
            >
              <Text size="lg" as="p">
                مستخدم جديد
              </Text>
            </Link>
          </div>
          <Link
            to="/add-review-list"
            className={`text-link ${
              location.pathname === "/add-review-list" ? "active" : ""
            }`}
          >
            <Text size="lg" as="p">
              إضافة قائمة مراجعة
            </Text>
          </Link>

          <Link
            to="/list-dates"
            className={`text-link ${
              location.pathname === "/list-dates" ? "active" : ""
            }`}
          >
            <Text size="lg" as="p">
              تاريخ القوائم
            </Text>
          </Link>
        </div>
      </div>

      {/* Confirmation modal */}
      {showConfirmation && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg">
            <p className="text-lg mb-4">هل أنت متأكد أنك تريد تسجيل الخروج؟</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                تأكيد
              </button>
              <button
                onClick={cancelLogout}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
