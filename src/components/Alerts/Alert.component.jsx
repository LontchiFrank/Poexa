import React, { useEffect, useState } from "react";

// function Alert({ color }) {
//   return (
//     <div
//       class={`${color} mb-4 rounded-lg py-5 px-6 text-base text-success-700`}
//       role="alert"
//     >
//       <h4 class="mb-2 text-2xl font-medium leading-tight"> Login Success!</h4>
//     </div>
//   );
// }

const Alert = ({ color, title }) => {
  const [alert, setAlert] = useState(true);

  setTimeout(() => {
    setAlert(false);
  }, 3000);
  return (
    <div>
      {alert && (
        <div
          class="mb-4 rounded-lg bg-success-300 py-5 px-6 text-base text-success-700"
          role="alert"
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default Alert;
