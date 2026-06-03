import { useNavigate } from "react-router";
import { Check, Share2, Download, X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { toast } from "sonner";

export function AccessGenerated() {
  const navigate = useNavigate();

  const shareWhatsApp = () => {
    const message = encodeURIComponent(
      `PowerPocket Access Created\n\nAmount: Rp500.000\nExpires: 10 Jul 2026\nMerchant: Alfamart\nPIN: 4837\n\nShow QR and PIN to merchant.`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
    toast.success("Opening WhatsApp", {
      description: "Share access with recipient",
    });
  };

  const downloadQR = () => {
    toast.success("QR Code downloaded", {
      description: "Saved to your device",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="p-4 border-b border-border bg-card">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-foreground">Access Generated</h1>
          <button
            onClick={() => navigate("/dashboard")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-border/50 transition-colors"
          >
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </div>

      <div className="flex-1 p-6 flex flex-col items-center justify-center">
        <div className="max-w-sm mx-auto w-full space-y-6">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-white" />
            </div>
            <div className="text-center">
              <h2 className="text-[24px] font-bold text-foreground">Access Created!</h2>
              <p className="text-muted-foreground">Share with recipient to redeem</p>
            </div>
          </div>

          <div className="bg-card rounded-[20px] p-6 border border-border space-y-6">
            <div className="flex justify-center">
              <div className="p-4 bg-white rounded-[20px] border-2 border-border">
                <QRCodeSVG value="PP-AX72-9814" size={200} />
              </div>
            </div>

            <div className="text-center space-y-2">
              <div>
                <p className="text-xs text-muted-foreground">Token ID</p>
                <p className="font-mono font-semibold text-foreground">PP-AX72-9814</p>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">PIN</p>
                <p className="text-[32px] font-bold text-foreground tracking-widest">4837</p>
              </div>

              <div className="inline-block px-4 py-1 bg-success/10 rounded-full">
                <p className="text-xs font-semibold text-success">ACTIVE</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={shareWhatsApp}
              className="w-full h-14 bg-[#25D366] text-white rounded-[20px] font-semibold hover:bg-[#25D366]/90 transition-colors flex items-center justify-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              Share via WhatsApp
            </button>

            <button
              onClick={downloadQR}
              className="w-full h-14 bg-card border border-border text-foreground rounded-[20px] font-semibold hover:bg-border/20 transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download QR
            </button>

            <button
              onClick={() => navigate("/dashboard")}
              className="w-full h-14 bg-primary text-primary-foreground rounded-[20px] font-semibold hover:bg-primary/90 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
