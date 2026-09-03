"use client";

import { useState } from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  budgetOptions,
  projectTypeOptions,
  timelineOptions,
} from "@/data/conversion";
import { company } from "@/data/site";
import { trackLeadConversion } from "@/lib/tracking";

const fieldSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    bgcolor: "#f8fafc",
    fontSize: "15px",
    color: "#0f172a",
    "& fieldset": { borderColor: "#e2e8f0" },
    "&:hover fieldset": { borderColor: "#fcb51e" },
    "&.Mui-focused fieldset": { borderColor: "#fcb51e" },
  },
  "& .MuiOutlinedInput-input": {
    color: "#0f172a",
    WebkitTextFillColor: "#0f172a",
    caretColor: "#0f172a",
  },
  "& .MuiSelect-select": {
    color: "#0f172a",
  },
  "& .MuiInputLabel-root": { fontSize: "14px", color: "#64748b" },
  "& .MuiInputLabel-root.Mui-focused": { color: "#fcb51e" },
  "& .MuiSvgIcon-root": { color: "#64748b" },
};

const initialState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  wantToBuild: "",
  projectType: "",
  budget: "",
  timeline: "",
  details: "",
  consent: false,
};

function buildMailtoBody(values) {
  return [
    `Name: ${values.name}`,
    `Company: ${values.company}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "N/A"}`,
    `What they want to build: ${values.wantToBuild}`,
    `Project type: ${values.projectType}`,
    `Budget: ${values.budget}`,
    `Timeline: ${values.timeline}`,
    `Project details: ${values.details}`,
  ].join("\n");
}

