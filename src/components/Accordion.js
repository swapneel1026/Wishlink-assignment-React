import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ProductCard from "../components/ProductCard";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div style={{ position: "relative", top: "0.7rem" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "3rem" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontWeight: "600",
              fontSize: "1.4rem",
            }}
          >
            DIOR Backstage Foundation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-content">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "3rem" }} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontWeight: "600",
              fontSize: "1.4rem",
            }}
          >
            DIOR Backstage Foundation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="Accordion-content">
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
