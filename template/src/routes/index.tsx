import { Route, Routes as MainRoutes } from 'react-router-dom'

import { Home, About } from 'pages'

export const Routes = (): JSX.Element => (
  <MainRoutes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </MainRoutes>
)
