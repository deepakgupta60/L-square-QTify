import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';



export default function FaqSection() {
  return (
    <div>
<Typography sx={{textAlign:"center"}} variant="h1" component="h2">
  FAQ
</Typography>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Is QTify free to use?
        </AccordionSummary>
        <AccordionDetails>
        Yes! It is 100% free, and has 0% ads!
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Can I download and listen to songs offline?
        </AccordionSummary>
        <AccordionDetails>
        Can I download and listen to songs offline?
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
}
