import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "행주기씨대종중 통합 시스템 구축 제안서 | Bizstart",
  description: "행주기씨대종중 통합 시스템 구축 제안서",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
