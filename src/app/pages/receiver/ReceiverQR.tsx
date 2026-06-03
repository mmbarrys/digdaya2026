import { useParams } from "react-router";
import { QRCodeSVG } from "qrcode.react";
import { Clock, User, DollarSign, Store, Hash, Info } from "lucide-react";

export function ReceiverQR() {
  const { token } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-card rounded-[20px] shadow-xl border border-border overflow-hidden">
        <div className="bg-primary p-6 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
            <Hash className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-white">PowerPocket Access</h1>
          <p className="text-white/90 text-sm mt-1">Show this to merchant</p>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex justify-center">
            <div className="p-6 bg-white rounded-[20px] border-2 border-border shadow-sm">
              <QRCodeSVG value={token || "PP-AX72-9814"} size={220} />
            </div>
          </div>

          <div className="bg-background rounded-[20px] p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Name</p>
                <p className="font-semibold text-foreground text-lg">Ayu Pratama</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-success" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Amount</p>
                <p className="font-bold text-foreground text-2xl">Rp500.000</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                <Hash className="w-5 h-5 text-destructive" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">PIN</p>
                <p className="font-bold text-foreground text-3xl tracking-widest">4837</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-warning" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Expiry</p>
                <p className="font-semibold text-foreground">07 Jul 2026</p>
              </div>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center">
                <Store className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-muted-foreground">Valid at</p>
                <p className="font-semibold text-foreground">Alfamart</p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-[20px] p-4 border border-primary/20">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">Instruction:</span> Show this QR code and provide the PIN
                when the merchant asks for verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
