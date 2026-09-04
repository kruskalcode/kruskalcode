"use client";

import { Link as MuiLink } from "@mui/material";
import { trackConversion } from "@/lib/tracking";

const EVENT_BY_TYPE = {
  email: "EMAIL_CLICK",
  phone: "PHONE_CLICK",
  whatsapp: "WHATSAPP_CLICK",
};

export default function TrackedContactLink({
  type = "email",
  href,
  children,
  sx,
}) {
  const eventKey = EVENT_BY_TYPE[type] || "EMAIL_CLICK";
  const isExternal = type === "whatsapp";

  return (
    <MuiLink
      href={href}
      sx={sx}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={type === "whatsapp" ? "Chat with KruskalCode on WhatsApp" : undefined}
      onClick={() => trackConversion(eventKey)}
    >
      {children}
    </MuiLink>
  );
}
