import { useNavigate } from "react-router";
import { Shield } from "lucide-react";
import { toast } from "sonner";
import { MerchantLayout } from "../../components/MerchantLayout";

export function ReleaseFunds() {
  const navigate = useNavigate();

  const handleRelease = () => {
    toast.success("Funds released successfully", {
      description: "Transaction completed",
    });
    setTimeout(() => navigate("/merchant/success"), 1000);
  };

  return (
    <MerchantLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground mb-8">Release Funds</h1>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-success/10 rounded-[20px] p-8 border border-success/20 text-center">
            <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">PIN Verified</h2>
            <p className="text-muted-foreground">You can now release the funds to complete the transaction</p>
          </div>

          <div className="bg-card rounded-[20px] p-8 border border-border">
            <div className="text-center space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Amount to Release</p>
                <p className="text-5xl font-bold text-foreground">Rp500.000</p>
              </div>

              <div className="h-px bg-border" />

              <div className="grid grid-cols-2 gap-6 text-left">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Recipient</p>
                  <p className="font-semibold text-foreground">Ayu Pratama</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Token ID</p>
                  <p className="font-mono text-sm text-foreground">PP-AX72-9814</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Merchant</p>
                  <p className="font-semibold text-foreground">Alfamart Sudirman</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Date & Time</p>
                  <p className="font-semibold text-foreground">03 Jul 2026, 16:45</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-warning/10 rounded-[20px] p-6 border border-warning/20">
            <p className="text-sm text-foreground text-center">
              <span className="font-semibold">Confirm:</span> By releasing funds, you acknowledge that the
              customer has received the service or product. This action cannot be undone.
            </p>
          </div>

          <button
            onClick={handleRelease}
            className="w-full h-16 bg-primary text-primary-foreground rounded-[20px] text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Release Funds
          </button>
        </div>
      </div>
    </MerchantLayout>
  );
}
