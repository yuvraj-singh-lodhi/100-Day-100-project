import React from 'react';

const Buttons = (props) => {
  return (
    <div className='px-2 py-1 border-white bg-[#FFDCAB] hover:text-[#AB682E] transition-all rounded-full' style={{ width: '130px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {props.title}
    </div>
  );
};

export default Buttons;
