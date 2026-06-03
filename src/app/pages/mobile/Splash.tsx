import { useNavigate } from "react-router";

export function Splash() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary/80 flex flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center gap-6 max-w-sm">
        <div className="w-24 h-24 bg-white rounded-[20px] flex items-center justify-center shadow-lg">
          <img
              src="/logo/logo_powerpocket.png"
              alt="PowerPocket Logo"
              className="w-12 h-12 object-contain"
            />
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-[32px] font-bold text-white">PowerPocket</h1>
          <p className="text-white/90">Controlled Financial Access</p>
        </div>

        <button
          onClick={() => navigate("/login")}
          className="w-full h-14 bg-white text-primary rounded-[20px] font-semibold hover:bg-white/95 transition-colors mt-8"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
