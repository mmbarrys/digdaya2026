import { useNavigate } from "react-router";
import { ChevronLeft, User, Shield, Bell, HelpCircle, LogOut, ChevronRight } from "lucide-react";

export function Profile() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="p-4 border-b border-border bg-card">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-border/50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-xl font-semibold text-foreground">Profile</h1>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="bg-card rounded-[20px] p-6 border border-border">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Tomi Prasetyo</h2>
              <p className="text-sm text-muted-foreground">+62 812 3456 7890</p>
              <p className="text-xs text-muted-foreground mt-1">Tomi.prasetyo@email.com</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-[20px] border border-border overflow-hidden">
          <button className="w-full p-4 flex items-center gap-4 hover:bg-border/10 transition-colors">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-foreground">Personal Information</p>
              <p className="text-xs text-muted-foreground">Update your details</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <div className="h-px bg-border" />

          <button className="w-full p-4 flex items-center gap-4 hover:bg-border/10 transition-colors">
            <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-success" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-foreground">Security</p>
              <p className="text-xs text-muted-foreground">Password and authentication</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <div className="h-px bg-border" />

          <button className="w-full p-4 flex items-center gap-4 hover:bg-border/10 transition-colors">
            <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5 text-warning" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-foreground">Notifications</p>
              <p className="text-xs text-muted-foreground">Manage your alerts</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>

          <div className="h-px bg-border" />

          <button className="w-full p-4 flex items-center gap-4 hover:bg-border/10 transition-colors">
            <div className="w-10 h-10 bg-secondary/30 rounded-full flex items-center justify-center">
              <HelpCircle className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 text-left">
              <p className="font-semibold text-foreground">Help Center</p>
              <p className="text-xs text-muted-foreground">FAQs and support</p>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <button
          onClick={() => navigate("/")}
          className="w-full h-14 bg-card border-2 border-destructive text-destructive rounded-[20px] font-semibold hover:bg-destructive/10 transition-colors flex items-center justify-center gap-2"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
