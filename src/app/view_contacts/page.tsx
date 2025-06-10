"use client";

import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface Contact {
  name: string;
  telephone: string;
  duration: string;
  email: string;
  remark: string;
}

const dummyContacts: Contact[] = [
  {
    name: "王小明",
    telephone: "0912345678",
    duration: "大學部",
    email: "ming@example.com",
    remark: "好友",
  },
  {
    name: "李小美",
    telephone: "0922333444",
    duration: "碩士班",
    email: "mei@example.com",
    remark: "同學",
  },
];

export default function ViewContacts() {
  const [search, setSearch] = useState("");
  const filteredContacts = dummyContacts.filter(
    (c) => c.name.includes(search) || c.email.includes(search)
  );

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">檢視聯絡人</h2>
      <span className="p-input-icon-left mb-4 block">
        <i className="pi pi-search" />
        <InputText
          placeholder="搜尋姓名或電子郵件"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </span>
      <DataTable value={filteredContacts}>
        <Column field="name" header="姓名" />
        <Column field="telephone" header="電話" />
        <Column field="duration" header="學制" />
        <Column field="email" header="電子郵件" />
        <Column field="remark" header="備註" />
      </DataTable>
    </div>
  );
}
