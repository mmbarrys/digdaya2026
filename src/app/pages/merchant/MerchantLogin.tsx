import { useState } from "react";
import { useNavigate } from "react-router";
import { Store } from "lucide-react";

export function MerchantLogin() {
  const navigate = useNavigate();
  const [merchantId, setMerchantId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/merchant/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-primary rounded-[20px] flex items-center justify-center mx-auto">
            <Store className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-[32px] font-bold text-foreground">PowerPocket</h1>
            <p className="text-muted-foreground">Merchant Portal</p>
          </div>
        </div>

        <form onSubmit={handleLogin} className="bg-card rounded-[20px] p-8 border border-border space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Merchant ID</label>
            <input
              type="text"
              value={merchantId}
              onChange={(e) => setMerchantId(e.target.value)}
              placeholder="Enter merchant ID"
              className="w-full h-14 px-4 bg-background border border-border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full h-14 px-4 bg-background border border-border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full h-14 bg-primary text-primary-foreground rounded-[20px] font-semibold hover:bg-primary/90 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Having trouble? <span className="text-primary font-semibold cursor-pointer">Contact Support</span>
        </p>
      </div>
    </div>
  );
}
