import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ChevronLeft, Clock, AlertCircle } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { RevokeDialog } from "../../components/RevokeDialog";
import { toast } from "sonner";

export function ActiveAccessDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showRevokeDialog, setShowRevokeDialog] = useState(false);

  const handleExtend = () => {
    navigate(`/extend-access/${id}`);
  };

  const handleRevoke = () => {
    setShowRevokeDialog(false);
    toast.success("Access revoked successfully", {
      description: "Rp500.000 returned to your balance",
    });
    setTimeout(() => navigate("/dashboard"), 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="p-4 border-b border-border bg-card">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-border/50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-xl font-semibold text-foreground">Access Details</h1>
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="max-w-sm mx-auto space-y-6">
          <div className="bg-card rounded-[20px] p-6 border border-border space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-foreground">Status</h2>
              <div className="px-3 py-1 bg-success/10 rounded-full">
                <p className="text-xs font-semibold text-success">ACTIVE</p>
              </div>
            </div>

            <div className="flex justify-center py-4">
              <div className="p-4 bg-white rounded-[20px] border-2 border-border">
                <QRCodeSVG value="PP-AX72-9814" size={180} />
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-muted-foreground">Token ID</p>
                <p className="font-mono font-medium text-foreground">PP-AX72-9814</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Recipient</p>
                <p className="font-semibold text-foreground">Ayu Pratama</p>
                <p className="text-sm text-muted-foreground">+62 812 3456 7890</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Amount</p>
                <p className="text-[24px] font-bold text-foreground">Rp500.000</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Expires</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-warning" />
                  <p className="font-semibold text-foreground">10 Jul 2026, 14:30</p>
                </div>
                <p className="text-sm text-muted-foreground">5 days remaining</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">Merchant</p>
                <p className="font-semibold text-foreground">Alfamart</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">PIN</p>
                <p className="text-[24px] font-bold text-foreground tracking-widest">4837</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleExtend}
              className="w-full h-14 bg-primary text-primary-foreground rounded-[20px] font-semibold hover:bg-primary/90 transition-colors"
            >
              Extend Access
            </button>

            <button
              onClick={() => setShowRevokeDialog(true)}
              className="w-full h-14 bg-card border-2 border-destructive text-destructive rounded-[20px] font-semibold hover:bg-destructive/10 transition-colors flex items-center justify-center gap-2"
            >
              <AlertCircle className="w-5 h-5" />
              Revoke Access
            </button>
          </div>
        </div>
      </div>

      <RevokeDialog
        isOpen={showRevokeDialog}
        onClose={() => setShowRevokeDialog(false)}
        onConfirm={handleRevoke}
        amount="Rp500.000"
        recipient="Ayu Pratama"
      />
    </div>
  );
}
