import * as yup from 'yup';

export const tableValidationSchema = yup.object().shape({
  restaurant_id: yup.string().nullable(),
});
