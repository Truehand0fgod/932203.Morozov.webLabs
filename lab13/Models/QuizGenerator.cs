namespace lab13.Models
{
    public class QuizGenerator
    {
        public static QuizGenerator instance { get; set; } = new QuizGenerator();

        public List<Problem> problems { get; set; }

        public int rightAnswers { get; set; }

        public QuizGenerator() {
            problems = new List<Problem> { };
        }

        public Problem addProblem()
        {
            Problem problem = new Problem(problems.Count + 1);
            problems.Add(problem);
            return problem;
        }

        public Problem? findProblem(int id)
        {
            foreach (Problem problem in problems)
            {
                if (problem.id == id)
                {
                    return problem;
                }
            }

            return null;
        }

        public void checkAnswer(int id, int userAnswer)
        {
            int? correctAnswer = null;

            foreach (Problem prob in problems)
            {
                if (prob.id == id)
                {
                    correctAnswer = prob.answer;
                    prob.userAnswer = userAnswer;
                }
            }

            if (!(correctAnswer == null) && userAnswer == correctAnswer)
            {
                rightAnswers++;
            }
        }

        public void reset()
        {
            problems = new List<Problem> { };
            rightAnswers = 0;
        }

        public bool isEmpty()
        {
            return problems.Count == 0;
        }
    }
}
