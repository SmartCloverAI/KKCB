import { redirect } from "next/navigation";

import { getDefaultLocale } from "@/lib/site-utils";

export default function IndexPage() {
  redirect(`/${getDefaultLocale()}`);
}
