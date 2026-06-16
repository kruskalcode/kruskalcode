import React from "react";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import {
  slideInLeft,
  slideInRight,
  fadeUp,
  staggerContainer,
} from "@/components/MotionBox";
import { whyChooseUs } from "@/data/site";

/**
 * Reusable "Why Choose Us" section.
 *
 * @param {Object} props
 * @param {boolean} [props.reverse=false] - If true, image appears on the left and text on the right.
 */
export default function WhyChooseUs({ reverse = false }) {
  // Determine order based on `reverse`
  const imageFirst = reverse;
  return (
    <Box component="section" sx={{ bgcolor: "#ffffff", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{ order: { xs: 1, md: imageFirst ? 1 : 2 } }}
          >
            {/* Image */}
            <motion.div
              variants={imageFirst ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="/assets/choose-us.jpg"
                alt="KruskalCode software development team collaboration"
                width={600}
                height={400}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 4,
                }}
              />
            </motion.div>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ order: { xs: 2, md: imageFirst ? 2 : 1 } }}
          >
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Typography
                sx={{
                  mb: 1.5,
                  color: "#fcb51e",
                  fontWeight: 800,
                  letterSpacing: 2.2,
                  textTransform: "uppercase",
                }}
              >
                About KruskalCode
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  mb: 3,
                  fontSize: { xs: 36, md: 48 },
                  fontWeight: 800,
                  color: "#0f172a",
                }}
              >
                Why Choose Us?
              </Typography>
              <Typography
                sx={{ mb: 2, lineHeight: 1.8, fontSize: 16, color: "#475569" }}
              >
                KruskalCode is a leading software development company known for
                its expertise in creating high-quality, innovative solutions.
                They prioritize customer satisfaction by collaborating closely
                with clients and employing agile methodologies for flexibility
                and rapid iteration. With a proven track record and a focus on
                cutting‑edge technologies, KruskalCode ensures scalable and
                effective software that aligns with your business goals.
              </Typography>
              <List disablePadding>
                {whyChooseUs.map((item) => (
                  <ListItem
                    key={item}
                    sx={{ px: 0, py: 1, alignItems: "flex-start" }}
                  >
                    <ListItemIcon sx={{ minWidth: 40, mt: "2px" }}>
                      <CheckCircleIcon sx={{ color: "#fcb51e" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontWeight: 700,
                        fontSize: 17,
                        color: "#0f172a",
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
