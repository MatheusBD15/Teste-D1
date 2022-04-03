using System.ComponentModel.DataAnnotations;

namespace ClientsApi.Models
{
    public class Cellphone
    {
        public long Id { get; set; }

        [Required]
        public string? Number { get; set; }

        [Required]
        public string? Identification { get; set; }

        [Required]
        public long ClientId { get; set; }

        [Required]
        public Client? Client { get; set; }
    }
}