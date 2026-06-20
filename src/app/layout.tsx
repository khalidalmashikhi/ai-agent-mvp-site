import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI Agent-MVP | النموذج الأولي لتطوير AI Agent-MVP',
  description: 'A national innovation journey empowering youth to develop intelligent prototypes using AI Agents.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
