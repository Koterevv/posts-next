"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation({ navLinks }) {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            className={isActive ? "p-2 text-blue-300" : "p-2"}
            key={link.label}
            href={link.href}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
