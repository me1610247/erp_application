import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input } from "../../components";
import Header from "../../components/Header";
import UserRegPicknumber from "../../components/UserRegPicknumber";
import UserRegPickRole from "components/UserRegPickRole";

export default function UserRegPage() {
  return (
    <>
      <Helmet>
        <title>User Details - Complete Your Registration</title>
        <meta
          name="description"
          content="Complete the user registration process by providing personal and institutional details. Ensure user status, contact information, and secure password setup."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[55px] bg-white-A700 pb-9 sm:gap-[27px] sm:pb-5">
        {/* header section */}
        <Header />
        {/* user registration section */}
        <div className="container-xs pl-[101px] pr-[103px] md:p-5 md:px-5">
          <div className="flex flex-col items-center">
            <div className="mr-[74px] flex w-[86%] flex-wrap justify-between gap-5 self-end md:mr-0 md:w-full">
              <Text size="lg" as="p">
                كم مستخدم لإضافته؟
              </Text>
              <Text size="lg" as="p">
                اختر نوع المستخدم لإضافته
              </Text>
            </div>
            <div className="flex w-[89%] justify-between gap-5 md:w-full md:flex-col">
              <UserRegPicknumber />
              <UserRegPickRole />
           </div>
            {/* user details section */}
            <div className="mt-[141px] flex w-full rounded-[30px] border-4 border-solid border-black-900 pt-[23px] sm:pt-5">
              <div className="flex w-[91%] flex-col items-end md:w-full">
                <div className="flex w-[90%] items-center gap-[47px] md:w-full md:flex-col">
                  <div className="flex w-full flex-col items-end">
                    <Text size="lg" as="p" className="mr-5 md:mr-0">
                      الرقم القومي
                    </Text>
                    <Input
                      shape="round"
                      name="National ID Input"
                      className="teal_500_yellow_900_border self-stretch border-[3px] border-solid"
                    />
                  </div>
                  <div className="flex w-full flex-col items-end gap-0.5">
                    <Text size="lg" as="p" className="mr-7 md:mr-0">
                      اسم المستخدم
                    </Text>
                    <Input
                      shape="round"
                      name="Username Input"
                      className="teal_500_yellow_900_border self-stretch border-[3px] border-solid"
                    />
                  </div>
                </div>
                <div className="mr-[23px] mt-[19px] flex w-[70%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
                  <Text size="lg" as="p">
                    حالة المستخدم
                  </Text>
                  <Text size="lg" as="p">
                    رقم الهاتف
                  </Text>
                </div>
                <div className="flex w-[90%] gap-[47px] md:w-full md:flex-col">
                  <Input
                    shape="round"
                    name="User Status Input"
                    className="teal_500_yellow_900_border w-full border-[3px] border-solid"
                  />
                  <Input
                    shape="round"
                    name="Phone Input"
                    className="teal_500_yellow_900_border w-full border-[3px] border-solid"
                  />
                </div>
                <div className="mr-[19px] mt-[18px] flex w-[80%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
                  <Text size="lg" as="p">
                    كلمة المرور للمستخدم
                  </Text>
                  <Text size="lg" as="p">
                    البريد الإلكتروني للمستخدم
                  </Text>
                </div>
                <div className="flex w-[90%] gap-[47px] md:w-full md:flex-col">
                  <Input
                    shape="round"
                    name="Password Input"
                    className="teal_500_yellow_900_border w-full border-[3px] border-solid"
                  />
                  <Input
                    shape="round"
                    name="Email Input"
                    className="teal_500_yellow_900_border w-full border-[3px] border-solid"
                  />
                </div>
                <div className="mr-[19px] mt-[18px] flex w-[80%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
                  <Text size="lg" as="p">
                     كود المؤسسة                 
                  </Text>
                  <Text size="lg" as="p">
                     اسم المؤسسة
                  </Text>
                </div>
                <div className="flex w-[90%] gap-[47px] md:w-full md:flex-col">
                  <Input
                    shape="round"
                    name="Password Input"
                    className="teal_500_yellow_900_border w-full border-[3px] border-solid"
                  />
                  <Input
                    shape="round"
                    name="Email Input"
                    className="teal_500_yellow_900_border w-full border-[3px] border-solid"
                  />
                </div>
                <div className="mr-[19px] mt-[18px] flex w-[80%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
                  <Text size="lg" as="p">
                    كود مشرف المؤسسة
                  </Text>
                  <Text size="lg" as="p">
                    كود مستخدم الاعمال
                  </Text>
                </div>
                <div className="flex w-[90%] gap-[47px] md:w-full md:flex-col">
                  <Input
                    shape="round"
                    name="Password Input"
                    className="teal_500_yellow_900_border w-full border-[3px] border-solid"
                  />
                  <Input
                    shape="round"
                    name="Email Input"
                    className="teal_500_yellow_900_border w-full border-[3px] border-solid"
                  />
                </div>
                <div className="mr-[19px] mt-[18px] flex w-[80%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
                  <Text size="lg" as="p">
                    كود الصلاحية
                  </Text>
                  <Input
                    shape="round"
                    
                    className="teal_500_yellow_900_border w-full border-[3px] border-solid"
                  />
                  </div>
              </div>
            </div>

            {/* registration button section */}
            <Button shape="round" className="mt-[68px] min-w-[272px] font-medium sm:px-5">
              تسجيل
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
