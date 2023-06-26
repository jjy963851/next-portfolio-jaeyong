import Footer from "./footer";
import Header from "./header";


export default function Layout({children}){
    return(
        <div className ="bg white ">
            <Header/>
            <div>{children}</div>
             <Footer/>
        </div>
    );
}