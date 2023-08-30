import { AppBar, Switch, Toolbar, Typography } from '@mui/material'

interface Prop{
    themeChangeHandler: () => void,
}

const Header = ({themeChangeHandler} : Prop) => {
  return (
      <AppBar position='static' sx={{mb: 4}}>
          <Toolbar>
              <Typography variant='h4'>My Store</Typography>
              <Switch inputProps={{ 'aria-label': 'controlled',  }}
                onChange={themeChangeHandler}
              />
        </Toolbar>
      </AppBar>
  )
}

export default Header