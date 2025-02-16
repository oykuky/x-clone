import { LeftBar } from "@/components/layout/LeftBar";
import "./globals.css";
import { RightBar } from "@/components/layout/rightBar";


export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl flex mx-auto justify-between ">
          <div className="px-2 xs:px-4 xxl:px-8">
            <LeftBar />
          </div>
          <div className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray">
            <div>
            {children}
            </div>
            {modal}
          </div>
          <div className="hidden lg:flex ml-4 md:ml-8 flex-1">
            <RightBar />
          </div>
        </div>
      </body>
    </html>
  );
}
