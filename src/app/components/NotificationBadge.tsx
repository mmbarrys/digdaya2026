import { useNavigate } from "react-router";
import { Bell } from "lucide-react";

interface NotificationBadgeProps {
  count?: number;
}

export function NotificationBadge({ count = 0 }: NotificationBadgeProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/notifications")}
      className="relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-border/20 transition-colors"
    >
      <Bell className="w-6 h-6 text-foreground" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 w-5 h-5 bg-destructive rounded-full flex items-center justify-center text-xs font-semibold text-white">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </button>
  );
}