export default function LeadQualificationForm({
  id = "project-form",
  source = "contact",
  compact = false,
}) {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";
  const formAccessKey = process.env.NEXT_PUBLIC_FORM_ACCESS_KEY || "";

  const update = (field) => (event) => {
    const value =
      event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const markSuccess = (submittedValues) => {
    trackLeadConversion({
      source,
      projectType: submittedValues.projectType,
      budget: submittedValues.budget,
    });
    setStatus("success");
    setValues(initialState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setStatus("submitting");

    if (!values.consent) {
      setStatus("idle");
      setError("Please confirm we may contact you about this project inquiry.");
      return;
    }

    try {
      if (formEndpoint) {
        const payload = {
          ...values,
          access_key: formAccessKey || undefined,
          subject: `KruskalCode project inquiry — ${values.company || values.name}`,
          from_name: values.name,
          source,
          page: typeof window !== "undefined" ? window.location.href : source,
        };

        const response = await fetch(formEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Form endpoint returned an error");
        }

        markSuccess(values);
        return;
      }

      const subject = encodeURIComponent(
        `Project inquiry — ${values.company || values.name}`,
      );
      const body = encodeURIComponent(buildMailtoBody(values));
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
      markSuccess(values);
    } catch {
      setStatus("idle");
      setError(
        "We couldn't send the form automatically. Please email us at info@kruskalcode.com or try again.",
      );
    }
  };

  return (
    <Box
      id={id}
      sx={{
        bgcolor: "#fff",
        border: "1px solid #e2e8f0",
        borderRadius: 2,
        p: { xs: 3, md: compact ? 3.5 : 4.5 },
        boxShadow: "0 12px 40px rgba(15,23,42,0.06)",
      }}
    >
      {status === "success" ? (
        <Box sx={{ py: { xs: 1, md: 2 } }}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 22, md: 26 },
              fontWeight: 800,
              color: "#0f172a",
              mb: 1.5,
            }}
          >
            Thank you. We&apos;ve received your project details.
          </Typography>
          <Typography sx={{ color: "#475569", fontSize: 16, lineHeight: 1.8, mb: 3 }}>
            Your request has been sent to our team. We&apos;ll review the information
            and get back to you.
          </Typography>
          {company.scheduleUrl ? (
            <Typography sx={{ color: "#64748b", fontSize: 15, lineHeight: 1.7 }}>
              Need to speak with us sooner?{" "}
              <Box
                component="a"
                href={company.scheduleUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#0f172a", fontWeight: 700, textDecoration: "underline" }}
              >
                Schedule a consultation
              </Box>
              .
            </Typography>
          ) : null}
        </Box>
      ) : (
        <Box component="form" onSubmit={handleSubmit}>
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: 22, md: 26 },
              fontWeight: 800,
              color: "#0f172a",
              mb: 1,
            }}
          >
            Discuss Your Project
          </Typography>
          <Typography sx={{ color: "#64748b", mb: 3, fontSize: 15, lineHeight: 1.7 }}>
            Share a few details so we can respond with relevant next steps. Fields
            marked with * are required.
          </Typography>

          {error ? (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          ) : null}

          <Grid container spacing={2.5}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Name"
                name="name"
                autoComplete="name"
                value={values.name}
                onChange={update("name")}
                sx={fieldSx}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                label="Company"
                name="company"
                autoComplete="organization"
                value={values.company}
                onChange={update("company")}
                sx={fieldSx}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                type="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={values.email}
                onChange={update("email")}
                sx={fieldSx}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone (optional)"
                name="phone"
                autoComplete="tel"
                value={values.phone}
                onChange={update("phone")}
                sx={fieldSx}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label="What do you want to build?"
                name="wantToBuild"
                value={values.wantToBuild}
                onChange={update("wantToBuild")}
                sx={fieldSx}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth required sx={fieldSx}>
                <InputLabel id={`${id}-project-type`}>Project type</InputLabel>
                <Select
                  labelId={`${id}-project-type`}
                  label="Project type"
                  name="projectType"
                  value={values.projectType}
                  onChange={update("projectType")}
                >
                  {projectTypeOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth required sx={fieldSx}>
                <InputLabel id={`${id}-budget`}>Estimated budget</InputLabel>
                <Select
                  labelId={`${id}-budget`}
                  label="Estimated budget"
                  name="budget"
                  value={values.budget}
                  onChange={update("budget")}
                >
                  {budgetOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth required sx={fieldSx}>
                <InputLabel id={`${id}-timeline`}>Timeline</InputLabel>
                <Select
                  labelId={`${id}-timeline`}
                  label="Timeline"
                  name="timeline"
                  value={values.timeline}
                  onChange={update("timeline")}
                >
                  {timelineOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                multiline
                minRows={4}
                label="Project details"
                name="details"
                value={values.details}
                onChange={update("details")}
                sx={fieldSx}
              />
            </Grid>
            <Grid item xs={12}>
              <Stack direction="row" spacing={1.5} alignItems="flex-start">
                <Box
                  component="input"
                  type="checkbox"
                  id={`${id}-consent`}
                  checked={values.consent}
                  onChange={update("consent")}
                  required
                  style={{ marginTop: 4 }}
                />
                <Typography
                  component="label"
                  htmlFor={`${id}-consent`}
                  sx={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}
                >
                  I agree to be contacted about this project inquiry. See our{" "}
                  <Box
                    component="a"
                    href="/privacy-policy/"
                    sx={{ color: "#0f172a", textDecoration: "underline" }}
                  >
                    Privacy Policy
                  </Box>
                  .
                </Typography>
              </Stack>
              <FormHelperText sx={{ mt: 1, mx: 0 }}>
                We use your details only to respond to this inquiry.
              </FormHelperText>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                disabled={status === "submitting"}
                sx={{
                  bgcolor: "#fcb51e",
                  color: "#0f172a",
                  fontWeight: 800,
                  fontSize: 15,
                  px: 4,
                  py: 1.4,
                  borderRadius: 999,
                  textTransform: "none",
                  width: { xs: "100%", sm: "auto" },
                  boxShadow: "none",
                  "&:hover": { bgcolor: "#e09f16", boxShadow: "none" },
                }}
              >
                {status === "submitting" ? "Sending…" : "Discuss My Project"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}
