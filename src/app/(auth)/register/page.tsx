import { SignUp } from "@clerk/nextjs";

const Page = async ({
  searchParams,
}: {
  searchParams: { redirectUrl: string };
}) => {
  const { redirectUrl } = searchParams;

  return (
    <section className="py-24 flex items-center justify-center">
      <SignUp redirectUrl={redirectUrl || "/hospitals"} />
    </section>
  );
};

export default Page;
