import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const test = () => {
    alert("d");
  };
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
