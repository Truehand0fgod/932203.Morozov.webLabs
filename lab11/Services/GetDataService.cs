namespace lab11.Services
{
    public class GetDataService : IGetData
    {
        public int firstNumber { get; private set; }
        public int secondNumber { get; private set; }

        public GetDataService()
        {
            Random random = new Random();
            (firstNumber, secondNumber) = (random.Next(11), random.Next(11));
        }

        public int Sum()
        {
            return firstNumber + secondNumber;
        }

        public int Mul()
        {
            return firstNumber * secondNumber;
        }

        public int Sub()
        {
            return firstNumber - secondNumber;
        }

        public int Div()
        {
            try
            {
                var divResult = firstNumber / secondNumber;
                return divResult;
            }
            catch (DivideByZeroException)
            {
                return -1;
            }
        }
    }
}
