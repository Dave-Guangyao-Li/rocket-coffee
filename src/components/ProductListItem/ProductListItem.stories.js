import React from 'react';
// import { storiesOf } from '@storybook/react';
import ProductListItem from './ProductListItem';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
// storiesOf('Product List Item', module)
//     .add('standard', () => <ProductListItem />)

export default {
    title: 'Product List Item',
    decorators: [withKnobs]
};

export const standard = () => (
    <ProductListItem
        name={text("Standard Coffee")}
        price={text("price", "2.50")}
        onAddToCart={action("Add to cart clicked")}
        imageUrl={text("imageUrl", "https://source.unsplash.com/tNALoIZhqVM/200x100/")}
        isSouldOut={text("isSouldOut", false)}
    />
);