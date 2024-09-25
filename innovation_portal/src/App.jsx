
import { Search } from 'lucide-react';

const Header = () => (
  <header className=".flex ">
    <img src="./assets/isti-logo.svg" alt="India Science Logo" className="h-12 mb-2" />
    <h1 className="text-2xl font-bold mb-2">भारतीय विज्ञान, प्रौद्योगिकी और नवाचार पोर्टल</h1>
    <div className="relative mb-4">
      <input type="text" placeholder="Search - Keyword, Phrase" className="w-full pl-10 pr-4 py-2 border rounded-md" />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
    </div>
    <img src="/api/placeholder/50/50" alt="Azadi ka Amrit Mahotsav" className="h-12 mb-4" />
  </header>
);





function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
    </div>
  );
}

export default App
