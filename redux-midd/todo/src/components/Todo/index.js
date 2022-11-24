import { Row, Checkbox } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoLislSlice } from '../TodoList/TodosSlice';
// import { toggleTodoStatus } from '../../redux/actions';

export default function Todo({ name, completed, id }) {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(completed);

  const toggleCheckbox = () => {
    setChecked(!checked);
    // dispatch(toggleTodoStatus(id));
    dispatch(todoLislSlice.actions.changeTodoStatus(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
    </Row>
  );
}
