const ItemList = ({items}) => {
    return (
        <div>
            {items?.map((item) => (
                <div key={item?.card?.info?.id}
                className="p-2 m-4 border-gray-200 border-b-2 text-left"
                >
                    <div>
                        <span>{item?.card?.info?.name}</span>
                        <span> - ₹{item?.card?.info?.price / 100}</span>
                    </div>
                    <p>{item?.card?.info?.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ItemList;