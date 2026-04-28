import { createContext, useContext, useState } from "react";

export const dataContext = createContext();

export function AppDataProvider({children}) {

    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState([
        {id: 1, title: "Easy Harvesting", img: "/Images/R1_0.png" },
        {id: 2, title: "Agriculture Farming", img: "/Images/R1_1.png" },
        {id: 3, title: "Ecological Farming", img: "/Images/R1_2.png" },
        {id: 4, title: "Organic Solutions", img: "/Images/R1_3.png" },
        {id: 5, title: "Fresh Products", img: "/Images/R1_4.png" },
        {id: 6, title: "Healthy Food", img: "/Images/R1_5.png" },
    ]);


    const findCurrentProject = (id) => {
        const value = data.find((item)=> item.id === id);

        return value ?? {};

    }

    return <dataContext.Provider
    value={{
        data,
        findCurrentProject
    }}
    >
        {children}
    </dataContext.Provider>
}

export const useAppData =()=> useContext(dataContext);