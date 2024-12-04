namespace lab12.Services
{
    public class CalcService
    {
        public string Calc(int firstValue, char operation, int secondValue)
        {
            switch (operation)
            {
                case '+':
                    return $"{firstValue} + {secondValue} = " + (firstValue + secondValue);
                case '-':
                    return $"{firstValue} - {secondValue} = " + (firstValue - secondValue);
                case '*':
                    return $"{firstValue} * {secondValue} = " + (firstValue * secondValue);
                case '/':
                    return _checkDivisionByZero(firstValue, secondValue);
            }

            return "";
        }
        private string _checkDivisionByZero(int firstValue, int secondValue)
        {
            try
            {
                var divResult = firstValue / secondValue;
                return $"{firstValue} / {secondValue} = " + (firstValue / secondValue);
            }
            catch (DivideByZeroException)
            {
                return "Cannot divide by zero";
            }
        }
    }
}
