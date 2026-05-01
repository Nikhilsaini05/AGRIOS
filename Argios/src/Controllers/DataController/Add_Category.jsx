import { createContext, useContext, useState } from "react";
import { supabase } from "../../Backend/supabase_client";
// Ensure you have your supabase client imported

export const itemContext = createContext();

export function CategoryDataProvider({ children }) {
    
    const [formData, setFormData] = useState({ name: '', image: null, preview: '' });

    // // --- FETCH DATA FROM SUPABASE ---
   
        const [Categoryitems, setCategoryItems] = useState([])



        const getDataFromServices = async () => {

            const { data, error } = supabase.from("Servies").select("*");
            if (error) {
                alert("Unable to get data from database.");
                return;
            }

            setCategoryItems(data);
        }






        const insertDataToServices = async (e) => {
            e.preventDefault();

            try {
                if (!formData.image) {
                    console.error("Please select an image");
                    return;
                }

                const path = `${Date.now()}-${formData.image.name}`;

                const { error: uploadError } = await supabase.storage
                    .from("agrios_images")
                    .upload(path, formData.image);

                if (uploadError) throw uploadError;

                const { data: urlData } = supabase.storage
                    .from("agrios_images")
                    .getPublicUrl(path);

                if (urlData?.publicUrl) {
                    const { error: insertError } = await supabase
                        .from('Servies')
                        .insert({
                            Product_Name: formData.name,
                            Image: urlData.publicUrl,
                        })
                        .select();

                    if (insertError) throw insertError;

                    setFormData({ name: '', image: null, preview: '' });
                    console.log("Success: Data and Image uploaded!");

                } else {
                    console.error("Unable to process image request");
                }
            } catch (error) {
                console.error("Operation failed:", error.message);
            }
        };

        return (
            <itemContext.Provider value={{getDataFromServices, insertDataToServices, Categoryitems, setCategoryItems}}>
                {children}
            </itemContext.Provider>
        );
    }

export const useCategoryData = () => useContext(itemContext);