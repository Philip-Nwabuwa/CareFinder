import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="mt-24 mb-[126px] flex justify-center items-center">
      <SignIn />
    </div>
  );
}
