import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text } from "../../components";
import Header from "../../components/Header";
import UserRegPicknumber from "components/UserRegPicknumber";
import UserRegPickRole from "components/UserRegPickRole";

export default function UsersRegOnePage() {
  return (
    <>
      <Helmet>
        <title>User Registration - Efficient Onboarding Process</title>
        <meta
          name="description"
          content="Join our platform with ease. Register as a new user or establish a new organization. Add multiple users with our bulk upload feature."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[55px] bg-white-A700 pb-9 sm:gap-[27px] sm:pb-5">
        {/* top navigation section */}
        <Header />

        {/* user registration form section */}
        <div className="container-xs pl-[101px] pr-[103px] md:p-5 md:px-5">
          <div className="flex flex-col items-center">
            <div className="flex w-[89%] justify-between gap-5 md:w-full md:flex-col">
              <div className="flex w-[41%] flex-col items-end gap-1 md:w-full">
                <Text size="lg" as="p" className="mr-5 md:mr-0">
                  كم مستخدم لإضافته؟
                </Text>
                <div className="flex flex-col items-end self-stretch">
                 <UserRegPicknumber/>
                </div>
              </div>
              <div className="flex w-[41%] flex-col items-center gap-1 md:w-full">
                <Text size="lg" as="p">
                  اختر نوع المستخدم لإضافته
                </Text>
                 <UserRegPickRole/>
               
              </div>
            </div>
            <div className="mt-[141px] flex justify-center self-stretch rounded-[30px] border-4 border-solid border-black-900 px-14 py-[178px] md:p-5">
              <Button type="file" color="yellow_800" size="md" className="min-w-[437px] rounded-[40px] font-medium sm:px-5">
                رفع ملف المستخدمين
              </Button>
            </div>
            <Button shape="round" className="mt-[68px] min-w-[272px] font-medium sm:px-5">
              تسجيل
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
