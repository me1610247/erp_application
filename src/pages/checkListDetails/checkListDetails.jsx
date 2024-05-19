import React from "react";
import Header from "components/Header";
import { Helmet } from "react-helmet";
import { Text, Heading, Button } from "components";

import './card.css';

export default function ChecklistDetails() {
  return (
    <>
      <Helmet>
        <title>Checklist History - Track Your Progress</title>
        <meta
          name="description"
          content="Review the history of your checklists. Stay informed about employee tasks, organizational updates, and client interactions."
        />
      </Helmet>
      <div className="flex flex-col items-center gap-10 bg-white-A700 p-5">
        {/* header section */}
        <Header />
        <div className="container card mx-auto p-5">
          {/* checklist section */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col items-center gap-5 rounded-2xl bg-green-500 bg-opacity-60 p-8 sm:p-5 transition transform hover:scale-105 cursor-pointer custom-card">
                <div className="flex w-full flex-row justify-around">
                  <Text as="p" className="text-lg font-bold text-black">
                    اسم الموظف: <span className="font-normal">سيف محمد</span>
                  </Text>
                  <Text as="p" className="text-lg font-bold text-black">
                    اسم المؤسسة: <span className="font-normal">تايجر</span>
                  </Text>
                  <Text as="p" className="text-lg font-bold text-black">
                    اسم العميل: <span className="font-normal">عمر عصام</span>
                  </Text>
                </div>
                <div className="flex w-full flex-row justify-around">
                  <Text as="p" className="text-lg font-bold text-black">
                    كود القائمة: <span className="font-normal">٤٦</span>
                  </Text>
                  <Text as="p" className="text-lg font-bold text-black">
                    كود الموظف: <span className="font-normal">١٢</span>
                  </Text>
                  <Text as="p" className="text-lg font-bold text-black">
                    كود المؤسسة: <span className="font-normal">٢٠٢٣</span>
                  </Text>
                </div>
                <Button color="yellow_800" shape="round" className="w-full font-medium sm:px-5 mt-5">
                  افتح ملف قائمة المراجعة
                </Button> 
              </div>
              
              <div className="flex flex-row justify-between gap-6">
                <div className="flex flex-col items-center gap-5 rounded-2xl bg-opacity-60 p-8 sm:p-5 custom-card2">
                  <Text as="p" className="text-lg font-bold text-black">
                    ملاحظة
                  </Text>
                  <textarea cols="30" rows="5" className="w-full p-3 rounded-lg border border-gray-300 focus:border-indigo-500" placeholder=" هذه ملاحظة لوضعها في قائمة المراجعة من التفاصيل في النموذج الاولي الخاص بنا لهذا التطبيق"></textarea>
                </div>
                <div className="flex flex-col items-center gap-5 rounded-2xl bg-white-500 bg-opacity-60 p-8 sm:p-5 custom-card2">
                  <Text as="p" className="text-lg font-bold text-white">السؤال الاول</Text>
                  <Text as="p" className="text-lg font-medium text-white text-center">هل حصل الموظفون الجدد علي جميع الاوراق اللازمة و أكملهوها بدقة ؟ </Text>
                  <input type="checkbox" />
                  <div className="flex flex-col gap-3">
                    <label htmlFor="audioFile" className="text-white">ملف صوتي:</label>
                    <input id="audioFile" type="file" accept="audio/*" />
                    <label htmlFor="imageFile" className="text-white">ملف صورة:</label>
                    <input id="imageFile" type="file" accept="image/*" />
                  </div>
                </div>
              </div>
              <Button shape="round" className="w-full font-medium sm:px-5 mt-5">
                ارسال
              </Button> 
            </div>        
          </div>
        </div>
      </div>
    </>
  );
}
