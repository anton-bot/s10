const S10 = require('./index');

describe('Generate check digits', () => {
  it('must calculate check digit correctly', () => {
    expect(S10.calculateCheckDigit('00071758')).toBe(1);
    expect(S10.calculateCheckDigit(71758)).toBe(1);

    expect(S10.calculateCheckDigit('96633102')).toBe(0);
    expect(S10.calculateCheckDigit(96633102)).toBe(0);

    expect(S10.calculateCheckDigit('76129403')).toBe(8);
    expect(S10.calculateCheckDigit(76129403)).toBe(8);
  });
});

describe('Validate tracking numbers', () => {
  it('must recognize invalid format of tracking numbers', () => {
    expect(S10.trackingNumberIsValid()).toBe(false);
    expect(S10.trackingNumberIsValid('')).toBe(false);
    expect(S10.trackingNumberIsValid(0)).toBe(false);

    expect(S10.trackingNumberIsValid('1847176155123')).toBe(false);
    expect(S10.trackingNumberIsValid('RA184717615H1')).toBe(false);
  });

  it('must recognize invalid check digit', () => {
    expect(S10.trackingNumberIsValid('EB000717595HK')).toBe(true);
    expect(S10.trackingNumberIsValid('EB000717594HK')).toBe(false);
    expect(S10.trackingNumberIsValid('EB000717535HK')).toBe(false);
  });
});
