'use client';

import React, { createContext, useState, useContext, useCallback } from 'react';
import { ErrorIcon, SuccessIcon } from './SnackIcon';

const SnackContext = createContext(undefined);

export const useSnack = () => {
  const context = useContext(SnackContext);
  if (!context) {
    throw new Error('useSnack must be used within a SnackProvider');
  }
  return context;
};

export const CalendarSnackProvider = ({ children }) => {
  const [snacks, setSnacks] = useState([]);

  const createSnack = useCallback((message, variant = 'success') => {
    const id = Date.now();
    const newSnack = { id, message, variant, visible: true };
    setSnacks([newSnack]);

    const hideTimeout = setTimeout(() => {
      setSnacks((prev) => prev.map((snack) =>
        snack.id === id ? { ...snack, visible: false } : snack
      ));
    }, 2500);

    const removeTimeout = setTimeout(() => {
      setSnacks((prev) => prev.filter((snack) => snack.id !== id));
    }, 3000);

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  return (
    <SnackContext.Provider value={{ createSnack }}>
      {children}
      <div className="fixed bottom-4 left-4 z-50 space-y-2">
        {snacks.map((snack) => (
          <div
            key={snack.id}
            className={`${
              snack.visible ? 'opacity-100 translate-y-0' : 'translate-y-4 opacity-0'
            } flex items-center space-x-4 divide-x divide-slate-200 rounded-xl bg-white p-4 pr-5 text-slate-500 shadow transition-all duration-500 ease-in-out`}
            role="alert"
          >
            {getVariantIcon(snack.variant)}
            <div className="max-w-md ps-4 text-ellipsis font-normal">{snack.message}</div>
          </div>
        ))}
      </div>
    </SnackContext.Provider>
  );
};

const getVariantIcon = (variant) => {
  switch (variant) {
    case 'success':
      return <SuccessIcon />;
    case 'error':
      return <ErrorIcon />;
    default:
      return null; // gracefully handle unknown variants
  }
};



// 'use client';

// import React, { createContext, useState, useContext, useCallback } from 'react';
// import { ErrorIcon, SuccessIcon } from './SnackIcon';

// const SnackContext = createContext(undefined);

// export const useSnack = () => {
//   const context = useContext(SnackContext);
//   if (!context) {
//     throw new Error('useSnack must be used within a SnackProvider');
//   }
//   return context;
// };

// export const SnackProvider = ({ children }) => {
//   const [snacks, setSnacks] = useState([]);

//   const createSnack = useCallback((message, variant) => {
//     const id = Date.now();
//     const newSnack = { id, message, variant, visible: true };
//     setSnacks([newSnack]);

//     setTimeout(() => {
//       setSnacks((prevSnacks) =>
//         prevSnacks.map((snack) =>
//           snack.id === id ? { ...snack, visible: false } : snack,
//         ),
//       );
//     }, 2500);

//     setTimeout(() => {
//       setSnacks((prevSnacks) => prevSnacks.filter((snack) => snack.id !== id));
//     }, 3000);
//   }, []);

//   return (
//     <SnackContext.Provider value={{ createSnack }}>
//       {children}
//       <div>
//         {snacks.map((snack) => (
//           <div
//             key={snack.id}
//             className={`${
//               snack.visible ? 'opacity-100' : 'translate-y-10 opacity-0'
//             } absolute bottom-4 left-4 z-50 flex items-center space-x-4 divide-x divide-slate-200 rounded-xl bg-white p-4 pr-5 text-slate-500 shadow transition-all duration-500 ease-in-out`}
//             role="alert"
//           >
//             {getVariantIcon(snack.variant)}
//             <div className="max-w-md text-ellipsis ps-4 font-normal">{snack.message}</div>
//           </div>
//         ))}
//       </div>
//     </SnackContext.Provider>
//   );
// };

// const getVariantIcon = (variant) => {
//   switch (variant) {
//     case 'success':
//       return <SuccessIcon />;
//     case 'error':
//       return <ErrorIcon />;
//     default:
//       throw new Error(`Unknown variant: ${variant}`);
//   }
// };
