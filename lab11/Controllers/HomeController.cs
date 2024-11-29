using lab11.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace lab11.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult UsingModel()
        {
            NumbersOperations data = GetData();
            return View(data);
        }

        public IActionResult UsingViewData()
        {
            ViewData["data"] = GetData();
            return View();
        }

        public IActionResult UsingViewBag()
        {
            ViewBag.data = GetData();
            return View();
        }

        public IActionResult UsingServiceInjection()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
        public NumbersOperations GetData()
        {
            Random random = new Random();
            (var firstNumber, var secondNumber) = (random.Next(11), random.Next(11));

            return new NumbersOperations
            {
                firstNumber = firstNumber,
                secondNumber = secondNumber,
                sum = firstNumber + secondNumber,
                sub = firstNumber - secondNumber,
                mul = firstNumber * secondNumber,
                div = checkDivisionByZero(firstNumber, secondNumber)
            };
        }
        public int checkDivisionByZero(int firstNumber, int secondNumber)
        {
            try
            {
                var divResult = firstNumber / secondNumber;
                return divResult;
            }
            catch (DivideByZeroException)
            {
                return  -1;
            }
        }
    }
}