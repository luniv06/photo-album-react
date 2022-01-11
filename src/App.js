import React from 'react';
import { Typography, AppBar, Card, Button, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant='h6'>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth='sm'>
            <Typography variant='h2' color='textPrimary' align='center' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' color='textSecondary' align='center' paragraph>
              Hello everyone,this is a photo album and i'm trying to make this sentence as long as possible.
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify='center'>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {cards.map(() => (
              <Grid item key={cards} xs={12} sm={6} md={4} >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image='https://source.unsplash.com/random' title='image title' />
                  <CardContent className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card, add content here
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant='h6' align='center' color='textPrimary'>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'>
          more info about footer
        </Typography>
      </footer>
    </>
  );
}

export default App;
