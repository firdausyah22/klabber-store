import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import {
  AboutPage,
  BlogPage,
  FaqPage,
  HomePage,
  HowToOrderPage,
  ProductPage,
  LoginPage,
  DashboardPage,
  ListProductPage,
  ListCategoryPage,
} from "../Pages";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Redirect path="/" to="/home" exact />
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/products" exact>
          <ProductPage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/faq" exact>
          <FaqPage />
        </Route>
        <Route path="/how-to-order" exact>
          <HowToOrderPage />
        </Route>
        <Route path="/blog" exact>
          <BlogPage />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/dashboard" exact>
          <DashboardPage />
        </Route>
        <Route path="/admin/products" exact>
          <ListProductPage />
        </Route>
        <Route path="/admin/category" exact>
          <ListCategoryPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
