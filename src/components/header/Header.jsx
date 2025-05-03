import "./Header.scss"
import KinoForceLogo from '../../assets/images/logo3 1.svg'
import SearchBtn from "../../assets/images/icons8-search (1) 1.svg"
import LoginImg from '../../assets/images/icons8-user-60 1.svg'

const Header = () => {
    return(
        <header className={'header'}>
            <div className={'header_logo_cont'}>
                <a href={'/'}>
                    <img src={KinoForceLogo} alt={"KinoForce-images"} className={'images'}/>
                </a>
            </div>
            <div className={'header_nav'}>
                <ul>
                    <li><a href={'#'} className={'nav_item'}>Home</a></li>
                    <li><a href={'#'} className={'nav_item'}>Films</a></li>
                    <li><a href={'#'} className={'nav_item'}>Series</a></li>
                    <li><a href={'#'} className={'nav_item'}>For Kids</a></li>
                </ul>
            </div>
            <div className={'header_right_cont'}>
                <div className={'header_src_btn_cont'}>
                    <a href={'#'} className={'search_btn'}>
                        <svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M14.7 1.91998C8.12108 1.91998 2.79999 6.78498 2.79999 12.8C2.79999 18.815 8.12108 23.68 14.7 23.68C17.0488 23.68 19.2226 23.05 21.0656 21.98L29.6625 29.84L32.6375 27.12L24.15 19.38C25.6758 17.55 26.6 15.2825 26.6 12.8C26.6 6.78498 21.2789 1.91998 14.7 1.91998ZM14.7 4.47998C19.7394 4.47998 23.8 8.19248 23.8 12.8C23.8 17.4075 19.7394 21.12 14.7 21.12C9.66053 21.12 5.59999 17.4075 5.59999 12.8C5.59999 8.19248 9.66053 4.47998 14.7 4.47998Z"
                                fill="currentColor"/>
                        </svg>

                    </a>
                </div>
                <div className={'header_sign_btn_cont'}>
                    <button>
                        <img src={LoginImg} alt={'login'}/>
                        Sign in
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header