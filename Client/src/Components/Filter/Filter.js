import React from 'react';
import "../../css/Filter/Filter.css";
function Filter(props) {
    const {size , sort , handleFilterBySize , handleFilterBySort} = props;
    return (
        <div className="filter-wrapper">
            <h2 className="filter-wrapper-title">Filter</h2>
            <div className="num-of-products">Number Of Products : 4</div>
            <div className="filter-by-size">
                <span>Filter</span>
                <select value={size} onChange={handleFilterBySize} className="filter-select">
                    <option value="all">ALL</option>
                    <option value="xs">XS</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">XXL</option>
                </select>
            </div>
            <div className="filter-by-size">
                <span>Order</span>
                <select value={sort} onChange={handleFilterBySort} className="filter-select">
                    <option value="latest">Latest</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
        </div>
    );
};
export default Filter;