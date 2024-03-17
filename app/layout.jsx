import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers/StoreProvider";
import LoadUsers from "./providers/LoadUsers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-no-repeat ${poppins.className} min-h-screen`}>
        <Providers>
          <Toaster
            toastOptions={{
              style: {
                background: "rgb(51 65 85)",
                color: "#fff",
                zIndex: 9999999,
              },
            }}
          />
          <LoadUsers>{children}</LoadUsers>
        </Providers>
      </body>
    </html>
  );
}
