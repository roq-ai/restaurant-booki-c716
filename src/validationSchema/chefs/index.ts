import * as yup from 'yup';

export const chefValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
});
