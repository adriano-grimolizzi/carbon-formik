import React from "react";
import { Field, Formik } from "formik";
import DateRange from "carbon-react/lib/__experimental__/components/date-range";
import * as Yup from "yup";
import { formikDateRangeAdapter } from "./formikAdapter";
import useFieldValidation from "./useFieldValidation";

const FormikDateRange = formikDateRangeAdapter(DateRange);

const Example1 = () => {
  const payPeriod = {
    startDate: "2020-01-10",
    endDate: "2020-01-20",
  };

  const validatePropsWithPrefix = (prefix) => ({ error, warning, info }) => ({
    [`${prefix}Error`]: error,
    [`${prefix}Warning`]: warning,
    [`${prefix}Info`]: info,
  });
  const [validateStartDate, startDateProps] = useFieldValidation(
    Yup.mixed()
      .test({
        test: (value) =>
          Yup.date()
            .max(value[1], "Should be before the end date")
            .validateSync(value[0]),
      })
      .test({
        test: (value) =>
          Yup.date()
            .min(
              payPeriod.startDate,
              `The minimum date is ${payPeriod.startDate}`
            )
            .max(payPeriod.endDate, `The maximum date is ${payPeriod.endDate}`)
            .validateSync(value[0]),
      })
  );
  const [validateEndDate, endDateProps] = useFieldValidation(
    Yup.mixed()
      .test({
        test: (value) =>
          Yup.date()
            .min(value[0], "Should be after the start date")
            .validateSync(value[1]),
      })
      .test({
        test: (value) =>
          Yup.date()
            .min(
              payPeriod.startDate,
              `The minimum date is ${payPeriod.startDate}`
            )
            .max(payPeriod.endDate, `The maximum date is ${payPeriod.endDate}`)
            .validateSync(value[1]),
      })
  );
  const dateRangeProps = [startDateProps, endDateProps];

  const errorsCount = dateRangeProps.reduce(
    (total, { error }) => total + (error ? 1 : 0),
    0
  );
  return (
    <Formik
      initialValues={{
        dateRange: [payPeriod.startDate, payPeriod.endDate],
      }}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ errors, touched, values, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <h1>Formik Example...</h1>
          <Field
            name="dateRange"
            startLabel="Start date"
            endLabel="End date"
            validate={(value) => {
              validateStartDate(value);
              validateEndDate(value);
            }}
            component={FormikDateRange}
            {...validatePropsWithPrefix("start")(startDateProps)}
            {...validatePropsWithPrefix("end")(endDateProps)}
          />
          <button type="submit" disabled={!!errorsCount}>
            Submit
          </button>
          <br />
          <pre>{JSON.stringify({ errors, touched, values }, null, 2)}</pre>
        </form>
      )}
    </Formik>
  );
};

export default Example1;
