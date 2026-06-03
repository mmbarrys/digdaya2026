import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Search, Filter, Check, Clock, XCircle, Ban, Inbox } from "lucide-react";
import { EmptyState } from "../../components/EmptyState";

export function History() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Active");
  const tabs = ["Active", "Redeemed", "Expired", "Revoked"];

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="sticky top-0 bg-card border-b border-border z-10">
        <div className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-border/50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <h1 className="text-xl font-semibold text-foreground">History</h1>
          </div>

          <div className="flex gap-2 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full h-12 pl-12 pr-4 bg-background border border-border rounded-[20px] focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button className="w-12 h-12 bg-background border border-border rounded-[20px] flex items-center justify-center hover:bg-border/20 transition-colors">
              <Filter className="w-5 h-5 text-foreground" />
            </button>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground"
                    : "bg-background border border-border text-foreground hover:bg-border/20"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-3">
        {activeTab === "Active" && (
          <>
            <div className="bg-card rounded-[20px] p-4 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">Ayu Pratama</p>
                      <p className="text-sm text-muted-foreground">Alfamart</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">Rp500.000</p>
                      <div className="inline-block px-2 py-1 bg-success/10 rounded-full mt-1">
                        <p className="text-xs font-semibold text-success">ACTIVE</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Expires: 10 Jul 2026</span>
                    <span>•</span>
                    <span>5 days left</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-[20px] p-4 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">Budi Santoso</p>
                      <p className="text-sm text-muted-foreground">Indomaret</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">Rp1.000.000</p>
                      <div className="inline-block px-2 py-1 bg-success/10 rounded-full mt-1">
                        <p className="text-xs font-semibold text-success">ACTIVE</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>Expires: 8 Jul 2026</span>
                    <span>•</span>
                    <span>3 days left</span>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "Redeemed" && (
          <>
            <div className="bg-card rounded-[20px] p-4 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">Dewi Lestari</p>
                      <p className="text-sm text-muted-foreground">Alfamart</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">Rp750.000</p>
                      <div className="inline-block px-2 py-1 bg-success/10 rounded-full mt-1">
                        <p className="text-xs font-semibold text-success">REDEEMED</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Redeemed: 2 Jul 2026, 14:32
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-[20px] p-4 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-success" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">Eko Prasetyo</p>
                      <p className="text-sm text-muted-foreground">Indomaret</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">Rp300.000</p>
                      <div className="inline-block px-2 py-1 bg-success/10 rounded-full mt-1">
                        <p className="text-xs font-semibold text-success">REDEEMED</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Redeemed: 30 Jun 2026, 10:15
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === "Expired" && (
          <>
            <div className="bg-card rounded-[20px] p-4 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">Siti Rahma</p>
                      <p className="text-sm text-muted-foreground">Any Merchant</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">Rp250.000</p>
                      <div className="inline-block px-2 py-1 bg-muted rounded-full mt-1">
                        <p className="text-xs font-semibold text-muted-foreground">EXPIRED</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">Expired: 28 Jun 2026</div>
                </div>
              </div>
            </div>

            <EmptyState
              icon={Inbox}
              title="No More Expired Access"
              description="You've seen all expired access tokens. They will appear here when they expire."
              action={{
                label: "Create New Access",
                onClick: () => navigate("/create-access"),
              }}
            />
          </>
        )}

        {activeTab === "Revoked" && (
          <>
            <div className="bg-card rounded-[20px] p-4 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
                  <Ban className="w-5 h-5 text-destructive" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">Ahmad Fauzi</p>
                      <p className="text-sm text-muted-foreground">Alfamart</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">Rp400.000</p>
                      <div className="inline-block px-2 py-1 bg-destructive/10 rounded-full mt-1">
                        <p className="text-xs font-semibold text-destructive">REVOKED</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground">Revoked: 25 Jun 2026</div>
                </div>
              </div>
            </div>

            <EmptyState
              icon={Inbox}
              title="No More Revoked Access"
              description="Access tokens you revoke will appear here for your records."
            />
          </>
        )}
      </div>
    </div>
  );
}
