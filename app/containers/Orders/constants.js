export const GET_ORDERS_LIST = 'app/orders/GET_ORDERS_LIST';

export const DEFAULT_LIST_PAGE = 1;
export const DEFAULT_ITEMS_PER_PAGE = 10;
export const DEFAULT_TOTAL_ITEMS = 0;
export const DEFAULT_TOTAL_PAGES = 0;

export const ORDER_STATE_CREATED = 1;
export const ORDER_STATE_NOT_ENOUGH = 2;
export const ORDER_STATE_PAY_START = 3;
export const ORDER_STATE_PAY_FAIL = 4;
export const ORDER_STATE_PAY_SUCCESS = 5;
export const ORDER_STATE_TOKENS_MINT_START = 6;
export const ORDER_STATE_TOKENS_MINT_FAIL = 7;
export const ORDER_STATE_TOKENS_MINT_SUCCESS = 8;
export const ORDER_STATE_WITHDRAW_START = 9;
export const ORDER_STATE_WITHDRAW_FAIL = 10;
export const ORDER_STATE_WITHDRAW_SUCCESS = 11;
export const ORDER_STATE_REFUND_START = 12;
export const ORDER_STATE_REFUND_FAIL = 13;
export const ORDER_STATE_REFUND_SUCCESS = 14;
export const ORDER_STATE_CLOSE = 15;

export const ORDER_STATUSES = {
  [ORDER_STATE_CREATED]: 'Created',
  [ORDER_STATE_NOT_ENOUGH]: 'Not Enough',
  [ORDER_STATE_PAY_START]: 'Payment Start',
  [ORDER_STATE_PAY_FAIL]: 'Payment Fail',
  [ORDER_STATE_PAY_SUCCESS]: 'Payment Success',
  [ORDER_STATE_TOKENS_MINT_START]: 'Mint Start',
  [ORDER_STATE_TOKENS_MINT_FAIL]: 'Mint Fail',
  [ORDER_STATE_TOKENS_MINT_SUCCESS]: 'Mint Success',
  [ORDER_STATE_WITHDRAW_START]: 'Widthraw Start',
  [ORDER_STATE_WITHDRAW_FAIL]: 'Widthraw Fail',
  [ORDER_STATE_WITHDRAW_SUCCESS]: 'Widthraw Success',
  [ORDER_STATE_REFUND_START]: 'Refund Start',
  [ORDER_STATE_REFUND_FAIL]: 'Refund Fail',
  [ORDER_STATE_REFUND_SUCCESS]: 'Refund Success',
  [ORDER_STATE_CLOSE]: 'Closed',
};
