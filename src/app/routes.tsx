import { createBrowserRouter } from "react-router";
import { Splash } from "./pages/mobile/Splash";
import { Login } from "./pages/mobile/Login";
import { Dashboard } from "./pages/mobile/Dashboard";
import { CreateAccess } from "./pages/mobile/CreateAccess";
import { ConfigureAccess } from "./pages/mobile/ConfigureAccess";
import { Security } from "./pages/mobile/Security";
import { Review } from "./pages/mobile/Review";
import { AccessGenerated } from "./pages/mobile/AccessGenerated";
import { ActiveAccessDetail } from "./pages/mobile/ActiveAccessDetail";
import { ExtendAccess } from "./pages/mobile/ExtendAccess";
import { History } from "./pages/mobile/History";
import { Profile } from "./pages/mobile/Profile";
import { Notifications } from "./pages/mobile/Notifications";
import { ReceiverQR } from "./pages/receiver/ReceiverQR";
import { MerchantLogin } from "./pages/merchant/MerchantLogin";
import { MerchantDashboard } from "./pages/merchant/MerchantDashboard";
import { ScanQR } from "./pages/merchant/ScanQR";
import { Verification } from "./pages/merchant/Verification";
import { ReleaseFunds } from "./pages/merchant/ReleaseFunds";
import { Success } from "./pages/merchant/Success";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Splash,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/create-access",
    Component: CreateAccess,
  },
  {
    path: "/configure-access",
    Component: ConfigureAccess,
  },
  {
    path: "/security",
    Component: Security,
  },
  {
    path: "/review",
    Component: Review,
  },
  {
    path: "/access-generated",
    Component: AccessGenerated,
  },
  {
    path: "/active-access/:id",
    Component: ActiveAccessDetail,
  },
  {
    path: "/extend-access/:id",
    Component: ExtendAccess,
  },
  {
    path: "/history",
    Component: History,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/notifications",
    Component: Notifications,
  },
  {
    path: "/receiver/:token",
    Component: ReceiverQR,
  },
  {
    path: "/merchant",
    Component: MerchantLogin,
  },
  {
    path: "/merchant/dashboard",
    Component: MerchantDashboard,
  },
  {
    path: "/merchant/scan",
    Component: ScanQR,
  },
  {
    path: "/merchant/verification",
    Component: Verification,
  },
  {
    path: "/merchant/release",
    Component: ReleaseFunds,
  },
  {
    path: "/merchant/success",
    Component: Success,
  },
]);
