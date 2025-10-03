"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function HomeComponent() {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.replace("/");
          },
        },
      });
    } catch (e) {
      console.log({
        message: "Error occured while signing out",
        error: e,
      });
    }
  };
  return (
    <div>
      <h1>Welcome to Idea Mesh</h1>
      <Button type="button" className="cursor-pointer" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
