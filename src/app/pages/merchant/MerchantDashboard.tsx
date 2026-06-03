import { useNavigate } from "react-router";
import { QrCode, TrendingUp, DollarSign, Clock } from "lucide-react";
import { MerchantLayout } from "../../components/MerchantLayout";

export function MerchantDashboard() {
  const navigate = useNavigate();

  return (
    <MerchantLayout>
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-[20px] p-6 border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Today's Transactions</p>
                <p className="text-2xl font-bold text-foreground">24</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-[20px] p-6 border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Funds Released</p>
                <p className="text-2xl font-bold text-foreground">Rp8.750.000</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-[20px] p-6 border border-border">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pending Verification</p>
                <p className="text-2xl font-bold text-foreground">3</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-[20px] p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Scan Customer QR</h2>
              <p className="text-white/90">Ready to verify a PowerPocket access</p>
            </div>
            <button
              onClick={() => navigate("/merchant/scan")}
              className="px-8 h-14 bg-white text-primary rounded-[20px] font-semibold hover:bg-white/95 transition-colors flex items-center gap-3"
            >
              <QrCode className="w-6 h-6" />
              Scan QR
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">Recent Transactions</h3>
          <div className="bg-card rounded-[20px] border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-background border-b border-border">
                  <tr>
                    <th className="text-left p-4 text-sm font-semibold text-foreground">Reference</th>
                    <th className="text-left p-4 text-sm font-semibold text-foreground">Recipient</th>
                    <th className="text-left p-4 text-sm font-semibold text-foreground">Amount</th>
                    <th className="text-left p-4 text-sm font-semibold text-foreground">Date & Time</th>
                    <th className="text-left p-4 text-sm font-semibold text-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-background/50 transition-colors">
                    <td className="p-4">
                      <p className="font-mono text-sm text-foreground">PP202607030142</p>
                    </td>
                    <td className="p-4">
                      <p className="font-medium text-foreground">Dewi Lestari</p>
                    </td>
                    <td className="p-4">
                      <p className="font-semibold text-foreground">Rp750.000</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-muted-foreground">03 Jul 2026, 15:42</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-success/10 rounded-full text-xs font-semibold text-success">
                        COMPLETED
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-background/50 transition-colors">
                    <td className="p-4">
                      <p className="font-mono text-sm text-foreground">PP202607030128</p>
                    </td>
                    <td className="p-4">
                      <p className="font-medium text-foreground">Eko Prasetyo</p>
                    </td>
                    <td className="p-4">
                      <p className="font-semibold text-foreground">Rp300.000</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-muted-foreground">03 Jul 2026, 14:28</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-success/10 rounded-full text-xs font-semibold text-success">
                        COMPLETED
                      </span>
                    </td>
                  </tr>
                  <tr className="border-b border-border hover:bg-background/50 transition-colors">
                    <td className="p-4">
                      <p className="font-mono text-sm text-foreground">PP202607030095</p>
                    </td>
                    <td className="p-4">
                      <p className="font-medium text-foreground">Siti Rahma</p>
                    </td>
                    <td className="p-4">
                      <p className="font-semibold text-foreground">Rp500.000</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-muted-foreground">03 Jul 2026, 11:15</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-success/10 rounded-full text-xs font-semibold text-success">
                        COMPLETED
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-background/50 transition-colors">
                    <td className="p-4">
                      <p className="font-mono text-sm text-foreground">PP202607030074</p>
                    </td>
                    <td className="p-4">
                      <p className="font-medium text-foreground">Ahmad Fauzi</p>
                    </td>
                    <td className="p-4">
                      <p className="font-semibold text-foreground">Rp1.250.000</p>
                    </td>
                    <td className="p-4">
                      <p className="text-sm text-muted-foreground">03 Jul 2026, 09:34</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-block px-3 py-1 bg-success/10 rounded-full text-xs font-semibold text-success">
                        COMPLETED
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </MerchantLayout>
  );
}
