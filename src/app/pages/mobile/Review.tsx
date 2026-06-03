import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, User, DollarSign, Clock, Store, Hash } from "lucide-react";
import { toast } from "sonner";

export function Review() {
  const navigate = useNavigate();
  const [isCreating, setIsCreating] = useState(false);

  const handleCreate = () => {
    setIsCreating(true);
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1500)),
      {
        loading: "Creating access...",
        success: "Access created successfully!",
        error: "Failed to create access",
      }
    );
    setTimeout(() => navigate("/access-generated"), 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="p-4 border-b border-border bg-card">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/security")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-border/50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-xl font-semibold text-foreground">Review</h1>
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="max-w-sm mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-[24px] font-bold text-foreground">Summary</h2>
            <p className="text-muted-foreground">Review before creating access</p>
          </div>

          <div className="bg-card rounded-[20px] p-6 border border-border space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Recipient</p>
                <p className="font-semibold text-foreground">Ayu Pratama</p>
                <p className="text-sm text-muted-foreground">+62 812 3456 7890</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-success" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Amount</p>
                <p className="text-[24px] font-bold text-foreground">Rp500.000</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-warning" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Expiry</p>
                <p className="font-semibold text-foreground">7 Days</p>
                <p className="text-sm text-muted-foreground">Until Jul 10, 2026</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center">
                <Store className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Merchant</p>
                <p className="font-semibold text-foreground">Alfamart</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                <Hash className="w-5 h-5 text-destructive" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">PIN</p>
                <p className="text-[24px] font-bold text-foreground tracking-widest">4837</p>
              </div>
            </div>
          </div>

          <div className="bg-warning/10 rounded-[20px] p-4 border border-warning/20">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Notice:</span> Funds will be held until redeemed, expired, or
              revoked. You can track and manage this access from your dashboard.
            </p>
          </div>

          <button
            onClick={handleCreate}
            disabled={isCreating}
            className="w-full h-14 bg-primary text-primary-foreground rounded-[20px] font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCreating ? "Creating..." : "Create Access"}
          </button>
        </div>
      </div>
    </div>
  );
}
