import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

interface PolicyLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function PolicyLayout({ title, children }: PolicyLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-background text-primary">
      <Header />
      <main className="container mx-auto px-4 py-10 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">{title}</h1>
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
