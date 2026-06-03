import { useNavigate } from "react-router";
import { CheckCircle, Download, Printer } from "lucide-react";
import { toast } from "sonner";

export function Success() {
  const navigate = useNavigate();

  const handleDownload = () => {
    toast.success("Receipt downloaded");
  };

  const handlePrint = () => {
    toast.success("Printing receipt...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-success/5 to-secondary/10 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Transaction Successful!</h1>
            <p className="text-muted-foreground">Funds released successfully</p>
          </div>
        </div>

        <div className="bg-card rounded-[20px] p-8 border border-border space-y-6">
          <div className="text-center pb-6 border-b border-border">
            <p className="text-sm text-muted-foreground mb-1">Reference Number</p>
            <p className="text-2xl font-bold text-foreground font-mono">PP202607030094</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Amount</p>
              <p className="text-2xl font-bold text-foreground">Rp500.000</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Date & Time</p>
              <p className="font-semibold text-foreground">03 Jul 2026</p>
              <p className="text-sm text-muted-foreground">16:45 WIB</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Recipient</p>
              <p className="font-semibold text-foreground">Ayu Pratama</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Merchant</p>
              <p className="font-semibold text-foreground">Alfamart Sudirman</p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-muted-foreground mb-1">Token ID</p>
              <p className="font-mono text-sm text-foreground">PP-AX72-9814</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleDownload}
            className="h-14 bg-card border border-border text-foreground rounded-[20px] font-semibold hover:bg-border/20 transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            Download
          </button>
          <button
            onClick={handlePrint}
            className="h-14 bg-card border border-border text-foreground rounded-[20px] font-semibold hover:bg-border/20 transition-colors flex items-center justify-center gap-2"
          >
            <Printer className="w-5 h-5" />
            Print Receipt
          </button>
        </div>

        <button
          onClick={() => navigate("/merchant/dashboard")}
          className="w-full h-14 bg-primary text-primary-foreground rounded-[20px] font-semibold hover:bg-primary/90 transition-colors"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
