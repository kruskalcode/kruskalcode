import ArchitectureIcon from "@mui/icons-material/Architecture";
import CloudIcon from "@mui/icons-material/Cloud";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import GroupsIcon from "@mui/icons-material/Groups";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PsychologyIcon from "@mui/icons-material/Psychology";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WebIcon from "@mui/icons-material/Web";

const icons = {
  Architecture: ArchitectureIcon,
  Cloud: CloudIcon,
  DeveloperMode: DeveloperModeIcon,
  Groups: GroupsIcon,
  Lightbulb: LightbulbIcon,
  PhoneIphone: PhoneIphoneIcon,
  Psychology: PsychologyIcon,
  TrendingUp: TrendingUpIcon,
  Web: WebIcon,
};

export default function ServiceIcon({ name, ...props }) {
  const Icon = icons[name] || WebIcon;
  return <Icon {...props} />;
}
