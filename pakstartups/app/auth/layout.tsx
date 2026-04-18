import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In — PakStartups",
  description: "Sign in to your PakStartups account",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
