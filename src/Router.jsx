import React from 'react'
import {Switch, Route} from 'react-router';
import {Auth, SignIn, SignUp, Reset, ProductEdit, ProductList, ProductDetail} from './templates/index'

const Router = () => {
  return ( 
    <Switch>
      <Route exact path={"/signin"} component={SignIn}></Route>
      <Route exact path={"/signup"} component={SignUp}></Route>
      <Route exact path={"/signin/reset"} component={Reset}></Route>
      <Auth>
        <Route path={"/product/edit(/:id)?"} component={ProductEdit} ></Route>
        <Route exact path={"/product/:id"} component={ProductDetail} ></Route>
        <Route exact path={"(/)?"} component={ProductList}></Route>
      </Auth>
    </Switch>
  )
}

export default Router