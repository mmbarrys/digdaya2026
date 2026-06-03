import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ToastProvider } from "./components/Toast";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastProvider />
    </>
  );
}