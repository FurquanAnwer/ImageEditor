import { headers } from "next/headers";
import { redirect } from "next/navigation";
import CustomerPortalRedirect from "@/src/components/CustomerPortalRedirect";
import { auth } from "@/src/lib/auth";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth/sign-in");
  }

  return <CustomerPortalRedirect />;
}