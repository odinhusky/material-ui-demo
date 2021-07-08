import React from 'react'

import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core'
import { PhotoCamera } from '@material-ui/icons'
import useStyles from './style'


export default function App() {

  const classes = useStyles();
  const cards = [1,2,3,4,5,6,7,8,9];

  return (
    <>
      <CssBaseline />
      <AppBar
        position="relative"
      >
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography
            variant="h6"
          >
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div class={classes.container}>
          <Container maxWidth="md">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugiat doloremque at consequuntur est itaque aliquid maiores enim dolorem velit dolor iste explicabo ex, error voluptates. Accusantium sequi aperiam sed?
            </Typography>

            <div>
              <Grid container spacing={3} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" className={classes.buttons}>SEE MY Photos</Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined" color="primary" className={classes.buttons}>SECONDARY ACTION</Button>
                </Grid>
              </Grid>
            </div>

            <Container className={classes.cardGrid} maxWidth="md">
              <Grid container spacing={4}>
                {
                  cards.map(card => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          title="Image Title"
                          image="https://source.unsplash.com/random" />
                          
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5">
                            Heading
                          </Typography>

                          <Typography gutterBottom variant="h5">
                            This is a media card. You want to use on website.
                          </Typography>

                          <CardActions>
                            <Button size="small" color="primary">View</Button>
                            <Button size="small" color="primary">Edit</Button>
                          </CardActions>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))
                }
              </Grid>
            </Container>
          </Container>
        </div>
      </main>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" className={classes.footerTitle}>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          gutterBottom
          color="textSecondary">
          Footer text blablablablablablablablablablablablablablabla
        </Typography>
      </footer>
    </>
  )
}