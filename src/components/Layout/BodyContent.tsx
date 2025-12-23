'use client'
import { usePathname } from "next/navigation";

export default function BodyContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bodyClasses = `antialiased sticky-header${pathname === '/cases' ? ' case-studies' : ''}`;
  
  return (
    <body className={bodyClasses}>
      {children}
    </body>
  );
}