
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AuthProvider } from "../context/auth-context";
import "../globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Admin Panel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
      <AuthProvider>
        <Header />
        <main>{children}</main>
        <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
