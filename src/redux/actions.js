export const addFeedBack = (value, id) => ({
  type: 'add/feedback',
  payload: value,
  id: id,
});

export const countTotalFeedback = () => ({
  type: 'count/totalFeedback',
  payload: '',
});
