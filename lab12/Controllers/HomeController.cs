using lab11.Models;
using lab12.Models;
using lab12.Services;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using System.Reflection;


namespace lab12.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly CalcService _calcService;

        public HomeController(
            ILogger<HomeController> logger,
            CalcService calcService
        )
        {
            _logger = logger;
            _calcService = calcService;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ManualSingle()
        {
            if (Request.Method == "POST")
            {
                ViewData["data"] = _checkInput();

                return View("Result");
            }

            ViewData["Title"] = "Manual";

            return View("Input");
        }

        [HttpGet, ActionName("ManualSeparate")]
        public IActionResult ManualSeparateGet()
        {
            ViewData["Title"] = "ManualWithSeparateHandlers";

            return View("Input");
        }

        [HttpPost, ActionName("ManualSeparate")]
        public IActionResult ManualSeparatePost()
        {
            ViewData["data"] = _checkInput();

            return View("Result");
        }

        [HttpGet]
        public IActionResult ModelBindingParams()
        {
            ViewData["Title"] = "ModelBindingInParameters";

            return View("Input");
        }

        [HttpPost]
        public IActionResult ModelBindingParams(int firstValue, char operation, int secondValue)
        {
            if (ModelState.IsValid)
            {
                ViewData["data"] = _calcService.Calc(firstValue, operation, secondValue);
            }
            else
            {
                ViewData["data"] = "Incorrect input data";
            }

            return View("Result");
        }

        [HttpGet]
        public IActionResult ModelBindingSeparate()
        {
            ViewData["Title"] = "ModelBindingInSeparateModel";

            return View("Input");
        }

        [HttpPost]
        public IActionResult ModelBindingSeparate(FormData data)
        {
            ViewData["data"] = ModelState.IsValid
                ? _calcService.Calc(data.firstValue, data.operation, data.secondValue)
                : "Incorrect input data";

            return View("Result");
        }

        private string _checkInput()
        {
            var result = "";
            try
            {
                result = _calcService.Calc(
                    Int32.Parse(Request.Form["firstValue"]),
                    Convert.ToChar(Request.Form["operation"]),
                    Int32.Parse(Request.Form["secondValue"])
                );
                return result;
            }
            catch (Exception ex)
            when (ex is ArgumentNullException
               || ex is FormatException
               || ex is OverflowException)
            {
                result = "Incorrect input data";
                return result;
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}