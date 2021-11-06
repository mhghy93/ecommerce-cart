import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './home.css';
import { getAllProducts } from '../../redux/product/product.actions';

import AppCard from '../../components/card/AppCard';

const Home = ({ product, getAllProducts }) => {
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  const { products, loading } = product;
  return (
    <div className="home-container">
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <Fragment>
          {products.map((product) => (
            <AppCard product={product} key={product.id} />
          ))}
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  product: state.product,
});

export default connect(mapStateToProps, { getAllProducts })(Home);
