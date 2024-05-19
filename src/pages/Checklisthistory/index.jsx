import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Text } from "../../components";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
export default function ChecklisthistoryPage() {

  return (
    <>
      <Helmet>
        <title>Checklist History - Track Your Progress</title>
        <meta
          name="description"
          content="Review the history of your checklists. Stay informed about employee tasks, organizational updates, and client interactions."
        />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[74px] bg-white-A700 md:gap-[55px] sm:gap-[37px]">
        {/* header section */}
        <Header />
        <div className="container-xs md:p-5">
          {/* checklist section */}
          <div className="flex flex-col gap-[23px]">
            <div className="grid flex-1 grid-cols-2 justify-center gap-[17px] md:grid-cols-1">
           <Link
  to={{
    pathname: "/details",
    state: {
      employeeName: "سيف محمد",
      companyName: "تايجر",
      customerName: "عمر عصام",
      menuCode: "٤٦",
    }
  }}
>
  <div className="flex w-full flex-col items-center gap-5 rounded-[30px] bg-green-500_60 px-8 pb-[17px] pt-8 sm:px-5 sm:pt-5 hover:shadow-lg cursor-pointer">
    <Text as="p">
      <span className="font-semibold text-black-900">اسم الموظف:</span>
      <span className="text-black-900">
        <>
          &nbsp;سيف محمد <br />
        </>
      </span>
    </Text>
    <Heading as="h4">
      <span className="text-black-900">اسم المؤسسة: &nbsp;</span>
      <span className="font-normal text-black-900">تايجر</span>
    </Heading>
    <Text as="p">اسم العميل: عمر عصام</Text>
    <Text as="p">
      <span className="font-semibold text-black-900">كود القائمة:&nbsp;</span>
      <span className="text-black-900">٤٦</span>
      <span className="text-black-900">&nbsp;</span>
    </Text>
    <Heading as="h5">٢٠٢٣/١٢/١٢</Heading>
  </div>
</Link>
    <Link to="/details"> {/* Replace '/another-page' with the actual route you want to navigate to */}
      <div className="flex w-full flex-col items-center gap-5 rounded-[30px] bg-green-500_60 px-8 pb-[17px] pt-8 sm:px-5 sm:pt-5 hover:shadow-lg cursor-pointer"> {/* Added hover and cursor classes for better UX */}
        <Text as="p">
          <span className="font-semibold text-black-900">اسم الموظف:</span>
          <span className="text-black-900">
            <>
              &nbsp;محمد حازم <br />
            </>
          </span>
        </Text>
        <Heading as="h4">
          <span className="text-black-900">اسم المؤسسة: &nbsp;</span>
          <span className="font-normal text-black-900">اندومى</span>
        </Heading>
        <Text as="p">اسم العميل: على احمد</Text>
        <Text as="p">
          <span className="font-semibold text-black-900">كود القائمة:&nbsp;</span>
          <span className="text-black-900">٤٦</span>
          <span className="text-black-900">&nbsp;</span>
        </Text>
        <Heading as="h5">٢٠٢٣/١٢/١٢</Heading>
      </div>
    </Link>
    <Link
  to={{
    pathname: "/details",
    state: {
      employeeName: "اسر احمد ",
      companyName: "فريسكا",
      customerName: "علي محمود",
      menuCode: "٤٦",
    }
  }}
>            
       <div className="flex w-full flex-col items-center gap-5 rounded-[30px] bg-green-500_60 px-8 pb-[17px] pt-8 sm:px-5 sm:pt-5">
                <Text as="p">
                  <span className="font-semibold text-black-900">اسم الموظف:</span>
                  <span className="text-black-900">
                    <>
                      &nbsp;اسر احمد <br />
                    </>
                  </span>
                </Text>
                <Heading as="h4">
                  <span className="text-black-900">اسم المؤسسة: &nbsp;</span>
                  <span className="font-normal text-black-900">فريسكا</span>
                </Heading>
                <Text as="p">اسم العميل: على محمود</Text>
                <Text as="p">
                  <span className="font-semibold text-black-900">كود القائمة:&nbsp;</span>
                  <span className="text-black-900">٤٦</span>
                  <span className="text-black-900">&nbsp;</span>
                </Text>
                <Heading as="h5">٢٠٢٣/١٢/١٢</Heading>
              </div>
              </Link>
              <Link to="/details">
              <div className="flex w-full flex-col items-center gap-5 rounded-[30px] bg-green-500_60 px-8 pb-[17px] pt-8 sm:px-5 sm:pt-5">
                <Text as="p">
                  <span className="font-semibold text-black-900">اسم الموظف:</span>
                  <span className="text-black-900">
                    <>
                      &nbsp;عمرو عادل <br />
                    </>
                  </span>
                </Text>
                <Heading as="h4">
                  <span className="text-black-900">اسم المؤسسة: &nbsp;</span>
                  <span className="font-normal text-black-900">ستار</span>
                </Heading>
                <Text as="p">اسم العميل: عامر محمد</Text>
                <Text as="p">
                  <span className="font-semibold text-black-900">كود القائمة:&nbsp;</span>
                  <span className="text-black-900">٤٦</span>
                  <span className="text-black-900">&nbsp;</span>
                </Text>
                <Heading as="h5">٢٠٢٣/١٢/١٢</Heading>
              </div>
              </Link>
              <Link to="/details">
              <div className="flex w-full flex-col items-center gap-5 rounded-[30px] bg-green-500_60 px-8 pb-[17px] pt-8 sm:px-5 sm:pt-5">
                <Text as="p">
                  <span className="font-semibold text-black-900">اسم الموظف:</span>
                  <span className="text-black-900">
                    <>
                      &nbsp;امجد مصطفى  <br />
                    </>
                  </span>
                </Text>
                <Heading as="h4">
                  <span className="text-black-900">اسم المؤسسة: &nbsp;</span>
                  <span className="font-normal text-black-900">V Cola</span>
                </Heading>
                <Text as="p">اسم العميل: محمود احمد </Text>
                <Text as="p">
                  <span className="font-semibold text-black-900">كود القائمة:&nbsp;</span>
                  <span className="text-black-900">٤٦</span>
                  <span className="text-black-900">&nbsp;</span>
                </Text>
                <Heading as="h5">٢٠٢٣/١٢/١٢</Heading>
              </div>
              </Link>
              <Link to="/details">
              <div className="flex w-full flex-col items-center gap-5 rounded-[30px] bg-green-500_60 px-8 pb-[17px] pt-8 sm:px-5 sm:pt-5">
                <Text as="p">
                  <span className="font-semibold text-black-900">اسم الموظف:</span>
                  <span className="text-black-900">
                    <>
                      &nbsp;احمد محمد <br />
                    </>
                  </span>
                </Text>
                <Heading as="h4">
                  <span className="text-black-900">اسم المؤسسة: &nbsp;</span>
                  <span className="font-normal text-black-900">سبيروسباتس</span>
                </Heading>
                <Text as="p">اسم العميل: علي محمود</Text>
                <Text as="p">
                  <span className="font-semibold text-black-900">كود القائمة:&nbsp;</span>
                  <span className="text-black-900">٤٦</span>
                  <span className="text-black-900">&nbsp;</span>
                </Text>
                <Heading as="h5">٢٠٢٣/١٢/١٢</Heading>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
