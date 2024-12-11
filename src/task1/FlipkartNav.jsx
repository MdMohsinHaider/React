import style from "./Flipkartnav.module.css";
import { CiUser } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

function FlipkartNav() {
    return (
        <>

            <nav>

                {/* 1st part */}
                <aside className={style.logo}>
                    <img src="./img/fkheaderlogo_exploreplus_mobile-39120d.svg" alt="" srcset="" />
                </aside>



                {/* 2nd part */}
                <section className={style.searchContainer}>
                    <div className={style.ser}>
                        <input type="text" name="search" className={style.testfild} />
                        <input type="button" value="Search" className={style.btn} />
                    </div>
                </section>




                {/* 3rd part */}
                <ul>
                    <li><CiUser />login</li>
                    <li> <FaShoppingCart />cart</li>
                    <li>become a seller</li>
                    <li>...</li>
                </ul>
            </nav>
        </>
    )
}

export default FlipkartNav;