import { ReactNode } from "react";

export default function NotFoundLayout({ children }: { children: ReactNode }) {
  return (
    <div className="not-found-layout">
      <header className="not-found-header">
        <h1>Page Not Found</h1>
      </header>
      <main className="not-found-content">
        {children}
      </main>
      <footer className="not-found-footer">
        <p>&copy; {new Date().getFullYear()} Not Found</p>
      </footer>
    </div>
  );
}