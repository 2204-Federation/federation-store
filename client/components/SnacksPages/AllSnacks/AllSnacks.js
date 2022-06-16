import React, { useEffect } from "react";
import useStyles from "./AllSnackStyles";
import { Container, Typography, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../store/products";
import SingleSnackComponent from "./SingleSnackComponent";
import { fetchAUser } from "../../../store";

const AllSnacks = () => {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);

  const classes = useStyles();
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // const userId = useSelector((state) => state.auth);
  // const user = useSelector((state) => state.user);
  // console.log(userId);

  // useEffect(() => {
  //   if (userId) dispatch(fetchAUser(userId.id)); //user with shopping id

  //   console.log("function ran");
  // }, []);

  const randomListProducts = shuffle(products);

  return (
    <div>
      <main className={classes.root}>
        <div className={classes.toolbar} />
        <Grid container justifyContent="flex-start" spacing={4}>
          {randomListProducts.map((product) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <SingleSnackComponent snack={product} />
              </Grid>
            );
          })}
        </Grid>
      </main>
    </div>
  );
};

export default AllSnacks;
