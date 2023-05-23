import Button from "../../common/Button";
import './CalWrapper.css'
const CalWrapper = (props) => {

    const {allBtArr, oprationArr } = props;

      const  allButton = allBtArr ?  allBtArr.map((btObj) => {
        return    <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun} />
    }) : [];

    const  allOprationBt = oprationArr ?  oprationArr.map((btObj) => {
        return    <Button key={btObj.value} btName={btObj.value} btFun={btObj.btFun} />
    }) : [];


    

    return (
        <div className="main-cal">
        
        <div className="bt-name">
        {allButton}
        </div>
       <div className="op-name">
       {allOprationBt}
       </div>
        </div>
    )
};

export default CalWrapper;