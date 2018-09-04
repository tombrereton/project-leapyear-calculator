import IsLeapYear from '../src/leapyear-calculator';

test('leap year calculator should identify year one as not a leap year', () => {
    let expected = false;
    let year = 1;

    let actual = IsLeapYear(year)

    expect(actual).toBe(expected);
});