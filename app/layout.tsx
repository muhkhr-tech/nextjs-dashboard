import "@/app/globals.css";
import SidebarSection from "@/components/sidebar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
        <div className="block sm:flex">
          <div className="hidden sm:block"><SidebarSection /></div>
          <div className="w-full px-5 pt-0 sm:pt-10">
            {children}</div>
        </div>
      </body>
    </html>
  );
}
