import IsLeapYear from '../src/leapyear-calculator';

test('leap year calculator should identify year one as not a leap year', () => {
    let expected = false;
    let year = 1;

    let actual = IsLeapYear(year)

    expect(actual).toBe(expected);
});

test('leap year calculator should identify year four as a leap year', () => {
    let expected = true;
    let year = 4;

    let actual = IsLeapYear(year)

    expect(actual).toBe(expected);
});

test('leap year calculator should identify year eight as a leap year', () => {
    let expected = true;
    let year = 8;

    let actual = IsLeapYear(year)

    expect(actual).toBe(expected);
});

test('leap year calculator should identify year twelve as a leap year', () => {
    let expected = true;
    let year = 12;

    let actual = IsLeapYear(year)

    expect(actual).toBe(expected);
});

test('leap year calculator should identify year 100 as not a leap year', () => {
    let expected = false;
    let year = 100;

    let actual = IsLeapYear(year)

    expect(actual).toBe(expected);
});

test('leap year calculator should identify year 200 as not a leap year', () => {
    let expected = false;
    let year = 100;

    let actual = IsLeapYear(year)

    expect(actual).toBe(expected);
});

test('leap year calculator should identify year 300 as not a leap year', () => {
    let expected = false;
    let year = 100;

    let actual = IsLeapYear(year)

    expect(actual).toBe(expected);
});

test('leap year calculator should identify year 400 as a leap year', () => {
    let expected = true;
    let year = 400;

    let actual = IsLeapYear(year)

    expect(actual).toBe(expected);
});

test('leap year calculator should identify year 800 as a leap year', () => {
    let expected = true;
    let year = 800;

    let actual = IsLeapYear(year)

    expect(actual).toBe(expected);
});

test('leap year calculator should identify year 1200 as a leap year', () => {
    let expected = true;
    let year = 1200;

    let actual = IsLeapYear(year)

    expect(actual).toBe(expected);
});