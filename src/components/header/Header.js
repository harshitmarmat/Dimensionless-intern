import classes from './Header.module.css'

const Header = () => {
    return (
        <header>
            <div className={classes.icon}>
                <img src='https://cdn-user-icons.flaticon.com/52526/52526647/1643035010240.svg?token=exp=1643035912~hmac=a1bdfff286f88a48035f3b3d2c17863a'/>
            </div>
            <div className={classes.list}>
                <ul>
                    <li><img src='https://cdn-user-icons.flaticon.com/52526/52526647/1643025687954.svg?token=exp=1643026589~hmac=62b9840da35897b3154038ff3a24590f'/></li>
                    <li><img src='https://cdn-user-icons.flaticon.com/52526/52526647/1643025612521.svg?token=exp=1643026521~hmac=299633ca8dd1e2fbce5649e4704dbbf4'/></li>
                    <li><img src='https://cdn-user-icons.flaticon.com/52526/52526647/1643025817740.svg?token=exp=1643026719~hmac=a2eb8da740afd0a8075c8cb7fb6b350e'/></li>
                    <li><img src='https://cdn-user-icons.flaticon.com/52526/52526647/1643025976599.svg?token=exp=1643026878~hmac=96779f1e0debd2d492128562d9c97043'/></li>
                    <li><img src='https://cdn-user-icons.flaticon.com/52526/52526647/1643034886189.svg?token=exp=1643035788~hmac=86dd876e65c5c0e18bd7ae09488df1d6'/><span>demo@demois.com</span></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;