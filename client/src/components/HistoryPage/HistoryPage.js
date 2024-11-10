import React, { useEffect, useState } from "react";
import axios from "axios";
import { SVC_ENDPOINTS } from "../../consts/api";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Cookies from "universal-cookie";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "./HistoryPage.css";

const HistoryPage = () => {
    const [attempts, setAttempts] = useState([]);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchAttempts = async () => {
        try {

          const cookies = new Cookies();
          const userId = cookies.get("userId");

          const response = await axios.get(`${SVC_ENDPOINTS.history}/history/${userId}`);
          console.log(response.data);
          setAttempts(response.data);
        } catch (err) {
          setError(err);
        }
      };
  
      fetchAttempts();
    }, [] );
  
    return (
      <div className="history-page">
        <Typography variant="h4" align="center" gutterBottom>
          Past Attempts
        </Typography>
  
        {error ? (
          <Typography color="error" align="center">{error}</Typography>
        ) : (
          <div className="history-accordion">
            {attempts.map((attempt) => (
              <Accordion key={attempt._id} className="history-item">
                <AccordionSummary expandIcon={<ArrowDropDownIcon />} aria-controls="panel1-content" id={`panel-${attempt._id}`}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: "100%" }}>
                    <Typography variant="h6">Question ID: {attempt.questionId}</Typography>
                    <Typography color="textSecondary">{new Date(attempt.timestamp).toLocaleDateString()}</Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography align="left" color="secondary">
                    Attempt Details: {attempt.attemptDetails}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  export default HistoryPage;