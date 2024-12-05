import React from 'react';
import styles from './FlipkartNavbar.module.css';

const FlipkartNavbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img
                    src="./img/fkheaderlogo_exploreplus_mobile-39120d.svg"
                    alt="Flipkart Logo"
                />
            </div>
            <div className={styles.searchBar}>
                <input
                    type="text"
                    placeholder="Search for products, brands and more"
                    className={styles.searchInput}
                />
                <button className={styles.searchButton}>Search</button>
            </div>
            <div className={styles.actions}>
                <button className={styles.loginButton}>Login</button>
                <div className={styles.moreDropdown}>
                    <span>More</span>
                    <div className={styles.dropdownContent}>
                        <a href="#" >Notification Preferences</a>
                        <a href="#">Customer Care</a>
                        <a href="#">Advertise</a>
                    </div>
                </div>
                <div className={styles.cart}>
                    <img
                        src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
                        alt="Cart"
                    />
                    <span>Cart</span>
                </div>
            </div>
        </nav>
    );
};

export default FlipkartNavbar;
