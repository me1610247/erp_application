import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Text, Heading, Button } from "../../components";
export default function LoginPage() {
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5295/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userName: userName,
          password: password
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      const token = data.token; // Assuming the token is in the data.token

      // Store the token in local storage
      localStorage.setItem("jwtToken", token);

      console.log("Login successful");
      window.location.href = '/UserReg';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>User Login - Access Your Account</title>
        <meta
          name="description"
          content="Welcome to our application. Please log in with your email and password to continue using our services. Secure and user-friendly access."
        />
      </Helmet>

      <div className="flex w-full flex-col items-center justify-center bg-gradient1 pb-[29px] pt-[200px] md:pt-5 sm:py-5">
        <div className="container-xs flex flex-col items-center gap-12 pl-[304px] pr-[306px] md:p-5 md:px-5">
          <div className="flex flex-col items-start self-stretch rounded-[50px] bg-white-A700 pb-[51px] pl-[122px] pr-14 pt-[31px] md:px-5 md:pb-5 sm:p-5">
            <Img
              src="images/img_business_manage.png"
              alt="business image"
              className="ml-[22px] h-[169px] w-[81%] object-cover md:ml-0"
            />
            <Heading size="md" as="h1" className="self-center ml-[-90px] bg-gradient2 bg-clip-text !text-transparent">
              <span className="bg-gradient2 bg-clip-text text-transparent">&nbsp; &nbsp;</span>
              <span className="bg-gradient2 bg-clip-text font-normal text-transparent">أهْــلاً بِــك</span>
            </Heading>
            <Text size="s" as="p" className="mt-[11px] ml-[-60px] self-center !text-blue_gray-400">
              يرجى تسجيل الدخول لمواصلة استخدام التطبيق
            </Text>
            <input
              color="gray_300_5b"
              size="xs"
              name="Email Input"
              placeholder='بريد إلكتروني'
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              className="mt-10 w-[87%] gap-[9px] rounded-[20px] sm:pl-5"
            />  
            <input
              color="gray_300_5b"
              size="xs"
              type="password"
              name="Password Input"
              placeholder='كلمة المرور'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-[33px] w-[86%] gap-[17px] rounded-[20px]"
            />
            {error && <Text size="xs" as="p" className="text-red-500">{error}</Text>}
            <Button
              color="teal_500"
              shape="round"
              className="ml-[68px] mt-[47px] min-w-[202px] font-bold md:ml-0 sm:px-5"
              onClick={handleLogin}
            >
              تسجيل دخول
            </Button>
          </div>

          <div className="flex w-[31%] flex-col items-center gap-2 md:w-full">
            <Text size="xs" as="p">
              Powered by
            </Text>
            <Img
              src="images/img_whatsapp_image.png"
              alt="whatsapp image"
              className="h-[93px] w-full object-cover md:h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
