import "../app/globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme/ThemeContext";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Artistly",
  description: "Book top performing artists for your event",
};

export default function RootLayout({ children }) {
  return (
    <html> {/* this is important */}
      <body>
        <ThemeProvider>
          <Navbar />
            <Toaster position="top-center" />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
