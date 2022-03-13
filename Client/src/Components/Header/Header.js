import React from 'react';
import "../../css/Header/Header.css";
import { words } from '../../static';
function Header() {
    return (
        <header>
            {words.headerTitle}
        </header>
    );
};
export default Header;
