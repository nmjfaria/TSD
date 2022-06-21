using System.ComponentModel.DataAnnotations;

namespace YummyTSD.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Difficulty { get; set; }
        public int Likes { get; set; }

        [DataType(DataType.Date)]
        public System.DateTime ReleaseDate { get; set; }
        public string Ingredients { get; set; }
        public string Process { get; set; }
        public string Tips { get; set; }
        
    }
}
