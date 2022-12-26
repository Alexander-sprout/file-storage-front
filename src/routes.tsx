import React from 'react'
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'
import { Files } from './pages/files'
import { Folders } from './pages/folder'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} component={Folders} exact />
        <Route path={'/folder/:folderId'} component={Files} exact />
      </Switch>
    </Router>
  )
}