import styles from "./Nav.module.css";

const Nav = ({text}) => {
    return(
        <nav className={styles.nav}>
            <a className={styles.navText}>RUSSIAN VERSION</a>
            <svg className={styles.logo} width="43" height="40" viewBox="0 0 43 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_5)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6727 7.00835C22.6727 6.12603 22.4263 5.25583 21.9527 4.46665C21.5434 3.78449 21.3031 3.04066 21.246 2.27946L21.1091 0.454559L20.9723 2.2794C20.9151 3.0406 20.6748 3.78445 20.2655 4.46662C19.792 5.25582 19.5455 6.12605 19.5455 7.00839V32.9916C19.5455 33.8739 19.792 34.7442 20.2655 35.5334C20.6748 36.2156 20.9151 36.9594 20.9723 37.7207L21.1091 39.5455L21.246 37.7206C21.3031 36.9594 21.5434 36.2156 21.9527 35.5334C22.4263 34.7442 22.6727 33.874 22.6727 32.9916V7.00835ZM14.1345 7.07271C14.6081 7.86189 14.8545 8.73214 14.8545 9.61446V30.3856C14.8545 31.268 14.6081 32.1382 14.1345 32.9274C13.7252 33.6095 13.4849 34.3534 13.4277 35.1145L13.2909 36.9394L13.1541 35.1145C13.0969 34.3534 12.8566 33.6095 12.4473 32.9274C11.9737 32.1382 11.7273 31.268 11.7273 30.3856V9.61446C11.7273 8.73214 11.9737 7.86189 12.4473 7.07271C12.8566 6.39054 13.0969 5.6467 13.1541 4.8855L13.2909 3.06063L13.4277 4.8855C13.4849 5.6467 13.7252 6.39054 14.1345 7.07271ZM10.9455 12.2205C10.9455 11.3381 10.699 10.4679 10.2254 9.67879C9.81612 8.99658 9.57578 8.25275 9.51869 7.49154L9.38182 5.66667L9.24495 7.49154C9.18786 8.25275 8.94751 8.99658 8.53821 9.67879C8.0647 10.4679 7.81818 11.3381 7.81818 12.2205V27.7795C7.81818 28.6618 8.0647 29.5321 8.53821 30.3212C8.94751 31.0035 9.18786 31.7472 9.24495 32.5085L9.38182 34.3333L9.51869 32.5085C9.57578 31.7472 9.81612 31.0035 10.2254 30.3212C10.699 29.5321 10.9455 28.6618 10.9455 27.7795V12.2205ZM6.31634 14.8908C6.78985 15.6801 7.03636 16.5502 7.03636 17.4326V22.5674C7.03636 23.4497 6.78985 24.32 6.31634 25.1091C5.90704 25.7913 5.66669 26.5351 5.60959 27.2963L5.47273 29.1212L5.33586 27.2963C5.27877 26.5351 5.03842 25.7913 4.62912 25.1091C4.15561 24.32 3.90909 23.4497 3.90909 22.5674V17.4326C3.90909 16.5502 4.15561 15.6801 4.62912 14.8908C5.03842 14.2087 5.27877 13.4648 5.33586 12.7037L5.47273 10.8788L5.60959 12.7037C5.66669 13.4648 5.90704 14.2087 6.31634 14.8908ZM3.12712 20L3.12727 20.0387V19.9613L3.12712 20ZM0 20.0387L0.000157753 20C0.00725063 20.8691 0.253433 21.7255 0.720026 22.5031C1.12933 23.1853 1.36968 23.9291 1.42677 24.6903L1.56364 26.5152L1.7005 24.6903C1.7576 23.9291 1.99795 23.1853 2.40725 22.5031C2.87384 21.7255 3.12002 20.8691 3.12712 20C3.12002 19.1309 2.87384 18.2746 2.40725 17.497C1.99795 16.8148 1.7576 16.071 1.7005 15.3098L1.56364 13.4849L1.42677 15.3098C1.36968 16.071 1.12933 16.8148 0.720026 17.497C0.253433 18.2746 0.00725065 19.1309 0.000157753 20L0 19.9613V20.0387ZM18.0436 11.0848C18.5172 11.874 18.7636 12.7442 18.7636 13.6265V26.5152C18.7636 27.3976 18.5172 28.2677 18.0436 29.0569C17.6343 29.7391 17.394 30.4829 17.3368 31.2441L17.2 33.069L17.0632 31.2441C17.006 30.4829 16.7657 29.7391 16.3564 29.0569C15.8828 28.2677 15.6364 27.3976 15.6364 26.5152V13.6265C15.6364 12.7442 15.8828 11.874 16.3564 11.0848C16.7657 10.4026 17.006 9.65878 17.0632 8.89758L17.2 7.07271L17.3368 8.89758C17.394 9.65878 17.6343 10.4026 18.0436 11.0848ZM25.8618 11.0393C26.3353 11.8285 26.5818 12.6987 26.5818 13.5811L26.5 26.5152C26.5 27.3976 26.2535 28.2677 25.7799 29.0569C25.3707 29.7391 25.1304 30.4829 25.0732 31.2441L24.9364 33.069L24.7995 31.2441C24.7424 30.4829 24.5021 29.7391 24.0928 29.0569C23.6192 28.2677 23.3727 27.3976 23.3727 26.5152L23.4545 13.5811C23.4545 12.6987 23.701 11.8285 24.1746 11.0393C24.5839 10.3572 24.8242 9.61333 24.8814 8.85214L25 7.07271L25.155 8.85214C25.2122 9.61333 25.4525 10.3572 25.8618 11.0393ZM30.4909 9.61446C30.4909 8.73214 30.2444 7.86189 29.7709 7.07271C29.3616 6.39054 29.1213 5.6467 29.0641 4.8855L28.9273 3.06063L28.7905 4.8855C28.7333 5.6467 28.493 6.39054 28.0837 7.07271C27.6101 7.86189 27.3636 8.73214 27.3636 9.61446V30.3856C27.3636 31.268 27.6101 32.1382 28.0837 32.9274C28.493 33.6095 28.7333 34.3534 28.7905 35.1145L28.9273 36.9394L29.0641 35.1145C29.1213 34.3534 29.3616 33.6095 29.7709 32.9274C30.2444 32.1382 30.4909 31.268 30.4909 30.3856V9.61446ZM33.6799 9.67879C34.1535 10.4679 34.4 11.3381 34.4 12.2205V27.7795C34.4 28.6618 34.1535 29.5321 33.6799 30.3212C33.2707 31.0035 33.0304 31.7472 32.9732 32.5085L32.8364 34.3333L32.6995 32.5085C32.6424 31.7472 32.4021 31.0035 31.9928 30.3212C31.5193 29.5321 31.2727 28.6618 31.2727 27.7795V12.2205C31.2727 11.3381 31.5193 10.4679 31.9928 9.67879C32.4021 8.99658 32.6424 8.25275 32.6995 7.49154L32.8364 5.66667L32.9732 7.49154C33.0304 8.25275 33.2707 8.99658 33.6799 9.67879ZM38.3091 17.4326C38.3091 16.5502 38.0626 15.6801 37.589 14.8908C37.1798 14.2087 36.9394 13.4648 36.8823 12.7037L36.7455 10.8788L36.6086 12.7037C36.5515 13.4648 36.3112 14.2087 35.9019 14.8908C35.4284 15.6801 35.1818 16.5502 35.1818 17.4326V22.5674C35.1818 23.4497 35.4284 24.32 35.9019 25.1091C36.3112 25.7913 36.5515 26.5351 36.6086 27.2963L36.7455 29.1212L36.8823 27.2963C36.9394 26.5351 37.1798 25.7913 37.589 25.1091C38.0626 24.32 38.3091 23.4497 38.3091 22.5674V17.4326ZM42.218 20C42.2181 20.0129 42.2182 20.0258 42.2182 20.0387V19.9613C42.2182 19.9743 42.2181 19.9871 42.218 20ZM39.0911 20C39.0981 20.8691 39.3443 21.7255 39.811 22.5031C40.2202 23.1853 40.4606 23.9291 40.5177 24.6903L40.6545 26.5152L40.7914 24.6903C40.8485 23.9291 41.0888 23.1853 41.4981 22.5031C41.9648 21.7255 42.2109 20.8691 42.218 20C42.2109 19.1309 41.9648 18.2746 41.4981 17.497C41.0888 16.8148 40.8485 16.071 40.7914 15.3098L40.6545 13.4849L40.5177 15.3098C40.4606 16.071 40.2202 16.8148 39.811 17.497C39.3443 18.2746 39.0981 19.1309 39.0911 20ZM39.0911 20C39.091 19.9871 39.0909 19.9743 39.0909 19.9613V20.0387C39.0909 20.0258 39.091 20.0129 39.0911 20Z" fill="#394149"/>
            </g>
            </svg>
            <a className={styles.navText}>ENGLISH VERSION</a>
        </nav>
    );
}

export default Nav;