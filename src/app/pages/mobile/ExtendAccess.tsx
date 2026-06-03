import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ChevronLeft } from "lucide-react";
import { toast } from "sonner";

export function ExtendAccess() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [selected, setSelected] = useState("3 Days");

  const options = ["1 Day", "3 Days", "7 Days"];

  const handleUpdate = () => {
    toast.success("Access extended successfully", {
      description: `Extended by ${selected}`,
    });
    setTimeout(() => navigate(`/active-access/${id}`), 1000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="p-4 border-b border-border bg-card">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(`/active-access/${id}`)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-border/50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-xl font-semibold text-foreground">Extend Access</h1>
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="max-w-sm mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-[24px] font-bold text-foreground">Extend Expiry</h2>
            <p className="text-muted-foreground">Choose how long to extend</p>
          </div>

          <div className="space-y-3">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => setSelected(option)}
                className={`w-full h-16 rounded-[20px] font-semibold transition-all ${
                  selected === option
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card border border-border text-foreground hover:bg-border/20"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="bg-card rounded-[20px] p-4 border border-border">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Current Expiry</p>
              <p className="font-semibold text-foreground">10 Jul 2026</p>
            </div>
            <div className="h-px bg-border my-3" />
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">New Expiry</p>
              <p className="font-semibold text-primary">13 Jul 2026</p>
            </div>
          </div>

          <button
            onClick={handleUpdate}
            className="w-full h-14 bg-primary text-primary-foreground rounded-[20px] font-semibold hover:bg-primary/90 transition-colors mt-8"
          >
            Update Expiry
          </button>
        </div>
      </div>
    </div>
  );
}
