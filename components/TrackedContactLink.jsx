"use client";

import { Link as MuiLink } from "@mui/material";
import { trackConversion } from "@/lib/tracking";

export default function TrackedContactLink({
  type = "email",
  href,
  children,
  sx,
}) {
  const eventKey = type === "phone" ? "PHONE_CLICK" : "EMAIL_CLICK";

  return (
    <MuiLink
      href={href}
      sx={sx}
      onClick={() => trackConversion(eventKey)}
    >
      {children}
    </MuiLink>
  );
}
