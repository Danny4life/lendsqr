import WidgetIcon1 from "../icon/WidgetIcon1";
import WidgetIcon2 from "../icon/WidgetIcon2";
import WidgetIcon3 from "../icon/WidgetIcon3";
import WidgetIcon4 from "../icon/WidgetIcon4";

const Widget = ({ type }) => {

    let data;

    switch(type){
        case "users":
            data = {
                icon : <WidgetIcon1 className="icon" />,
                title : "Users",
                usersTotal : "2,453",
            };
            break;

        case "active":
            data = {
                icon : <WidgetIcon2 className="icon" />,
                title : "Active Users",
                usersTotal : "2453",
            };
            break;

        case "loan" :
            data = {
                icon : <WidgetIcon3 className="icon" />,
                title : "Users with loan",
                usersTotal : "12,453",
            };
            break;
        case "savings" :
            data = {
                icon : <WidgetIcon4 className="icon" />,
                title : "Users with savings",
                usersTotal : "102,453",
            };
            break;
            default:
                break;

    }
    return ( 
        <div>
            <div className="box">
                <div className="box-items">
                    <div className="widgetIcon">
                        {data.icon}
                    </div>
                    <h1 className="widget-title">{data.title}</h1>
                    <h1 className="widget-total">{data.usersTotal}</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Widget;


