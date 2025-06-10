"use client";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();

  const items = [
    {
      label: "首頁 Home",
      icon: "pi pi-home",
      command: () => router.push("/"),
    },
    {
      label: "登入 Login",
      icon: "pi pi-user",
      command: () => router.push("/login"),
    },
    {
      label: "會員管理 Member Management",
      icon: "pi pi-user",
      command: () => router.push("/members"),
    },
    {
      label: "註冊 Register",
      icon: "pi pi-user",
      command: () => router.push("/register"),
    },
    {
      label: "新增聯絡人 Add Contact",
      icon: "pi pi-user-plus",
      command: () => router.push("/add_Contact"),
    },
    {
      label: "檢視聯絡人 View Contacts",
      icon: "pi pi-eye",
      command: () => router.push("/view_contacts"),
    },
    {
      label: "聯絡人管理 Contact Management",
      icon: "pi pi-users",
      command: () => router.push("/manage_contacts"),
    },
    {
      label: "購物車 Shopping Cart",
      icon: "pi pi-shopping-cart",
      command: () => router.push("/cart"),
    },
  ];

  const end = (
    <div className="flex align-items-center gap-2">
      <Button icon="pi pi-user" rounded text />
    </div>
  );

  return (
    <div className="card">
      <Menubar model={items} end={end} />
    </div>
  );
}
