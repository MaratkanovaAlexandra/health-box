import { format } from 'date-fns'

export const formatDate = (time: number) =>
  format(new Date(time), 'hh:mm dd.MM.yy')
