import { Library, Wallet, Settings } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4 flex items-center gap-2 text-primary">
          <Library size={24} className="text-blue-400" />
          <div>
            <h1 className="text-xl font-bold">ETH BookStore</h1>
            <p className="text-xs text-muted-foreground">
              Decentralized Library
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <w3m-button />
            <w3m-network-button />
          </nav>
        </div>
      </div>
    </header>
  );
}
