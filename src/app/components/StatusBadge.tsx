interface StatusBadgeProps {
  status: "active" | "redeemed" | "expired" | "revoked" | "valid" | "completed";
  size?: "sm" | "md" | "lg";
}

export function StatusBadge({ status, size = "md" }: StatusBadgeProps) {
  const configs = {
    active: {
      bg: "bg-success/10",
      text: "text-success",
      label: "ACTIVE",
    },
    redeemed: {
      bg: "bg-success/10",
      text: "text-success",
      label: "REDEEMED",
    },
    expired: {
      bg: "bg-muted",
      text: "text-muted-foreground",
      label: "EXPIRED",
    },
    revoked: {
      bg: "bg-destructive/10",
      text: "text-destructive",
      label: "REVOKED",
    },
    valid: {
      bg: "bg-success/10",
      text: "text-success",
      label: "VALID",
    },
    completed: {
      bg: "bg-success/10",
      text: "text-success",
      label: "COMPLETED",
    },
  };

  const config = configs[status];
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-xs",
    lg: "px-4 py-1.5 text-sm",
  };

  return (
    <span
      className={`inline-block ${config.bg} rounded-full ${sizeClasses[size]} font-semibold ${config.text}`}
    >
      {config.label}
    </span>
  );
}
