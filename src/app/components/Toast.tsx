import { Toaster } from "sonner";

export function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        style: {
          background: "var(--card)",
          color: "var(--foreground)",
          border: "1px solid var(--border)",
          borderRadius: "20px",
          padding: "16px",
          fontFamily: "var(--font-family)",
        },
        className: "toast",
      }}
    />
  );
}
