import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Card from './Card';
import Topbar from './Topbar';

function App() {

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="row ">
          <Topbar />
          <div class=" container px-4 px-lg-5 mt-5">
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
