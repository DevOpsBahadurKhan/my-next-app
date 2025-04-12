import Footer from "./components/Footer";
import Header from "./components/header";
import "./globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Admin Panel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
