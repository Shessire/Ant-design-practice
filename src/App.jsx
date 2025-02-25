import './App.css'
import '@ant-design/v5-patch-for-react-19';
import Buttons from './components/Buttons'
import CRUD from './components/CRUD'
import DatePickers from './components/DatePickers'
import Filters from './components/Filters'
import Forms from './components/Forms'
import Icons from './components/Icons'
import Inputs from './components/Inputs'
import Progresses from './components/Progresses'
import SelectRow from './components/SelectRow'
import Selects from './components/Selects'
import Spins from './components/Spins'
import Tables from './components/Tables'

function App() {

  return (
    <>
      <Buttons />
      <Inputs />
      <Selects />
      <Forms />
      <Tables />
      <DatePickers />
      <Spins />
      <Progresses />
      <Filters />
      <SelectRow />
      <Icons />
      <CRUD />
    </>
  )
}

export default App
