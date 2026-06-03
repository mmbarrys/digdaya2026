import { ReactNode } from "react";
import { useNavigate, useLocation } from "react-router";
import { Store, LayoutDashboard, QrCode, History, Settings, LogOut } from "lucide-react";

interface MerchantLayoutProps {
  children: ReactNode;
}

export function MerchantLayout({ children }: MerchantLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/merchant/dashboard" },
    { icon: QrCode, label: "Scan QR", path: "/merchant/scan" },
    { icon: History, label: "Transactions", path: "/merchant/dashboard" },
    { icon: Settings, label: "Settings", path: "/merchant/dashboard" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 bg-card border-r border-border flex flex-col">
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-[20px] flex items-center justify-center">
              <Store className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-foreground">PowerPocket</h1>
              <p className="text-xs text-muted-foreground">Merchant Portal</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-[16px] transition-colors ${
                isActive(item.path)
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-border/20"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-border">
          <div className="bg-background rounded-[16px] p-4 mb-3">
            <p className="text-xs text-muted-foreground mb-1">Merchant</p>
            <p className="font-semibold text-foreground text-sm">Alfamart Sudirman</p>
            <p className="text-xs text-muted-foreground font-mono">ALF-JKT-0142</p>
          </div>
          <button
            onClick={() => navigate("/merchant")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-[16px] text-destructive hover:bg-destructive/10 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
