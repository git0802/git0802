"use client";

import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navigation";
import { ReactNode } from "react";
import mdxCustomComponents from "@/components/mdx/custom-components";
import { MDXProvider } from "@mdx-js/react";

export default function LayoutPrivate({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <MDXProvider components={mdxCustomComponents}>
        <main>{children}</main>
      </MDXProvider>
      <Footer />
    </>
  );
}
