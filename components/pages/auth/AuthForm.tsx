import React from 'react';

interface Props {
  children: React.ReactNode;
}

const AuthForm = ({ children }: Props) => {
  return (
    <div className="max-w-[530px] min-h-[504px] bg-white px-[65px] py-[60px] flex flex-col items-center justify-between mx-auto mt-8 gap-[98px] rounded-[10px]">
      {children}
    </div>
  );
};

export default AuthForm;
