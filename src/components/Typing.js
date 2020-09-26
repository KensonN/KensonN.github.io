import React from 'react';
import { Grid, Typography, withStyles } from "@material-ui/core";
import Typed from 'typed.js'

const imagePath = process.env.PUBLIC_URL + "/images/VectorPhone.jpg";

const styles = theme => ({
    container: {
        height: "25rem",
        backgroundImage: "url(" + imagePath + ")",
    },
    nameContainer: {
        height: "100%",
        backdropFilter: "brightness(0.4)",        
    },
});
  
class Typing extends React.Component {
    componentDidMount() {
        const options = {
          strings: ["Hi,^250 I'm Kenson!", "UCLA EE 2023"],
          typeSpeed: 50,
          backSpeed: 35,
          loop: true,
          cursorChar: "|",
          backDelay: 500,
        };
        this.typed = new Typed(".name", options);
      }
    componentWillUnmount() {
        this.typed.destroy();
      }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <Grid container className={classes.nameContainer} align={'center'} alignItems={"center"}>
                    <Grid item xs={12}>
                        <Typography variant="h1">
                            <div className={classes.nameBody}>
                                <span className="name"/>
                            </div>
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Typing);