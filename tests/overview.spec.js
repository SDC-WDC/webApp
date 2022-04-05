/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import * as React from 'react';
import 'regenerator-runtime/runtime.js';
import { render, screen, fireEvent } from '@testing-library/react';
import Overview from '../client/src/components/Overview.jsx';
import StyleSelector from '../client/src/components/Overview/StyleSelector.jsx';
import testData from './testdata.js';

describe('Overview test suite', () => {
  beforeEach(() => {
    const { product } = testData;
    let { styles, reviews } = testData;
    styles = styles.data.results;
    reviews = reviews.data.results;
    render(<Overview product={product} styles={styles} reviews={reviews} />);
  });
  it('Should display product title, category, price and overview information', () => {
    expect(screen.getByText(testData.product.category)).not.toBeNull();
    expect(screen.getByText(testData.product.name)).not.toBeNull();
    expect(screen.getByText(testData.product.default_price)).not.toBeNull();
    expect(screen.getByText(testData.product.slogan)).not.toBeNull();
    expect(screen.getByText(testData.product.description)).not.toBeNull();
  });

  it('Should display average rating of a product, and a link to view all ratings', () => {
    const totalReviews = testData.reviews.data.results.length;
    let reviewSum = 0;
    testData.reviews.data.results.forEach((review) => {
      reviewSum += review.rating;
    });
    const averageReview = (reviewSum / totalReviews).toFixed(1);
    expect(screen.getByText(`Read all ${totalReviews} reviews`, { exact: false })).not.toBeNull();
    expect(screen.getByText(`Rating: ${averageReview} stars.`, { exact: false })).not.toBeNull();
  });

  // ToDo: add negative testing for ratings (don't show ratings with an empty object)
});

describe('Style Selector Test suite', () => {
  it('Should display Style Selector for products with current style name and thumbnails', async () => {
    const styles = testData.styles.data.results;
    const defaultStyle = styles.filter((style) => style['default?'])[0];
    render(<StyleSelector currentStyle={defaultStyle} styles={styles} changeStyle={() => {}} />);
    expect(screen.getByText(defaultStyle.name)).not.toBeNull();
    expect(screen.getAllByRole('img').length).toBe(styles.length);
  });

  it('Clicking a style should send that style to the click handler', () => {
    const styles = testData.styles.data.results;
    const defaultStyle = styles.filter((style) => style['default?'])[0];
    const onClick = jest.fn();
    const instClick = (val) => onClick(val);

    render(<StyleSelector currentStyle={defaultStyle} styles={styles} changeStyle={instClick} />);

    fireEvent.click(screen.getAllByRole('img')[1]);
    expect(onClick).toHaveBeenCalledWith(styles[1]);
  });
});