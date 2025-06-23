import "../app/globals.css";
import Navbar from "../components/Navbar.jsx";

export const metadata = {
  title: "Artistly - Book Artists",
  description: "Discover, filter and book top performing artists for your events.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto px-4">{children}</main>
      </body>
    </html>
  );
}
