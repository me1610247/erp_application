import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Text, Input } from '../../components';
import Header from '../../components/Header';

export default function OrgRegPage() {
  const [organization_name, Setorganization_name] = useState('');
  const [organization_status, Setorganization_status] = useState(true); // Assuming status is a boolean
  const [licenseId, setLicenseId] = useState('');
  const [organizationType, SetorganizationType] = useState('');
  const [organizationFinancialId, SetorganizationFinancialId] = useState('');
  const [financialLimitFrom, setFinancialLimitFrom] = useState(0); // Assuming limits are numbers
  const [financialLimitTo, setFinancialLimitTo] = useState(0); // Assuming limits are numbers
  const [bankAccount, setBankAccount] = useState(0); // Assuming bank account is a number
  const [error, setError] = useState("");

  const handleRegistration = async () => {
    try {
      const token = localStorage.getItem("jwtToken"); // Retrieve the token from local storage

      if (!token) {
        throw new Error("User is not authenticated");
      }

      const response = await fetch('http://localhost:5295/api/Organization', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          organization_name,
          organization_status,
          licenseId,
          organizationType,
          organizationFinancialId,
          financialLimitFrom,
          financialLimitTo,
          bankAccount,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const contentType = response.headers.get("Content-Type");
      if (contentType && contentType.includes("application/json")) {
        const data = await response.json();
        console.log("New organization created:", data);
        alert("Organization has been created Successfully");
      } else {
        throw new Error("Unexpected content type from server");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <Helmet>
        <title>User Details - Complete Your Registration</title>
        <meta
          name="description"
          content="Complete the user registration process by providing personal and institutional details. Ensure user status, contact information, and secure password setup."
        />
      </Helmet>
      <Header />
      <div className="mt-[141px] flex w-full rounded-[30px] border-4 border-solid border-black-900 pt-[23px] sm:pt-5">
        <div className="flex w-[91%] flex-col items-end md:w-full">
          <div className="flex w-[90%] items-center gap-[47px] md:w-full md:flex-col">
            <div className="flex w-full flex-col items-end">
              <Text size="lg" as="p" className="mr-5 md:mr-0">
                اسم المؤسسة
              </Text>
              <Input
                type="text"
                shape="round"
                className="teal_500_yellow_900_border self-stretch border-[3px] border-solid"
                name="orgType"
                id="orgType"
                value={organization_name}
                onChange={(e) => Setorganization_name(e.target.value)}
              />
            </div>
            <div className="flex w-full flex-col items-end gap-0.5">
              <Text size="lg" as="p" className="mr-7 md:mr-0">
                حالة المؤسسة
              </Text>
              <Input
                type="checkbox"
                shape="round"
                className="teal_500_yellow_900_border w-full border-[3px] border-solid"
                name="orgStatus"
                id="orgStatus"
                checked={organization_status}
                onChange={(e) => Setorganization_status(e.target.checked)}
              />
            </div>
          </div>
          <div className="mr-[23px] mt-[19px] flex w-[70%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
            <Text size="lg" as="p" className="text-right">
              كود المؤسسة
            </Text>
           
          </div>
          <div className="flex w-[90%] gap-[47px] md:w-full md:flex-col">
              <Input
                type="text"
                shape="round"
                className="teal_500_yellow_900_border w-full border-[3px] border-solid"
                name="orgStatus"
                id="orgStatus"
                value={licenseId}
                onChange={(e) => setLicenseId(e.target.value)}
              />
          </div>
          <div className="mr-[19px] mt-[18px] flex w-[80%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
            <Text size="lg" as="p" className="text-right">
              نوع  للمؤسسة
            </Text>
            <Text size="lg" as="p" className="md:ml-auto">
              كود الصلاحية
            </Text>
          </div>
          <div className="flex w-[90%] gap-[47px] md:w-full md:flex-col">
            <Input
              type="text"
              shape="round"
              className="teal_500_yellow_900_border w-full border-[3px] border-solid"
              name="orgFinancialId"
              id="orgFinancialId"
              value={organizationType}
              onChange={(e) => SetorganizationType(e.target.value)}
            />
            <Input
              type="number"
              shape="round"
              className="teal_500_yellow_900_border w-full border-[3px] border-solid"
              name="bankAccount"
              id="bankAccount"
              value={organizationFinancialId}
              onChange={(e) => SetorganizationFinancialId((e.target.value))}
            />
          </div>
          <div className="mr-[19px] mt-[18px] flex w-[80%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
            <Text size="lg" as="p" className="text-right">
              الحد المالي الادني
            </Text>
            <Text size="lg" as="p" className="md:ml-auto">
              الحد المالي الاعلي
            </Text>
          </div>
          <div className="flex w-[90%] gap-[47px] md:w-full md:flex-col">
          <Input
            type="number" // Change input type to number
            shape="round"
            className="teal_500_yellow_900_border w-full border-[3px] border-solid"
            name="financialLimitFrom"
            id="financialLimitFrom"
            value={financialLimitFrom} // Keep value as is
            onChange={(e) => setFinancialLimitFrom(parseInt(e.target.value, 10))} // Parse input value as integer
          />

          <Input
            type="number" // Change input type to number
            shape="round"
            className="teal_500_yellow_900_border w-full border-[3px] border-solid"
            name="financialLimitTo"
            id="financialLimitTo"
            value={financialLimitTo} // Keep value as is
            onChange={(e) => setFinancialLimitTo(parseInt(e.target.value, 10))} // Parse input value as integer
          />
          </div>
          <div className="mr-[19px] mt-[18px] flex w-[80%] flex-wrap justify-between gap-5 md:mr-0 md:w-full">
            <Text size="lg" as="p" className="md:ml-auto">
               الحساب البنكي
            </Text>
          </div>
          <div className="flex w-[90%] gap-[47px] md:w-full md:flex-col">
                    <Input
            type="number" // Change input type to number
            shape="round"
            className="teal_500_yellow_900_border w-full border-[3px] border-solid"
            name="bankAccount"
            id="bankAccount"
            value={bankAccount} // Keep value as is
            onChange={(e) => setBankAccount(parseInt(e.target.value, 10))} // Parse input value as integer
          />
          </div>
        </div>
      </div>
      {error && <Text size="xs" as="p" className="text-red-500">{error}</Text>}

      <Button onClick={handleRegistration} shape="round" className="mt-[68px] min-w-[272px] font-medium sm:px-5">
        تسجيل
      </Button>
    </>
  );
}