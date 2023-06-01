import { SignIn } from "@clerk/nextjs";

const Page = async ({
  searchParams,
}: {
  searchParams: { redirectUrl: string };
}) => {
  const { redirectUrl } = searchParams;

  return (
    <section className="py-24">
      <SignIn redirectUrl={redirectUrl || "/hospitals"} />
    </section>
  );
};

export default Page;
