import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography, Button, Card, CardContent } from "@mui/material";

const ShowingData = () => {
  const { state }: any = useLocation();
  const navigation = useNavigate();

  return (
    <div style={{ padding: 24, justifyContent: "center", display: "flex", marginTop: '5em' }}>
      <Card style={{ padding: "1em", border: "1px solid black" }}>
        <Typography variant="h5" style={{ textAlign: "center" }} data-testid="heading">PostDetails</Typography>
        <CardContent>
          <Typography variant="h6" data-testid="jsonData">{JSON.stringify(state)}</Typography>
        </CardContent>
        <div style={{ textAlign: "end" }}>
          <Button onClick={() => navigation(-1)} variant="outlined" data-testid="button">
            Back
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ShowingData;
