import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronDown } from "lucide-react";

export function ConfigureAccess() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("500000");
  const [expiry, setExpiry] = useState("7 Days");
  const [merchant, setMerchant] = useState("Alfamart");
  const [maxRedemption, setMaxRedemption] = useState("1");

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/security");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="p-4 border-b border-border bg-card">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/create-access")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-border/50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-xl font-semibold text-foreground">Configure Access</h1>
        </div>
      </div>

      <div className="flex-1 p-6">
        <form onSubmit={handleContinue} className="max-w-sm mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-[24px] font-bold text-foreground">Access Settings</h2>
            <p className="text-muted-foreground">Set limits and restrictions</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Amount</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">Rp</span>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/\D/g, ""))}
                className="w-full h-14 pl-12 pr-4 bg-card border border-border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary text-[20px] font-semibold"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Expiry</label>
            <div className="relative">
              <select
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="w-full h-14 px-4 bg-card border border-border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
              >
                <option>24 Hours</option>
                <option>3 Days</option>
                <option>7 Days</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Merchant</label>
            <div className="relative">
              <select
                value={merchant}
                onChange={(e) => setMerchant(e.target.value)}
                className="w-full h-14 px-4 bg-card border border-border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
              >
                <option>Alfamart</option>
                <option>Indomaret</option>
                <option>Any Merchant</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Max Redemption</label>
            <div className="relative">
              <select
                value={maxRedemption}
                onChange={(e) => setMaxRedemption(e.target.value)}
                className="w-full h-14 px-4 bg-card border border-border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
              >
                <option>1 Time</option>
                <option>2 Times</option>
                <option>3 Times</option>
                <option>Unlimited</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <button
            type="submit"
            className="w-full h-14 bg-primary text-primary-foreground rounded-[20px] font-semibold hover:bg-primary/90 transition-colors mt-8"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
