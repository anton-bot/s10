# s10 - Tracking number validation / generation tool

Generate and verify the check digit for the UPU S10 postal tracking codes.

## Background 

All postal administrations in the world use 13-character tracking numbers,
such as `EB000717618HK`.

The first two characters denote shipment type, the last two characters are the
originating country. 

The first eight digits are the shipment number, while the ninth digit (`8` in
this example) is the checksum based on the previous eight numbers. 

## Generate the check digit based on the first eight numbers

You have the first eight digits and you want to generate the check digit.

```js
const S10 = require('s10');

const digit = S10.calculateCheckDigit('00071761'); // 8

// OR:
// const digit = S10.calculateCheckDigit(71761); // 8
```

## Validate the tracking number is correct

Returns true if the tracking number contain 13 characters (two letters, nine digits, two letters)
and if the check digit is correct.

```js
const S10 = require('s10');

const valid1 = S10.trackingNumberIsValid('EB000717618HK'); // true
const valid2 = S10.trackingNumberIsValid('EB900717618HK'); // false
const valid3 = S10.trackingNumberIsValid('1234567891011'); // false
```
