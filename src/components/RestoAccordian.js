import ItemList from "./ItemList";


const RestoAccordian = ({ resData , showItems , setShowIndex}) => { 
    const handleClick = () => {
        // setItemData(!itemData)
        // if(showItems){
            setShowIndex();
        // }
        // showItems = !showItems;
    }
    return (
        <div className=" w-6/12 mx-auto my-4 p-4 shadow-lg rounded-lg hover:scale-105 hover:transition-[5s]">
            {resData?.title  ? (
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className=" font-bold">
                        {resData?.title + " "}
                        {resData?.itemCards?.length ? "(" + (resData?.itemCards?.length) + ")" : null}
                    </span>
                    <span>{"🖇️"}</span>
                </div>
                )
            : null}

            {showItems && <ItemList items = {resData?.itemCards} />}
        </div>
    )
}

export default RestoAccordian;