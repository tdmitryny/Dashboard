import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PointOfSaleOutlinedIcon from '@mui/icons-material/PointOfSaleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import './widget.css';

export const  Widget = ({type})=> {
let data;
const amount = 100;
const diff = 20;

switch(type){
    case 'user' : 
    data ={
        title:"USERS",
        isMoney:false,
        link: "See All Users",
        icon: (
            <PersonOutlineOutlinedIcon className='icon__widget'
             style={{color:"crimson",
              backgroundColor: 'rgba(255,0,0,0.2)'}}/>
        )
    };
    break;
    case 'order' : 
    data ={
        title:"ORDERS",
        isMoney:false,
        link: "View All Orders",
        icon: (
            <ShoppingCartOutlinedIcon className='icon__widget'
            style={{color:"goldenrod",
              backgroundColor: 'rgba(218,165,32,0.2)'}}/>
        )
    };
    break;
    case 'earning' : 
    data ={
        title:"EARNING",
        isMoney:true,
        link: "Viewe Net Earning",
        icon: (
            <PointOfSaleOutlinedIcon className='icon__widget'
            style={{color:"green",
              backgroundColor: 'rgba(0,128,0,0.2)'}}
            />
        )
    };
    break;
    case 'balance' : 
    data ={
        title:"BALANCE",
        isMoney:true,
        link: "See Details",
        icon: (
            <AccountBalanceWalletOutlinedIcon className='icon__widget'
            style={{color:"purple",
              backgroundColor: 'rgba(128,0,128,0.2)'}}/>
        )
    };

    break;
    default:
    break;
}


  return (
    <div className='widget'>
        <div className="left">
            <span className="titles">{data.title}</span>
            <span className="counters">{data.isMoney && '$'}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpOutlinedIcon/>
                {diff}%</div>
                {data.icon}
        </div>
    </div>
  )
}

export default Widget