import dayjs from 'dayjs';

export const formatDate = (date, format) => {
  const formattedDate = dayjs(date).format(format);

  const result = () => formattedDate;
  result.toKor = () =>
    formattedDate.replace('AM', '오전').replace('PM', '오후');

  return result;
};
