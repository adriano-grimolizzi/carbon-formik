import {useCallback, useState} from 'react';

const useFieldValidation = (errorSchema, warningSchema, infoSchema) => {
  const [props, setProps] = useState({});
  const validate = useCallback(
    value => {
      try {
        if (errorSchema) {
          errorSchema.validateSync(value);
        }
      } catch (err) {
        setProps({error: err.message});
        return err.message;
      }

      try {
        if (warningSchema) {
          warningSchema.validateSync(value);
        }
      } catch (err) {
        setProps({warning: err.message});
        return;
      }

      try {
        if (infoSchema) {
          infoSchema.validateSync(value);
        }
      } catch (err) {
        setProps({info: err.message});
        return;
      }

      setProps({});
    },
    [setProps, errorSchema, warningSchema, infoSchema]
  );
  return [validate, props];
};

export default useFieldValidation;
