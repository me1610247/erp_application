  import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Input } from "../../components";
import Header from "../../components/Header";
import './index.css';

export default function RevList() {
  return (
    <>
      <Helmet>
        <title>Add Review List - Track Your Progress</title>
        <meta
          name="description"
          content="Review the history of your checklists. Stay informed about employee tasks, organizational updates, and client interactions."
        />
      </Helmet>
      <div className="flex w-full  flex-col items-center gap-[74px] bg-white-A700 md:gap-[55px] sm:gap-[37px]">
        {/* header section */}
        <Header />
       
        <div className="w-full fullDiv max-w-4xl">
        <Button color="yellow_800" shape="round" className="mt-[68px] min-w-[272px]  font-medium sm:px-5">
        رفع ملف القائمة
      </Button>
      <br />
        <div className="w-full max-w-[70%] mx-auto">
          <table className="min-w-full border-collapse border border-gray-200 bodyOftable overflow-hidden">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 body font-bold">اذن تسجيل صوتي</th>
                <th className="border border-gray-300 px-4 py-2 body font-bold">اذن التصوير</th>
                <th className="border border-gray-300 px-4 py-2 body font-bold">السؤال</th>
                <th className="border border-gray-300 px-4 py-2 body font-bold">م</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample row */}
              <tr>
                <td className="bordr border-dark-300 px-4 py-2 text-center">
                  <Input type="checkbox" />
                </td>
                <td className="border border-dark-300 px-4 py-2 text-center">
                  <Input type="checkbox"  />
                </td>
                <td className="border border-gray-300 body2 px-4 py-2">هل حصل الموظفون الجدد علي جميع الاوراق اللازمة و اكملوها بدقة ؟</td>
                <td className="border border-gray-300 px-4 py-2">1</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Input type="checkbox" />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Input type="checkbox" />
                </td>
                <td className="border border-gray-300 body2 px-4 py-2">هل هناك اجتماعات تسجيل وصول منتظمة لمراجعة التقدم و معالجة اي مشكلات او عقبات؟</td>
                <td className="border border-gray-300 px-4 py-2">2</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Input type="checkbox" />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Input type="checkbox" />
                </td>
                <td className="border border-gray-300 body2 px-4 py-2">هل هناك عملية معمول بها لمعالجة و حل اي مشكلات تتعلق بالجودة تنشأ ؟</td>
                <td className="border border-gray-300 px-4 py-2">3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Input type="checkbox" />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Input type="checkbox" />
                </td>
                <td className="border border-gray-300 body2 px-4 py-2">هل هناك مراجعة منتظمة للميزانيات و النفقات لضمان تحقيق الاهداف المالية ؟</td>
                <td className="border border-gray-300 px-4 py-2">4</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Input type="checkbox" />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Input type="checkbox" />
                </td>
                <td className="border border-gray-300 body2 px-4 py-2">هل تم تدريب الموظفين علي اي اجراءات السلامة و علي دراية ببروتوكولات الطوارئ؟</td>
                <td className="border border-gray-300 px-4 py-2">5</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Input type="checkbox" />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Input type="checkbox" />
                </td>
                <td className="border border-gray-300 body2 px-4 py-2">هل تم تدريب الموظفين على افضل ممارسات الامن السيبراني. مثل تجنب عمليات التصيد الاحتيالي و استخدام كلمات مرور امنة؟</td>
                <td className="border border-gray-300 px-4 py-2">6</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Input type="checkbox" />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <Input type="checkbox" />
                </td>
                <td className="border border-gray-300 body2 px-4 py-2">هل يتم الرد علي استفسارات العملاء و مخاوفهم بسرعة و مهنية؟</td>
                <td className="border border-gray-300 px-4 py-2">7</td>
              </tr>
              {/* Add more rows as needed */}
              {/* Repeat for additional questions */}
            </tbody>
          </table>
          
          </div>
          <Button shape="round" className="mt-[68px] min-w-[272px] btnGreen font-medium sm:px-5">
        تسجيل
      </Button>
        </div>
        
      </div>
    </>
  );
}
