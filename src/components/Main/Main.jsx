import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import useStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import InfoCard from "./InfoCard"
import { ExpenseTrackerContext } from "../../Context/context";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Made with Speechly" />
      <CardContent>
        <Typography variant="h5" align="center">
          Total Balance : ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            lineHeight: "1.5em",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.CardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
