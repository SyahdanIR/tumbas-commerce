"use client";
import { logout } from "@/services/authService";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const CartPage = () => {
  const route = useRouter();
  const logoutHandler = async () => {
    try {
      await logout();

      toast.success("Logout Berhasil!");
      route.replace("/login");
    } catch (error) {
      toast.error("Gagal Logout!");
    }
  };
  return (
    <div>
      <p>pe</p>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default CartPage;
