import { useNavigate } from "react-router";
import { Plus, Clock, History as HistoryIcon, User, Store, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { NotificationBadge } from "../../components/NotificationBadge";

export function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="p-6 space-y-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-muted-foreground">Good Morning,</p>
            <h1 className="text-[32px] font-bold text-foreground">Tomi Prasetyo</h1>
          </div>
          <NotificationBadge count={2} />
        </div>

        <div className="space-y-4">
          <div className="bg-card rounded-[20px] p-6 shadow-sm border border-border">
            <p className="text-sm text-muted-foreground mb-2">Available Balance</p>
            <h2 className="text-[32px] font-bold text-foreground">Rp5.250.000</h2>
          </div>

          <div className="bg-card rounded-[20px] p-6 shadow-sm border border-border">
            <p className="text-sm text-muted-foreground mb-2">Held Funds</p>
            <h2 className="text-[24px] font-bold text-warning">Rp1.500.000</h2>
            <p className="text-xs text-muted-foreground mt-1">2 active access</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => navigate("/create-access")}
              className="bg-primary text-primary-foreground rounded-[20px] p-6 flex flex-col items-center gap-3 hover:bg-primary/90 transition-colors"
            >
              <Plus className="w-8 h-8" />
              <span className="font-semibold">Create Access</span>
            </button>

            <button
              onClick={() => navigate("/history")}
              className="bg-card border border-border rounded-[20px] p-6 flex flex-col items-center gap-3 hover:bg-border/20 transition-colors"
            >
              <Clock className="w-8 h-8 text-primary" />
              <span className="font-semibold text-foreground">Active Access</span>
            </button>

            <button
              onClick={() => navigate("/history")}
              className="bg-card border border-border rounded-[20px] p-6 flex flex-col items-center gap-3 hover:bg-border/20 transition-colors"
            >
              <HistoryIcon className="w-8 h-8 text-primary" />
              <span className="font-semibold text-foreground">History</span>
            </button>

            <button className="bg-card border border-border rounded-[20px] p-6 flex flex-col items-center gap-3 hover:bg-border/20 transition-colors">
              <Store className="w-8 h-8 text-primary" />
              <span className="font-semibold text-foreground">Merchants</span>
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="bg-card rounded-[20px] p-4 border border-border flex items-center gap-4">
              <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                <ArrowDownRight className="w-5 h-5 text-success" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Access Redeemed</p>
                <p className="text-sm text-muted-foreground">Ayu Pratama • Alfamart</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">Rp500.000</p>
                <p className="text-xs text-muted-foreground">Today, 14:32</p>
              </div>
            </div>

            <div className="bg-card rounded-[20px] p-4 border border-border flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Access Created</p>
                <p className="text-sm text-muted-foreground">Budi Santoso • Indomaret</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">Rp1.000.000</p>
                <p className="text-xs text-muted-foreground">Yesterday, 09:15</p>
              </div>
            </div>

            <div className="bg-card rounded-[20px] p-4 border border-border flex items-center gap-4">
              <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-destructive" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-foreground">Access Expired</p>
                <p className="text-sm text-muted-foreground">Siti Rahma • Any Merchant</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">Rp250.000</p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="flex items-center justify-around h-20 px-4">
          <button className="flex flex-col items-center gap-1 text-primary">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>
            <span className="text-xs font-medium">Home</span>
          </button>

          <button
            onClick={() => navigate("/history")}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <Clock className="w-6 h-6" />
            <span className="text-xs font-medium">Access</span>
          </button>

          <button
            onClick={() => navigate("/history")}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <HistoryIcon className="w-6 h-6" />
            <span className="text-xs font-medium">History</span>
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}
