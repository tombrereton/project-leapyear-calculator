using LeapYearCalculatorProject;
using NUnit.Framework;

namespace LeapYearCalculatorTests
{

    [TestFixture]
    public class LeapYearCalculatorShould
    {
        [Test]
        public void MarkYearOneAsNonLeapYear()
        {
            // Arrange
            var expected = false;
            var year = 1;

            // Act
            var actual = LeapYearCalculator.IsLeapYear(year);

            // Assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void MarkYearFourAsLeapYear()
        {
            // Arrange
            var expected = true;
            var year = 4;

            // Act
            var actual = LeapYearCalculator.IsLeapYear(year);

            // Assert
            Assert.That(actual, Is.EqualTo(expected));
        }

        [Test]
        public void MarkYearEightAsLeapYear()
        {
            // Arrange
            var expected = true;
            var year = 8;

            // Act
            var actual = LeapYearCalculator.IsLeapYear(year);

            // Assert
            Assert.That(actual, Is.EqualTo(expected));
        }
    }
}
