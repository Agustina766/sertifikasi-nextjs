import TeachCard from "./Teachcard";

export default function Teachs() {
    return(
      <> 
      <div className="bg-slate-800 w-screen min-h-{300px} p-8">
      <h1 className="text-4xl text-white font-bold mb-4">Teachs</h1>
      <div className="w-32 border-2 mb-8"/>
      <div className="flex justify-center items-center w-full">
      <TeachCard 
      imageURL= "/Image/C++.jpg"
        techStack= "C++"/>
        <TeachCard imageURL="/Image/Python.jpg"
        techStack= "Python"/>
       <TeachCard imageURL="/Image/JS.jpg"
        techStack= "Java Script"/>
  
      </div>
      </div>
      </>
    );
  }