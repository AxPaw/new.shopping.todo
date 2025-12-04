import iggy from '../assets/ita.png';
import { useState } from 'react';

const style = {
  backgroundColor: '#e2539b',
  width: '400px',
  height: '30px',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  const [isFuwa, setIsFuwa] = useState(false);

  const handleClick = () => {
    setIsFuwa(true);
    onClick();
    setTimeout(() => setIsFuwa(false), 1000);
  };
  return (
    <div style={style}>
      <input
        disabled={disabled}
        placeholder="入力してね"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={handleClick}>
        追加
      </button>
      <div style={{ flex: 0.5 }}></div>
      <img
        src={iggy}
        alt="イタグレのロゴ"
        className={`logo ${isFuwa ? 'fuwa' : ''}`}
      />
    </div>
  );
};
