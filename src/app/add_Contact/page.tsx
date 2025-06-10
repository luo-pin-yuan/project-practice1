"use client";

import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";

interface FormData {
  name: string; // 姓名
  telephone: string; // 電話
  duration: string; // 學制
  email: string; // 電子郵件
  remark: string; // 備註
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    telephone: "",
    duration: "",
    email: "",
    remark: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataString = `
      姓名: ${formData.name}
      電話: ${formData.telephone}
      學制: ${formData.duration}
      電子郵件: ${formData.email}
      備註: ${formData.remark}
    `;
    alert("表單資料:\n" + formDataString);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card title="新增聯絡人" className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* 姓名 */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name">姓名</label>
            <InputText
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* 電話 */}
          <div className="flex flex-col gap-2">
            <label htmlFor="telephone">電話</label>
            <InputText
              id="telephone"
              value={formData.telephone}
              onChange={(e) =>
                setFormData({ ...formData, telephone: e.target.value })
              }
            />
          </div>

          {/* 學制 */}
          <div className="flex flex-col gap-2">
            <label>學制</label>
            <div className="flex gap-4">
              {["大學部", "碩士班", "博士班"].map((option) => (
                <div className="flex items-center" key={option}>
                  <RadioButton
                    inputId={option}
                    name="duration"
                    value={option}
                    checked={formData.duration === option}
                    onChange={(e) =>
                      setFormData({ ...formData, duration: e.value })
                    }
                  />
                  <label htmlFor={option} className="ml-2">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* 電子郵件 */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email">電子郵件</label>
            <InputText
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* 備註 */}
          <div className="flex flex-col gap-2">
            <label htmlFor="remark">備註</label>
            <InputTextarea
              id="remark"
              rows={5}
              value={formData.remark}
              onChange={(e) =>
                setFormData({ ...formData, remark: e.target.value })
              }
            />
          </div>

          {/* 新增按鈕 */}
          <Button type="submit" label="新增" className="mt-4" />
        </form>
      </Card>
    </div>
  );
}
