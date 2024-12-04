using lab13.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace lab13.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(
            ILogger<HomeController> logger
            )
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Quiz()
        {
            QuizGenerator quiz = QuizGenerator.instance;

            quiz.reset();

            Problem problem = quiz.addProblem();

            return View(problem);
        }

        [HttpPost]
        public IActionResult Quiz(int id, int userAnswer, string action)
        {
            QuizGenerator quiz = QuizGenerator.instance;

            if (ModelState.IsValid)
            {
                var answer = (Request.Form["userAnswer"] != "") ? Int32.Parse(Request.Form["userAnswer"]) : 0;

                quiz.checkAnswer(id, answer);

                if (action == "Next")
                {
                    Problem expression = quiz.addProblem();

                    return View(expression);
                }

                return View("Result", quiz);

            } else
            {
                Problem expression = quiz.findProblem(id);

                if (expression != null)
                {
                    ViewData["data"] = "Incorrect data";

                    return View(expression);
                }
                else
                {
                    return Error();
                }
            }
        }

        public IActionResult Result()
        {
            QuizGenerator quiz = QuizGenerator.instance;

            return View("Result", quiz);
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}