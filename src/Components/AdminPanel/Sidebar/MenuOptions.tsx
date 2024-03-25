import DashboardIcon from "@mui/icons-material/Dashboard";
import PhonePausedIcon from "@mui/icons-material/PhonePaused";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
export default function () {
  const data = [
    {
      id: 0,
      label: "Dep-Return Details",
      topLabel: "Departure And Return Details",
      img: <DashboardIcon />,
      path: "/admin/generalinfo",
    },
    {
      id: 1,
      label: "Inventory",
      topLabel: "Inventory Details",
      img: <PhonePausedIcon />,
      path: "/admin/inventory",
    },
    {
      id: 2,
      label: "Subscription",
      img: <SubscriptionsIcon />,
      path: "/admin/subscription",
    },
  ];
  return data;
}
