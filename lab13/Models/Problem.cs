using System.ComponentModel.DataAnnotations;

namespace lab13.Models
{
    public class Problem
    {
        public int id { get; set; }

        public int firstValue { get; set; }

        public int secondValue { get; set; }

        public char operation { get; set; }

        public int answer { get; set; }

        [Required]
        public int userAnswer { get; set; }

        public Problem(int probId) {
            Random random = new Random();

            id = probId;
            firstValue = random.Next(11);
            secondValue = random.Next(11);

            if (random.Next(2) == 0)
            {
                operation = '+';
                answer = firstValue + secondValue;
            } else {
                operation = '-';
                answer = firstValue - secondValue;
            }
        }

        public class ProblemValidationAttribute : ValidationAttribute
        {
            string[] _names;

            public ProblemValidationAttribute(string[] names)
            {
                _names = names;
            }
            public override bool IsValid(object value)
            {
                if (value != null && _names.Contains(value.ToString()))
                    return true;

                return false;
            }
        }
    }
}
