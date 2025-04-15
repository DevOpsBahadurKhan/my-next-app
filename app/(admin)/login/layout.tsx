export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body className="bg-gray-50  overflow-hidden">{children}</body>
      </html>
    );
  }
  