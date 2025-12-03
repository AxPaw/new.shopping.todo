export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;

  return (
    <div className="complete-area todo-list">
      <p className="title">完了したリスト</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
