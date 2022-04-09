using System.ComponentModel.DataAnnotations;

namespace ClientsApi.Models
{
    public class Cellphone
    {
        public long Id { get; set; }

        [Required]
        [RegularExpression(@"(^[0-9]{2})?(\s|-)?(9?[0-9]{4})-?([0-9]{4}$)")]
        public string? Number { get; set; }

        [Required]
        public string? Identification { get; set; }

        [Required]
        public long ClientId { get; set; }
    }
}