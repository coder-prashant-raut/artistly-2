import "../app/globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme/ThemeContext";

export const metadata = {
  title: "Artistly",
  description: "Book top performing artists for your event",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
