
import * as C from './App.styles';
import { Item } from './types/Item';
import { categories } from './data/categories';
import { Category } from './types/Category';
import { items
 } from './data/items';
 import { TableLine } from './Components/TableItem/styles';

 import {FillterListByMonth, getCurrentMonth} from './Helpers/dataFilter';

 import { useEffect, useState } from 'react';
 import { TableArea } from './Components/TableArea';
import InfoArea from './Components/InfoArea';
import {InputArea} from './Components/InputArea';

 function App() {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth()); // Chamando a função aqui
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    console.log('Mês atual:', currentMonth); // Para depuração
    let filtered = FillterListByMonth(list, currentMonth);
    console.log('Lista filtrada:', filtered); // Para depuração
    setFilteredList(filtered);
  }, [list, currentMonth]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }
  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category]?.expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }
  , [filteredList]);

  const handleAddItem = (item: Item) => {
    setList([...list, item]);
  }
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>

        <C.Body>
        <InfoArea currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
      expense={expense}
        ></InfoArea>

        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList} />

          </C.Body>
    </C.Container>


  );
}

export default App;
