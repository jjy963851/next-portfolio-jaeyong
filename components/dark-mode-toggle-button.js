import { useTheme } from 'next-themes'

export default function DarkModeToggleButton(){

    // theme : 현재 값 가져오기 getter
    // setTheme : 현재 값 바꾸기 setter
    
    const { theme, setTheme } = useTheme()
    return (
        <>
            <button
                className="
                    inline-flex items-center
               border-0 py-1 px-3 rounded text-base mt-4 md:mt-0
                focus:outline-none
                bg-gray-100
                hover:bg-gray-50
                hover:text-orange-500
               
                "
                type="button"
                onClick={() => setTheme('light')}
            >
                {/* 라이트 모드 */}
                <svg xmlns="http://www.w3.org/2000/svg"
                        className="visible dark:invisible dark:h-0 dark:w-0 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
            </button>

            <button className ="  inline-flex items-center
                     border-0 py-1 px-3 rounded text-base mt-4 md:mt-0
                     focus:outline-none
                    
                    
                     text-slate-400
                     hover:bg-slate-700
                     hover:text-yellow-300"
                    type = "button"
                    onClick={() => setTheme('dark')}>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clip-rule="evenodd" />
                    </svg>


            </button>
        </>
    );
}