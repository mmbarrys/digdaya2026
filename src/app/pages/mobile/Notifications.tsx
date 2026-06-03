import { useNavigate } from "react-router";
import { ChevronLeft, CheckCircle, XCircle, Clock } from "lucide-react";

export function Notifications() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="p-4 border-b border-border bg-card sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-border/50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-xl font-semibold text-foreground">Notifications</h1>
        </div>
      </div>

      <div className="p-6 space-y-3">
        <div className="bg-success/5 rounded-[20px] p-4 border border-success/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">Access Redeemed</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Ayu Pratama has successfully redeemed Rp500.000 at Alfamart Sudirman
              </p>
              <p className="text-xs text-muted-foreground">Today, 14:32 WIB</p>
            </div>
          </div>
        </div>

        <div className="bg-warning/5 rounded-[20px] p-4 border border-warning/20">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-warning rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">Access Expiring Soon</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Access for Budi Santoso (Rp1.000.000) will expire in 1 day
              </p>
              <p className="text-xs text-muted-foreground">Yesterday, 09:15 WIB</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-[20px] p-4 border border-border">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
              <XCircle className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">Access Expired</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Access for Siti Rahma (Rp250.000) has expired. Funds returned to your balance.
              </p>
              <p className="text-xs text-muted-foreground">2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
