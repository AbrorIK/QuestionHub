import css from './Header.module.css';
export function Header() {
    return (<div className={css.header}>
        <h1>Question HUB</h1>
        <input type="text" placeholder="Search..." />
        <h1>User</h1>
    </div>)
}