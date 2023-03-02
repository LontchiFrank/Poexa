import React from "react";

function Alert({ color }) {
  return (
    <div
      class={`${color} mb-4 rounded-lg py-5 px-6 text-base text-success-700`}
      role="alert"
    >
      <h4 class="mb-2 text-2xl font-medium leading-tight"> Login Success!</h4>
    </div>
  );
}

export default Alert;
