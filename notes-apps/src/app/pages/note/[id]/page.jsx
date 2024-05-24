"use client"
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView, useBlockNoteContext, useCreateBlockNote,lightDefaultTheme } from "@blocknote/react";
import "@blocknote/react/style.css";

export default function Note({params}){
    const id = params.id;
    const listCategories = ["To do list", "Business", "Collage", "Shopping"]
    const editor = useCreateBlockNote();
    const lightRedTheme = {
        colors: {
          editor: {
            text: "#222222",
            background: "#DCD7C9",
          },
          menu: {
            text: "#ffffff",
            background: "#2C3639",
          },
          tooltip: {
            text: "#ffffff",
            background: "#2C3639",
          },
          hovered: {
            text: "#ffffff",
            background: "#2C3639",
          },
          selected: {
            text: "#ffffff",
            background: "#c50000",
          },
          disabled: {
            text: "#9b0000",
            background: "#7d0000",
          },
          shadow: "#2C3640",
          border: "#2C3639",
          sideMenu: "#bababa",
          highlights: lightDefaultTheme.colors?.highlights,
        },
        borderRadius: 4,
        fontFamily: "Helvetica Neue, sans-serif",
      }
    return(
        <div className="w-full h-screen mt-0 bg-yellow-light p-5 overflow-x-hidden overflow-y-auto">
            <div className="mb-5 flex justify-between items-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.414 3.27197C21.7889 3.64703 21.9995 4.15565 21.9995 4.68597C21.9995 5.2163 21.7889 5.72492 21.414 6.09997L11.514 16L21.414 25.9C21.7783 26.2772 21.9799 26.7824 21.9753 27.3068C21.9708 27.8312 21.7604 28.3328 21.3896 28.7036C21.0188 29.0744 20.5172 29.2848 19.9928 29.2893C19.4684 29.2939 18.9632 29.0923 18.586 28.728L7.27197 17.414C6.89703 17.0389 6.6864 16.5303 6.6864 16C6.6864 15.4696 6.89703 14.961 7.27197 14.586L18.586 3.27197C18.961 2.89703 19.4696 2.6864 20 2.6864C20.5303 2.6864 21.0389 2.89703 21.414 3.27197Z" fill="#2C3639"/>
                </svg>
                <div className="flex justify-between items-center gap-2">
                    <div className="bg-cyan-dark p-2 rounded-full">
                        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M4.37132 5.24967L6.27297 7.15132L5.21231 8.21198L1.5 4.49967L5.21231 0.787354L6.27297 1.84802L4.37132 3.74967H9.75C13.0637 3.74967 15.75 6.43596 15.75 9.7497C15.75 13.0634 13.0637 15.7497 9.75 15.7497H3V14.2497H9.75C12.2353 14.2497 14.25 12.235 14.25 9.7497C14.25 7.26438 12.2353 5.24967 9.75 5.24967H4.37132Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="bg-cyan-dark p-2 rounded-full rotate-180">
                        <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M4.37132 5.24967L6.27297 7.15132L5.21231 8.21198L1.5 4.49967L5.21231 0.787354L6.27297 1.84802L4.37132 3.74967H9.75C13.0637 3.74967 15.75 6.43596 15.75 9.7497C15.75 13.0634 13.0637 15.7497 9.75 15.7497H3V14.2497H9.75C12.2353 14.2497 14.25 12.235 14.25 9.7497C14.25 7.26438 12.2353 5.24967 9.75 5.24967H4.37132Z" fill="white"/>
                        </svg>
                    </div>

                </div>
            </div>
            <header className="border-b border-black px-[50px] mb-2 pb-2">
                <input type="text" className="w-full h-[50px] bg-transparent overflow-x-auto text-4xl font-bold border-b-2 border-transparent focus:border-black focus:outline-none " placeholder="Title"  />
                <div className="block mt-2">
                    <label htmlFor="created">Created at : </label>
                    <input type="date" name="created" className="w-[115px] h-[20px] bg-transparent overflow-x-auto font-light" />
                </div>
                <div className="block my-2">
                    <label htmlFor="lastedit" >Last edit : </label>
                    <input type="date" name="lastedit" className="w-[115px] h-[20px] bg-transparent overflow-x-auto font-light" disabled />
                </div>
                <div className="block my-2">
                    <label htmlFor="categories" >Categories : </label>
                    <select name="categories" className="w-[115px] h-[25px] bg-transparent overflow-x-auto font-light" title="Categories">
                        {
                            listCategories.map((category,index) => {
                                return <option value={category} key={index} >{category}</option>
                            })
                        }
                    </select>
                </div>
            </header>
            <div>
                <BlockNoteView editor={editor} theme={lightRedTheme}/>
            </div>
        </div>
    );
}