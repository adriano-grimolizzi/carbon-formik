import React from "react";

// Generic component wrapper
const formikAdapter = (getValue) => (Component) => ({
  field,
  form,
  ...rest
}) => {
  const onChange = (e) => {
    form.setFieldValue(field.name, getValue(e));
  };

  const onBlur = (e) => {
    form.setFieldValue(field.name, getValue(e));
    form.setFieldTouched(field.name);
    form.validateField(field.name);
  };
  return <Component {...field} {...rest} onChange={onChange} onBlur={onBlur} />;
};

const getDateRangeValue = (e) => e.target.value.map((date) => date.rawValue);

export const formikDateRangeAdapter = formikAdapter(getDateRangeValue);
