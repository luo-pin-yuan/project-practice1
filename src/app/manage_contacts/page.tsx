"use client";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const contactList = [
  {
    name: "張大明",
    telephone: "0933222111",
    duration: "博士班",
    email: "daming@example.com",
    remark: "教授",
  },
  {
    name: "林小華",
    telephone: "0911888777",
    duration: "大學部",
    email: "xiaohua@example.com",
    remark: "系學會",
  },
];

export default function ManageContacts() {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">聯絡人管理</h2>
      <DataTable value={contactList}>
        <Column field="name" header="姓名" />
        <Column field="telephone" header="電話" />
        <Column field="duration" header="學制" />
        <Column field="email" header="電子郵件" />
        <Column field="remark" header="備註" />
      </DataTable>
    </div>
  );
}
