import headerStyles from '../styles/Header.module.css';

const Header = () => {
    const val = 5;

    return ( 
        <div>
            <h1 className={headerStyles.title}>
                <span>WebDev</span> News
            </h1>
            <p className={headerStyles.description}>keep update with latest <b>web dev</b> news</p>
            <h2 className="test">...</h2>
            <style jsx>
                {`
                    .test {
                        color: ${ val > 3 ? '#23439e' :  'green'};
                        text-align: center;
                    }
                `}
            </style>

        </div>
     );
}
 
export default Header;