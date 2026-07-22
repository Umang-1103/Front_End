import React, { useCallback, useMemo, useState } from "react";


const ListItem = React.memo(({ item, onClick }) => {
    console.log("Render:", item);

    return (

        <p onClick={() => onClick(item)}>
            {item}
        </p>

    )

});




const LargeList = () => {


    const [count, setCount] = useState(0);



    const items = useMemo(() => {


        return Array.from(
            { length: 1000 },
            (_, i) => `Item ${i}`
        );


    }, []);



    const handleClick = useCallback((item) => {


        console.log("Clicked:", item);


    }, []);




    return (

        <div>


            <h2>
                Count : {count}
            </h2>


            <button
                onClick={() => setCount(count + 1)}
            >
                Increase
            </button>



            {
                items.map((item) => (

                    <ListItem

                        key={item}

                        item={item}

                        onClick={handleClick}

                    />

                ))

            }



        </div>

    )

}


export default LargeList;