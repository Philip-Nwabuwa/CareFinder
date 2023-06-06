import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-24 mb-12 flex justify-center items-center">
      <SignUp />
    </div>
  );
}
