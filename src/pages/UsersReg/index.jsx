import React from "react";
import { Helmet } from "react-helmet";
import { Button, SelectBox, Text } from "../../components";
import Header from "../../components/Header";
import UserRegPicknumber from "components/UserRegPicknumber";
import UserRegPickRole from "components/UserRegPickRole";



export default function UsersRegPage() {
  return (
    <>
     

      {/* registration page section */}
      <div className="flex w-full flex-col items-center gap-[55px] bg-white-A700 pb-9 sm:gap-[27px] sm:pb-5">
        {/* navigation header section */}
        <Header />

        {/* user registration form section */}
        <div className="container-xs pl-[101px] pr-[103px] md:p-5 md:px-5">
          <div className="flex flex-col items-center gap-[141px] md:gap-[105px] sm:gap-[70px]">
            {/* user details section */}
            <div className="flex w-[89%] flex-col items-end gap-1 md:w-full">
              <div className="mr-[17px] flex w-[91%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
                <Text size="lg" as="p">
                  كم مستخدم لإضافته؟
                </Text>
                <Text size="lg" as="p">
                  اختر نوع المستخدم لإضافته
                </Text>
              </div>
              <div className="flex justify-between gap-5 self-stretch md:flex-col">
                <UserRegPicknumber/>
                <UserRegPickRole/>
              
              </div>
            </div>

            {/* registration action section */}
            <div className="flex flex-col items-center gap-[68px] self-stretch sm:gap-[34px]">
              <div className="h-[450px] w-full rounded-[30px] border-4 border-solid border-black-900" />
              <Button shape="round" className="min-w-[272px] font-medium sm:px-5">
                تسجيل
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
