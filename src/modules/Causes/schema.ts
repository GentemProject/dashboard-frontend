import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const schema = yup.object().shape({
  name: yup.string().required().trim(),
});

export const schemaResolver = yupResolver(schema);
