import css from './Sidebar.module.css';
export function Sidebar() {
    return (<div>
        <nav className={css.nav}>
            <ul>
                <li><a href="">Home</a></li>
                <li id="listElement"><p>Question Forum</p></li>
                <li className={css.lastchild}><a href="">Users</a></li>
            </ul>
        </nav>
    </div>)
}