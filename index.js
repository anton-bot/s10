/**
 * Calculates the check digit of the S10-type postal tracking numbers.
 * The tracking number has the format EB000717595HK, where the last digit (5)
 * is the checksum.
 */
class S10 {
  /**
   * Returns the ninth digit (checksum) based on the first eight digits of the
   * postal tracking number.
   * @param {string|number} firstEightDigits - First eight digits as string or
   * number, e.g. '00071759' or 71759.
   * @returns {number} A single-digit number which is the ninth number in the
   * postal tracking number.
   */
  static calculateCheckDigit(firstEightDigits) {
    if (!firstEightDigits) {
      throw new Error('Empty or incorrect first eight digits passed.');
    }

    if (typeof firstEightDigits === 'number') {
      firstEightDigits = firstEightDigits.toString().padStart(8, '0');
    }

    const digits = firstEightDigits.split('');
    const sum = digits[0] * 8
      + digits[1] * 6
      + digits[2] * 4
      + digits[3] * 2
      + digits[4] * 3
      + digits[5] * 5
      + digits[6] * 9
      + digits[7] * 7;

    let checkDigit = 11 - (sum % 11);

    if (checkDigit === 10) {
      return 0;
    }

    if (checkDigit === 11) {
      return 5;
    }

    return checkDigit;
  }

  static trackingNumberIsValid(trackingNumber) {
    if (!trackingNumber) {
      return false;
    }

    if (trackingNumber.length !== 13) {
      return false;
    }

    if (!trackingNumber.match(/[A-Z]{2}\d{9}[A-Z]{2}/)) {
      return false;
    }

    const eightNumbers = trackingNumber.substr(2, 8);
    const checkDigit = parseInt(trackingNumber.substr(10, 1));
    const expectedCheckDigit = S10.calculateCheckDigit(eightNumbers);

    if (checkDigit === expectedCheckDigit) {
      return true;
    }

    return false;
  }
}

module.exports = S10;
