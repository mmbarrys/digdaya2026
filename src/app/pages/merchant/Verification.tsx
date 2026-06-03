import { useState } from "react";
import { useNavigate } from "react-router";
import { CheckCircle, User, DollarSign, Clock, Store } from "lucide-react";
import { toast } from "sonner";
import { MerchantLayout } from "../../components/MerchantLayout";

export function Verification() {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === "4837") {
      toast.success("PIN verified successfully");
      setTimeout(() => navigate("/merchant/release"), 800);
    } else {
      setError("Invalid PIN. Please try again.");
      toast.error("Invalid PIN", {
        description: "Please check and try again",
      });
      setPin("");
    }
  };

  return (
    <MerchantLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground mb-8">Verification</h1>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-success/10 rounded-[20px] p-6 border border-success/20">
            <div className="flex items-center gap-4">
              <CheckCircle className="w-12 h-12 text-success" />
              <div>
                <h2 className="text-xl font-bold text-foreground">QR Code Valid</h2>
                <p className="text-sm text-muted-foreground">Access details verified successfully</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-[20px] p-8 border border-border space-y-6">
            <h3 className="text-xl font-bold text-foreground">Access Details</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Recipient</p>
                  <p className="text-xl font-bold text-foreground">Ayu Pratama</p>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-success" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Amount</p>
                  <p className="text-3xl font-bold text-foreground">Rp500.000</p>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-warning" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Expires</p>
                  <p className="font-semibold text-foreground">07 Jul 2026</p>
                  <p className="text-sm text-success">Valid</p>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center">
                  <Store className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Merchant</p>
                  <p className="font-semibold text-foreground">Alfamart</p>
                  <p className="text-sm text-success">Authorized</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleVerify} className="bg-card rounded-[20px] p-8 border border-border space-y-6">
            <div className="space-y-2">
              <label className="text-lg font-semibold text-foreground">Enter PIN</label>
              <p className="text-sm text-muted-foreground">Ask customer for their 4-digit PIN</p>
            </div>

            <input
              type="text"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value.replace(/\D/g, "").slice(0, 4));
                setError("");
              }}
              maxLength={4}
              placeholder="••••"
              className="w-full h-20 px-6 bg-background border-2 border-border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary text-center text-4xl font-bold tracking-widest"
              autoFocus
            />

            {error && (
              <div className="bg-destructive/10 rounded-[20px] p-4 border border-destructive/20">
                <p className="text-sm text-destructive font-semibold text-center">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={pin.length !== 4}
              className="w-full h-14 bg-primary text-primary-foreground rounded-[20px] font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Verify PIN
            </button>
          </form>
        </div>
      </div>
    </MerchantLayout>
  );
}
