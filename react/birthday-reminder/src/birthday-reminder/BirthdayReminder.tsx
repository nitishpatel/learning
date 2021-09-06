import {
  Card,
  Container,
  Grid,
  Paper,
  Typography,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Button,
} from "@material-ui/core";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  mainDiv: {
    backgroundColor: "#fab1a0",
    height: "100vh",
  },
  tile: {
    margin: theme.spacing(1),
    width: "90%",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  itemPrimaryText: {
    color: "#2d3436",
    paddingLeft: "10px",
    fontSize: "1.2rem",
  },
  itemSecondaryText: {
    color: "#2d3436",
    paddingLeft: "10px",
    fontSize: "1rem",
  },
  cardstyle: {
    flexDirection: "column",
    width: "50%",
    display: "flex",
    alignItems: "center",
    margin: 10,
    justifyContent: "center",
    backgroundColor: "#dfe6e9",
  },
}));
export interface Person {
  name: string;
  image: string;
  date: string;
}
const BirthdayCard = (props: Person) => {
  const classes = useStyles();
  return (
    <div className={classes.tile}>
      <Card>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.large} src={props.image} />
          </ListItemAvatar>
          <ListItemText
            classes={{
              primary: classes.itemPrimaryText,
              secondary: classes.itemSecondaryText,
            }}
            primary={props.name}
            secondary={props.date}
          />
        </ListItem>
      </Card>
    </div>
  );
};
const BirthdayReminder = () => {
  const [listOfBirthdays, setListOfBirthdays] = useState<Person[]>([
    {
      name: "John Doe",
      image:
        "https://avatars.dicebear.com/api/human/JohnDoe.svg?background=%23dfe6e9",
      date: "12/12/2020",
    },
    {
      name: "Mr Robot",
      image:
        "https://avatars.dicebear.com/api/human/MrRobot.svg?background=%23dfe6e9",
      date: "12/12/2020",
    },
    {
      name: "Elliot Alderson",
      image:
        "https://avatars.dicebear.com/api/human/Elliot.svg?background=%23dfe6e9",
      date: "12/12/2020",
    },
    {
      name: "Ironman",
      image:
        "https://avatars.dicebear.com/api/human/IronMan.svg?background=%23dfe6e9",
      date: "12/12/2020",
    },
    {
      name: "Steve",
      image:
        "https://avatars.dicebear.com/api/human/steve.svg?background=%23dfe6e9",
      date: "12/12/2020",
    },
  ]);
  let classes = useStyles();

  return (
    <div className={classes.mainDiv}>
      <Container style={{ paddingTop: "40px" }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={0}
        >
          <Card className={classes.cardstyle} style={{}}>
            <Typography
              style={{ textAlign: "center", padding: "10px" }}
              variant="h3"
            >
              Birthday Reminder
            </Typography>
            {listOfBirthdays.map((person) => {
              return <BirthdayCard {...person} />;
            })}
            <Button
              style={{ textAlign: "center", margin: "10px" }}
              variant="contained"
              onClick={() => {
                setListOfBirthdays([]);
              }}
              color="secondary"
            >
              Clear All
            </Button>
          </Card>
        </Grid>
      </Container>
    </div>
  );
};

export default BirthdayReminder;
