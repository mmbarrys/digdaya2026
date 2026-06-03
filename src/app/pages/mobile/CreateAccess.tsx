import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, ChevronDown } from "lucide-react";

export function CreateAccess() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [relationship, setRelationship] = useState("Child");

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/configure-access");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="p-4 border-b border-border bg-card">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-border/50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-xl font-semibold text-foreground">Create Access</h1>
        </div>
      </div>

      <div className="flex-1 p-6">
        <form onSubmit={handleContinue} className="max-w-sm mx-auto space-y-6">
          <div className="space-y-2">
            <h2 className="text-[24px] font-bold text-foreground">Recipient Details</h2>
            <p className="text-muted-foreground">Who will receive this access?</p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Recipient Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Ayu Pratama"
              className="w-full h-14 px-4 bg-card border border-border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+62 812 3456 7890"
              className="w-full h-14 px-4 bg-card border border-border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Relationship</label>
            <div className="relative">
              <select
                value={relationship}
                onChange={(e) => setRelationship(e.target.value)}
                className="w-full h-14 px-4 bg-card border border-border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
              >
                <option>Child</option>
                <option>Parent</option>
                <option>Relative</option>
                <option>Other</option>
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
