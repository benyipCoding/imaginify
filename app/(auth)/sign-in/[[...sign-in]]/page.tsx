import { SignedOut } from "@clerk/clerk-react";
import { SignInButton, SignedIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div>
      <SignInButton />

      <Button asChild className="button bg-purple-gradient bg-cover">
        <Link href={"/"}>Home</Link>
      </Button>
    </div>
  );
};

export default SignInPage;
