export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>

      <h1>Dashboard Navbar</h1>

      {children}

    </div>
  );
}
