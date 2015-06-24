using System.Collections.Generic;
using Microsoft.AspNet.Mvc;
using AngularExample.Models;

namespace AngularExample.Controllers
{
	[Route("api/[controller]")]
    public class MoviesController : Controller
    {
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
			return new List<Movie> {
				new Movie {Id=1, Title="Star Wars", Director="Lucas"},
				new Movie {Id=2, Title="King Kong", Director="Jackson"},
				new Movie {Id=3, Title="Memento", Director="Nolan"}
			};
		}

		[HttpPost]
		public IActionResult Post([FromBody]Movie movie)
		{
			if (movie.Id == 0)
			{
				return new ObjectResult(movie);
			}
			else
			{
				return new ObjectResult(movie);
			}
		}
	}
}
