export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Optional header, sidebar, etc. */}
      <main className="min-h-screen bg-gray-50">
        {children}
      </main>
    </>
  );
}
