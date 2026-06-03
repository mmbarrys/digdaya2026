import { useState } from "react";
import { useNavigate } from "react-router";
import { Camera, Upload, Scan } from "lucide-react";
import { MerchantLayout } from "../../components/MerchantLayout";
import { ScanAnimation } from "../../components/ScanAnimation";

export function ScanQR() {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      navigate("/merchant/verification");
    }, 1500);
  };

  return (
    <MerchantLayout>
      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground mb-8">Scan QR Code</h1>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-foreground">Position QR Code</h2>
            <p className="text-muted-foreground">Align the QR code within the frame to scan</p>
          </div>

          <div className="bg-card rounded-[20px] p-8 border border-border">
            <div className="relative aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/5 to-secondary/10 rounded-[20px] border-4 border-dashed border-border flex items-center justify-center overflow-hidden">
              {!isScanning ? (
                <div className="text-center space-y-4">
                  <Camera className="w-20 h-20 text-muted-foreground mx-auto" />
                  <p className="text-muted-foreground">Camera preview will appear here</p>
                  <button
                    onClick={handleScan}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-[20px] font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                  >
                    <Scan className="w-5 h-5" />
                    Start Scanning
                  </button>
                </div>
              ) : (
                <ScanAnimation />
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <p className="text-sm text-muted-foreground">or</p>
            <div className="h-px flex-1 bg-border" />
          </div>

          <button className="w-full h-14 bg-card border-2 border-border text-foreground rounded-[20px] font-semibold hover:bg-border/20 transition-colors flex items-center justify-center gap-3">
            <Upload className="w-5 h-5" />
            Upload QR Image
          </button>

          <div className="bg-primary/5 rounded-[20px] p-4 border border-primary/20">
            <p className="text-sm text-foreground text-center">
              <span className="font-semibold">Tip:</span> Make sure the QR code is clearly visible and well-lit
              for best results.
            </p>
          </div>
        </div>
      </div>
    </MerchantLayout>
  );
}
