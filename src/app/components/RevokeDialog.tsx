import { AlertTriangle, X } from "lucide-react";

interface RevokeDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  amount: string;
  recipient: string;
}

export function RevokeDialog({ isOpen, onClose, onConfirm, amount, recipient }: RevokeDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
      <div className="bg-card rounded-[20px] max-w-md w-full border border-border shadow-2xl overflow-hidden">
        <div className="relative bg-gradient-to-br from-destructive/10 to-warning/10 p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mb-4">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Revoke Access?</h2>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-background rounded-[20px] p-4 border border-border space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Recipient</span>
              <span className="font-semibold text-foreground">{recipient}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Amount</span>
              <span className="font-semibold text-foreground">{amount}</span>
            </div>
          </div>

          <div className="bg-warning/10 rounded-[20px] p-4 border border-warning/20">
            <p className="text-sm text-foreground">
              <span className="font-semibold">Impact:</span> The access will be immediately revoked and
              held funds (
              <span className="font-semibold">{amount}</span>) will be returned to your available balance.
              This action cannot be undone.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 h-14 bg-card border-2 border-border text-foreground rounded-[20px] font-semibold hover:bg-border/20 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 h-14 bg-destructive text-destructive-foreground rounded-[20px] font-semibold hover:bg-destructive/90 transition-colors"
            >
              Revoke Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
