const KEY = {
  CHARGE_MONEY: 'charge-money',
};

const CHARGE_MONEY_RULE = {
  MIN: 1,
  MAX: 10_000,
};

const MESSAGE = {
  ERROR_EMPTY_CHARGE_MONEY: '투입할 금액을 입력해주세요.',
  ERROR_RANGED_CHARGE_MONEY: `투입할 금액은 ${CHARGE_MONEY_RULE.MIN}원 이상, ${CHARGE_MONEY_RULE.MAX}원 이하여야 합니다.`,
};

export { KEY, CHARGE_MONEY_RULE, MESSAGE };
