import React, { TextareaHTMLAttributes } from 'react';

import './style.scss'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

export const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
  return (
  <div className="textarea-block">
    <label htmlFor={name}>{label}</label>
    <textarea id={name} {...rest} />
  </div>
  );
}