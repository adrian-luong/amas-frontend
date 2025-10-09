import { PropsWithChildren } from "react";
import Header from "./header";

export default function CommonLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <Header />
      <section className="p-6">{children}</section>
    </main>
  );
}
