import Footer from "./footer";
import Header from "./header";


export default function Layout({children}){
    return(
        <div className ="bg white dark:bg-slate-600">
            <Header/>
            <div>{children}</div>
             <Footer/>
        </div>
    );
}