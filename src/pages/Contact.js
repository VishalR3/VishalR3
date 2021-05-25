import { Button, Container, makeStyles, TextField } from "@material-ui/core";

const Contact = () => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.wrapper}>
        <form name="contact" data-netlify="true">
          <TextField
            id="name"
            label="Name"
            fullWidth
            variant="outlined"
            color="secondary"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="mail"
            label="Mail"
            fullWidth
            variant="outlined"
            color="secondary"
            margin="normal"
          />
          <TextField
            id="message"
            color="secondary"
            label="Message"
            multiline
            rows={4}
            fullWidth
            variant="outlined"
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.primary.grey,
    // color: theme.palette.common.light,
    padding: "3rem 1rem",
    borderRadius: "12px",
    marginTop: "2rem",
    marginBottom: "2rem",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16)",
  },
}));
