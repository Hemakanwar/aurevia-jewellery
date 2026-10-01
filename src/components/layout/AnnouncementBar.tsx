import { Truck, RefreshCcw, ShieldCheck } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-foreground text-background py-2 text-xs md:text-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4">
        <div className="flex items-center gap-2">
          <Truck className="h-4 w-4" />
          <span>Complimentary Shipping</span>
        </div>
        <span className="hidden md:inline text-muted-foreground/50">•</span>
        <div className="flex items-center gap-2">
          <RefreshCcw className="h-4 w-4" />
          <span>Easy Returns</span>
        </div>
        <span className="hidden md:inline text-muted-foreground/50">•</span>
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4" />
          <span>Secure Checkout</span>
        </div>
      </div>
    </div>
  );
}
