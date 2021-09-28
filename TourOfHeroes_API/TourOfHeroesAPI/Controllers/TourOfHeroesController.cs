using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.IO;
using System.Web;



namespace TourOfHeroesAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TourOfHeroesController : ControllerBase
    {
        
       public TourOfHeroesController()
        {
            
        }

        [HttpGet]
        public string Get()
        {
          
          string str = System.IO.File.ReadAllText("App_Data//Heroes.txt");



            return str;
            
        }
    }
}
