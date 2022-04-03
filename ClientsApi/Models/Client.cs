using System.ComponentModel.DataAnnotations;

namespace ClientsApi.Models
{
    public class Client
    {
        public long Id { get; set; }

        [Required]
        public string? Name { get; set; }

        [Required]
        public string? Cpf { get; set; }

        [Required]
        public string? Rg { get; set; }
    }
}