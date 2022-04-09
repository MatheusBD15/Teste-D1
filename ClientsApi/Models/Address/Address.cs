using System.ComponentModel.DataAnnotations;

namespace ClientsApi.Models
{
    public class Address
    {
        public long Id { get; set; }

        [Required]
        public string? Country { get; set; }

        [Required]
        public string? State { get; set; }

        [Required]
        [RegularExpression(@"(^[0-9]{5})-?([0-9]{3}$)")]
        public string? PostalCode { get; set; }

        [Required]
        public string? Neighbourhood { get; set; }

        [Required]
        public string? Street { get; set; }

        [Required]
        public long ClientId { get; set; }
    }
}