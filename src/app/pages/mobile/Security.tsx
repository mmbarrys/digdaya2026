import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, RefreshCw } from "lucide-react";

export function Security() {
  const navigate = useNavigate();
  const [pin, setPin] = useState("4837");
  const [requirePin, setRequirePin] = useState(true);
  const [allowExtension, setAllowExtension] = useState(false);

  const generatePin = () => {
    const newPin = Math.floor(1000 + Math.random() * 9000).toString();
    setPin(newPin);
  };

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/review");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="p-4 border-b border-border bg-card">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/configure-access")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-border/50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-xl font-semibold text-foreground">Security</h1>
        </div>
      </div>

      <div className="flex-1 p-6">
        <form onSubmit={handleContinue} className="max-w-sm mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-[24px] font-bold text-foreground">Security Settings</h2>
            <p className="text-muted-foreground">Protect your access with PIN</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">PIN Code</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))}
                maxLength={4}
                className="flex-1 h-14 px-4 bg-card border border-border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary text-center text-[24px] font-bold tracking-widest"
                required
              />
              <button
                type="button"
                onClick={generatePin}
                className="w-14 h-14 bg-secondary/20 rounded-[20px] flex items-center justify-center hover:bg-secondary/30 transition-colors"
              >
                <RefreshCw className="w-5 h-5 text-primary" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground">Click refresh to auto-generate a PIN</p>
          </div>

          <div className="bg-card rounded-[20px] p-4 border border-border space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Require PIN</p>
                <p className="text-xs text-muted-foreground">Merchant must verify PIN</p>
              </div>
              <button
                type="button"
                onClick={() => setRequirePin(!requirePin)}
                className={`w-12 h-7 rounded-full transition-colors ${
                  requirePin ? "bg-primary" : "bg-border"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    requirePin ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>

            <div className="h-px bg-border" />

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Allow Extension</p>
                <p className="text-xs text-muted-foreground">Recipient can extend expiry</p>
              </div>
              <button
                type="button"
                onClick={() => setAllowExtension(!allowExtension)}
                className={`w-12 h-7 rounded-full transition-colors ${
                  allowExtension ? "bg-primary" : "bg-border"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    allowExtension ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
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
