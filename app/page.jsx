import Image from "next/image";
import Header from "./components/header/Header";
import Landingblock from "./components/main/landingblock/Landingblock";
import Mywork from "./components/main/mywork/Mywork";

export default function Home() {
  return (

      
        <div className="mt-14 mx-28 xl:mx-72 xl:mt-20">
          <header>
            <Header></Header>
          </header>
          <main>
              <Landingblock></Landingblock>
              <Mywork></Mywork>
          </main> 
        </div>  
      

   
  );
} 
