import React from "react";

interface inputDetails {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: () => void;
}

export default function InputForm({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
}: inputDetails) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 "
        required
      />
    </div>
  );
}
